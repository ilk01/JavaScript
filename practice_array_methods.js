// Task1
const getSpecialNumbers = arr => arr.filter(num => num % 3 === 0);

const numbers = [1, 3, 4, 6, 7, 9, 10];
console.log('\n==========Task1==========\n');
console.log(getSpecialNumbers(numbers));

// Task2
const sortDesc = arr => arr.slice().sort((a, b) => b - a);


const nums = [5, 2, 9, 1, 7];
console.log('\n==========Task2==========\n');
console.log(sortDesc(nums));

// Task3
const flatArray = arr => arr.flat();

const mixed = [1, [2, 3], 4, [5, 6]];
console.log('\n==========Task3==========\n');
console.log(flatArray(mixed));

// Task4
const getMessagesForBestStudents = (all, failed) => all.filter(name => !failed.includes(name)).map(name => `Good job, ${name}`);

const all = ['Ann', 'Bob', 'Cat', 'Dan'];
const failed = ['Bob', 'Dan'];

console.log('\n==========Task4==========\n');
console.log(getMessagesForBestStudents(all, failed));
