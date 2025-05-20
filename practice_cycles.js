console.log('------------------------cycles------------------------');
console.log(' ');

function task1() {
    const n = 150;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log('Task1 Result:', sum);
}

function task2() {
    const m = 3;
    const n = 15;
    let result = 1;
    for (let i = m; i <= n; i++) {
        if (i % 2 !== 0) {
            result *= i;
        }
    }
    console.log('Task2 Result:', result);
}

function task3() {
    for (let i = 1; i <= 5; i++) {
        console.log(`=> ${i} <=`);
        for (let j = 1; j <= 5; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

console.log('Task1');
console.log(' ');
task1();
console.log('Task2');
console.log(' ');
task2();
console.log('Task3');
console.log(' ');
task3();
console.log(' ');
console.log('------------------------Konec cycles------------------------');
