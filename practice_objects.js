// Task1
const transformToObject = arr => arr.reduce((obj, item) => (obj[item] = item, obj), {});
console.log('\n==========Task1==========:\n');
console.log(transformToObject(['a', 1.43, 'krisa']));

// Task2
const concatProps = obj => Object.values(obj);
console.log('\n==========Task2==========:\n');
console.log(concatProps({ name: 'Ilkin Agayev', age: 32, interest: 'kibersport' }));

// Task3
const getAdults = obj =>
    Object.keys(obj).filter(name => obj[name] >= 18);


console.log('\n==========Task3==========:\n');
console.log(getAdults({
    'John Doe': 19,
    Tom: 17,
    Bob: 18,
}));

// Task4
const copyObj = obj => ({ ...obj });

const original = { name: 'Ilkin', age: 32, interest: 'kibersport' };
const copied = copyObj(original);

console.log('\n==========Task4==========:\n');
console.log(copied);
console.log(copied === original);  // false, тк новый объект

arr.reduce((obj, item) => (obj[item] = item, obj), {});