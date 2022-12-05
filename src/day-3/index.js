const { getData } = require('../utils');

const data = getData(__dirname);

const contents = data.split('\n');

// This takes the characters, turns them into an array and then using that array creates an object with keys whose value is the priority
const priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	.split('')
	.reduce((obj, key, index) => ({ ...obj, [key]: index + 1 }), {});

function runPart1() {
	let prioritySum = 0;

	contents.forEach((content) => {
		const firstHalf = content.substring(0, content.length / 2).split('');
		const secondHalf = content.substring(content.length / 2);

		const duplicate = firstHalf.find((letter) => secondHalf.includes(letter));

		prioritySum += priority[duplicate];
	});

	console.log(prioritySum);
}

runPart1();

function splitIntoGroups() {
	const groups = [];
	for (let i = 0; i < contents.length / 3; i++) {
		groups.push(contents.slice(i * 3, i * 3 + 3));
	}

	return groups;
}

function runPart2() {
	let prioritySum = 0;

	const groups = splitIntoGroups();

	groups.forEach((group) => {
		const firstElf = group[0].split('');

		const duplicate = firstElf.find(
			(letter) => group[1].includes(letter) && group[2].includes(letter),
		);

		prioritySum += priority[duplicate];
	});

	console.log(prioritySum);
}

runPart2();
