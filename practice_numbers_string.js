console.log('\n==========Numbers==========\n');

// Task1
const getFiniteNumbers = arr => arr.filter(Number.isFinite);
const getNaN = arr => arr.filter(Number.isNaN);
const getNaNV2 = arr => arr.filter(el => isNaN(el));
const getIntegers = arr => arr.filter(Number.isInteger);

const values = [1, '2', NaN, Infinity, -Infinity, 3.14, 'abc', null, undefined, {}, [], 42];

console.log('==========Task1==========\n');
console.log('getFiniteNumbers:', getFiniteNumbers(values));
console.log('getNaN:', getNaN(values));
console.log('getNaNV2:', getNaNV2(values));
console.log('getIntegers:', getIntegers(values));

// Task2
const getParsedIntegers = arr => arr.map(el => parseInt(el));
const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));
const getParsedFloatsV2 = arr => arr.map(parseFloat);

const parseValues = ['123.45', '42px', 'abc', 3.14, null, undefined, {}, [], '0x11'];

console.log('\n==========Task2==========\n');
console.log('getParsedIntegers:', getParsedIntegers(parseValues));
console.log('getParsedFloats:', getParsedFloats(parseValues));
console.log('getParsedFloatsV2:', getParsedFloatsV2(parseValues));

// Task3
const multiRound = num => {
    const f = 100;
    return [
        Math.floor(num * f) / f,
        Math.round(num * f) / f,
        Math.ceil(num * f) / f,
        Math.trunc(num * f) / f
    ];
};

console.log('\n==========Task3==========\n');
console.log(multiRound(1.2345));
console.log(multiRound(-1.2367));

// Task4
const getMaxAbsoluteNumber = arr =>
    Array.isArray(arr) && arr.length ? Math.max(...arr.map(Math.abs)) : null;

console.log('\n==========Task4==========\n');
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));
console.log(getMaxAbsoluteNumber([]));
console.log(getMaxAbsoluteNumber('not array'));


// Task1
const splitText = (text, len = 10) =>
    typeof text !== 'string' ? null : text
            .match(new RegExp(`.{1,${len}}`, 'g'))
            .map((chunk, i) => i === 0 ? chunk[0].toUpperCase() + chunk.slice(1) : chunk)
            .join('\n');


console.log('\n==========Task1==========\n');
console.log(splitText('abcd efghijklmnop', 4));
console.log(splitText('Hi Gitler!'));
console.log(splitText(12345)); // null

// Task2
const sortContacts = (contacts, flag = true) =>
    Array.isArray(contacts)
        ? [...contacts].sort((a, b) =>
            flag
                ? a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
                : b.name.localeCompare(a.name, undefined, { sensitivity: 'base' })
        )
        : (() => { throw new Error('Неверный тип массива'); })()


const contacts = [
    { name: 'Tom', phoneNumber: '777-77-77' },
    { name: 'Anna', phoneNumber: '888-88-88' },
    { name: 'bob', phoneNumber: '999-99-99' },
];

console.log('\n==========Task2==========\n');
console.log(sortContacts(contacts));
console.log(sortContacts(contacts, false));
console.log(sortContacts('not array'));





console.log('\n==========LeveL1==========\n');

const str1 = "JavaScript";
const str2 = "HELLO";
const str3 = "programming";
const str4 = " hello world ";

const length = s => s.length;
const firstLast = s => s ? [s[0], s.at(-1)] : [];
const toLower = s => s.toLowerCase();
const includesSub = (s, sub) => s.includes(sub);
const trimStr = s => s.trim();

console.log('\n==========Task1==========\n', length(str1));
console.log('\n==========Task2==========\n', ...firstLast(str1));
console.log('\n==========Task3==========\n', toLower(str2));
console.log('\n==========Task4==========\n', includesSub(str3, "gram"));
console.log('\n==========Task5==========\n', trimStr(str4));



console.log('\n==========LeveL2==========\n');

const capitalize = str => str ? str[0].toUpperCase() + str.slice(1) : '';
const replaceDash = str => str.replace(/-/g, '_');
const splitByComma = str => str.split(',');
const greet = name => `Привет, ${name}!`;
const substringFrom4 = str => str.substring(4);

console.log('\n==========Task1==========\n', capitalize("hello"));
console.log('\n==========Task2==========\n', replaceDash("12-34-56"));
console.log('\n==========Task3==========\n', splitByComma("apple,banana,orange"));
console.log('\n==========Task4==========\n', greet("Azer"));
console.log('\n==========Task5==========\n', substringFrom4("JavaScript"));
