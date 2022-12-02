function run() {
    const elves = input.split('\n\n');

    // part 1
    let highestValue = 0;

    // part 2
    const allCalories = []

    elves.forEach((elf) => {
        const calories = elf.split('\n');
        const value = calories.reduce((acc, current) => acc + parseInt(current), 0);
        
        // part 1
        if (value > highestValue) {
            highestValue = value;
        }

        // part 2
        allCalories.push(value);
    })
    
    const sorted = allCalories.sort((a, b) => b - a);
    const topThree = sorted[0] + sorted[1] + sorted[2];
    
    console.log('highest value:', highestValue); // part 1
    console.log('Top three:', topThree); // part 2
}

run();