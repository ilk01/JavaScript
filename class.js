//Task1
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getInfo() {
        return `Название: ${this.title}; Автор: ${this.author}; Год: ${this.year}`;
    }
}
const myBook = new Book("Преступление и наказание", "Фёдор Достоевский", 1866);

console.log('\nTask1\n');
console.log(myBook.getInfo());

//Task2

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.grades = [];
    }

    addGrade(grade) {
        if (grade >= 0 && grade <= 12) {
            this.grades.push(grade);
        } else {
            console.log(`Оценка ${grade} по 12 бальной системе`);
        }
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((acc, val) => acc + val, 0);
        return (sum / this.grades.length).toFixed(2);
    }
}

const student = new Student("Алексей", 20);
student.addGrade(12);
student.addGrade(10);
student.addGrade(11);

console.log('\nTask2\n');
console.log(`Средний балл: ${student.getAverageGrade()}`);

//Task3
class MathUtil {
    static square(num) {
        return num * num;
    }

    static sqrt(num) {
        return Math.sqrt(num);
    }

    static sum(arr) {
        return arr.reduce((acc, val) => acc + val, 0);
    }
}
console.log('\nTask3\n');
console.log(`Квадрат 5: ${MathUtil.square(5)}`);
console.log(`Корень из 25: ${MathUtil.sqrt(25)}`);
console.log(`Сумма массива [1, 2, 3, 4]: ${MathUtil.sum([1, 2, 3, 4])}`);


//Task4
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        console.log("Я животное, не трогай меня!");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`Гав-гав! Я Рекс — король двора, лучше не мешай!`);
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(`Мяу-мяу! Я Луна — босс на районе, уважай!`);
    }
}

class Wolf extends Animal {
    makeSound() {
        console.log(`WOLFF! Я Серый — лесной бандит, лучше держись подальше!`);
    }
}

class Crow extends Animal {
    makeSound() {
        console.log(`Кар-кар! Я Ворон — глаз на районе, все тайны мои.`);
    }
}

const dog = new Dog("Рекс", 5);
const cat = new Cat("Луна", 3);
const wolf = new Wolf("Серый", 7);
const crow = new Crow("Ворон", 4);

console.log('\nTask4\n');

dog.makeSound();
cat.makeSound();
wolf.makeSound();
crow.makeSound();


//Task5
class BankAccount {
    #balance;

    constructor(balance = 0) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
    }

    get balance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(200);

console.log('\nTask5\n');
console.log(`Balance: ${account.balance}`);


//Task6
const Flyer = {
    fly() {
        console.log("Qahraman может летать");
    }
};

class Hero {}

Object.assign(Hero.prototype, Flyer);

const hero = new Hero();

console.log('\nTask6\n');
hero.fly();
