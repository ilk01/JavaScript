//Task1
const numbers = [1, 3,4,6,9,12];
const result = numbers.filter(x => x % 2 === 0);

console.log('Task1')
console.log(' ');
console.log(result);
//Task2
const numbers2 = [5, 2,9,1];
const sorted = numbers2.sort((a, b) => a - b);

console.log('Task2')
console.log(' ');
console.log(sorted);
//Task3
const numbers3 = [1, 2,3,4,5,6];
const even = numbers3.filter(x => x % 2 === 0);

console.log('Task3')
console.log(' ');
console.log(even);
//Task4
const numbers4 = [1, 2,3,4];
const sum = numbers4.reduce((a, b) => a + b, 0);

console.log('Task4')
console.log(' ');
console.log(sum);
//Task5
const numbers5 = [1, [2,3],[4,5]];
const flatten = numbers5.flat(2);

console.log('Task5')
console.log(' ');
console.log(flatten);
//Task6
const allStudents = ['Alice','Bob','Charlie','Dave','Eve'];
const expelled = ['Bob','Dave'];
const result2 = allStudents.filter(name => !expelled.includes(name));

console.log('Task6')
console.log(' ');
console.log(result2);
//Task7
const students = ['Alice','Charlie'];
const message = students.map(name => `молодец, ${name}!`);

console.log('Task7')
console.log(' ');
console.log(message);

