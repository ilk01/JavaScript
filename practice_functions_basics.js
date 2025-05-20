console.log('------------------------functions------------------------');
console.log(' ');
//Task1
function sum(a, b) {
    return a + b;
}

console.log('Task1');
console.log(' ');
console.log(sum(2, 3));
console.log(sum(-1, 10));
console.log(sum(0, 0));
//Task2
console.log('Task2');
console.log(' ');
function sayHi(name) {
    console.log(`Hi, ${name}`);
}

sayHi('Tom');
sayHi('Anna');

//Task3
function getEvenOdd(num) {
    return num % 2 === 0 ? 'even' : 'odd';
}


console.log('Task3');
console.log(' ');
console.log(getEvenOdd(4));
console.log(getEvenOdd(7));
console.log(getEvenOdd(0));
//Task4
const square = (num) => num * num;

console.log('Task4');
console.log(' ');
console.log(square(5));
console.log(square(-3));
console.log(square(0));

console.log(' ');
console.log('------------------------Konec functions------------------------');
console.log(' ');