//Task1
const book = {
    title: "1984",
    author: "aleksandr pushkin",
    year: 1949
};
//Task2

book.getSummary = function () {
    return `${this.title} ot ${this.author}`;
};
console.log('=========Task2=========')
console.log(' ');

console.log(book.getSummary());
console.log(' ');
//Task3
console.log('=========Task3=========')
console.log(' ');

for (let key in book) {
    if (book.hasOwnProperty(key)) {
        console.log(`${key}: ${book[key]}`);
    }
}
console.log(' ');
//Task4
console.log('=========Task4=========')
console.log(' ');

Object.entries(book).forEach(([key, value]) => {
    console.log(`${key} => ${value}`);
});
console.log(' ');

//Task5
const newBook = { ...book, year: 2025 };
console.log('=========Task5=========')
console.log(' ');
console.log(newBook);


// Task6
console.log('=========Task6=========');
console.log(' ');

const { title, author } = book;
console.log(`Title: ${title}, Author: ${author}`);
console.log(' ');

// Task7
console.log('=========Task7=========');
console.log(' ');

function getKeysAsString(obj) {
    return Object.keys(obj).join(', ');
}
console.log(getKeysAsString(book));
console.log(' ');

// Task8
console.log('=========Task8=========');
console.log(' ');

function getStringValues(obj) {
    return Object.values(obj).filter(value => typeof value === 'string');
}
console.log(getStringValues(book));
