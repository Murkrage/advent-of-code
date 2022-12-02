const data = input.split('\n').map(item => item.split(' '))

function runPart1() {    
    const scores = {
        A: 1,
        B: 2,
        C: 3,
        X: 1,
        Y: 2,
        Z: 3
    }

    let totalScore = 0;

    data.forEach((game) => {
        const opponent = game[0];
        const you = game[1];

        totalScore += parseInt(scores[you]);

        if (scores[opponent] === 1 && scores[you] === 3) {
            // Rock beats scissors
            return;
        } else if (scores[opponent] === scores[you]) {
            // Draw
            totalScore += 3;
        } else if (scores[opponent] < scores[you] || (scores[opponent] === 3 && scores[you] === 1)) {
            // Win
            totalScore += 6;
        }
    })

    console.log(totalScore)
}

runPart1()

function runPart2() {
    const moves = {
        A: 0,
        B: 1,
        C: 2,
    }

    const scores = [1, 2 ,3]

    let totalScore = 0;

    data.forEach((game) => {
        const opponentMove = game[0];
        const move = moves[opponentMove];

        const outcome = game[1];

        switch (outcome) {
            case 'X':
                // Lose
                totalScore += scores.at(move - 1);
                break;
            case 'Y':
                // Draw
                totalScore += scores[move];
                totalScore += 3;
                break;
            case 'Z':
                // Win
                totalScore += scores.at(move + 1) ? scores.at(move + 1) : scores[0];
                totalScore += 6;
                break;
        }
    })

    console.log(totalScore);
}

runPart2();