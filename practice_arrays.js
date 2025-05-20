console.log("------------------------arrays------------------------");
console.log(' ');
console.log('Task1:')
console.log(' ');

//Task1
function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const length = arr.length;
    const first = arr[0];
    const last = arr[length - 1];

    return [length, first, last];
}
console.log(getArrayBounds([10, 20, 30]));

console.log(getArrayBounds([]));
console.log(getArrayBounds("not array"));
console.log(' ');
console.log('Task2:')
console.log(' ');
//Task2
function getSum(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    return arr.reduce((sum, num) => sum + num, 0);
}

console.log(getSum([1, 2, 3, 4]));
console.log(getSum([]));
console.log(getSum("not an array"));

console.log(' ');
console.log('Task3:')
console.log(' ');
//Task3
function getSpecialNumbers(m, n) {
    const result = [];

    for (let i = m; i <= n; i++) {
        if (i % 3 === 0) {
            result.push(i);
        }
    }

    return result;
}

console.log(getSpecialNumbers(1, 10));
console.log(getSpecialNumbers(10, 20));
console.log(getSpecialNumbers(5, 5));

console.log(' ');
console.log('Task4:')
console.log(' ');

//Task4
function swap(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return arr;
    }

    const [first, ...rest] = arr;
    return [...rest, first];
}

console.log(swap([1, 2, 3]));
console.log(swap(['a', 'b']));
console.log(swap([42]));
console.log(swap([]));


console.log('------------------------Konec arrays------------------------');
console.log(' ');