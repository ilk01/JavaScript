//Task1


const currentYear = new Date().getFullYear();

const student = {
    name: "Əli",
    surname: "Məmmədov",
    age: 20,
    specialty: "İnformasiya Texnologiyaları",
    course: 2,

    fullname() {
        return `${this.name} ${this.surname}`;
    },

    graduate_year() {
        const totalCourses = 4;
        const remainingYears = totalCourses - this.course;
        return currentYear + remainingYears;
    }
};

console.log('\nTask1\n');

console.log(student.fullname());
console.log(student.graduate_year());


//Task2

const products = [
    { name: "Laptop", price: 1200, category: "electronics", inStock: true },
    { name: "Phone", price: 800, category: "electronics", inStock: false },
    { name: "Table", price: 300, category: "furniture", inStock: true },
    { name: "Book", price: 25, category: "education", inStock: true },
    { name: "Computer", price: 1500, category: "electronics", inStock: true }
];

console.log('\nTask2\n');

const inStockProducts = products.filter(p => p.inStock);
console.log("В наличии:", inStockProducts);

const cheapProducts = products.filter(p => p.price < 500);
console.log("Дешевые товары:", cheapProducts);

const electronics = products.filter(p => p.category === "electronics");
console.log("Электроника:", electronics);

const mostExpensive = products.reduce((max, p) => p.price > max.price ? p : max, products[0]);
console.log("Самый дорогой товар:", mostExpensive);

const categoryCount = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
}, {});
console.log("Количество по категориям:", categoryCount);



//Task3



//Task4

const library = {
    books: [],

    addBook(title, author, year, isbn = null) {
        const book = { title, author, year, isbn };
        this.books.push(book);
    },

    searchBook(query) {
        const q = query.toLowerCase();
        return this.books.filter(book =>
            book.title.toLowerCase().includes(q) ||
            book.author.toLowerCase().includes(q)
        );
    },

    filterAuthor(author) {
        return this.books.filter(book => book.author === author);
    },

    filterYear(minYear, maxYear) {
        return this.books.filter(book => book.year >= minYear && book.year <= maxYear);
    },

    statistics() {
        if (this.books.length === 0) {
            return {
                total: 0,
                oldestYear: null,
                newestYear: null,
            };
        }
        const years = this.books.map(book => book.year);
        return {
            total: this.books.length,
            oldestYear: Math.min(...years),
            newestYear: Math.max(...years),
        };
    }
};

library.addBook("1984", "Джордж Оруэлл", 1949);
library.addBook("Кёроглы", "Народное творчество", 1800);
library.addBook("Аршин Мал Алан", "Узеира Гаджибейли", 1913);

console.log('\nTask4\n');

console.log("Все книги:", library.books);
console.log("Поиск 'орy'", library.searchBook("орy"));
console.log("Книги автора 'Народное творчество':", library.filterAuthor("Народное творчество"));
console.log("Книги с 1900 по 1950:", library.filterYear(1900, 1950));
console.log("Статистика:", library.statistics());


//Task5

const shoppingCart = {
    products: [
        { name: "Apple iPhone", price: 1000, quantity: 1, taxPercent: 18 },
        { name: "Samsung TV", price: 800, quantity: 2, taxPercent: 18 },
        { name: "Book", price: 20, quantity: 3, taxPercent: 0 }
    ],

    CalculateTotalPrice() {
        return this.products.reduce((sum, product) =>
            sum + product.price * product.quantity, 0);
    },

    CalculateTax() {
        return this.products.reduce((sum, product) => {
            const tax = product.price * product.quantity * (product.taxPercent / 100);
            return sum + tax;
        }, 0);
    },

    totalPriceWithTax() {
        return this.CalculateTotalPrice() + this.CalculateTax();
    },

    addProduct(newProduct) {
        const existing = this.products.find(p => p.name === newProduct.name);
        if (existing) {
            existing.quantity += newProduct.quantity || 1;
            if (newProduct.price !== undefined) existing.price = newProduct.price;
            if (newProduct.taxPercent !== undefined) existing.taxPercent = newProduct.taxPercent;
        } else {
            this.products.push({
                name: newProduct.name,
                price: newProduct.price,
                quantity: newProduct.quantity || 1,
                taxPercent: newProduct.taxPercent || 0
            });
        }
    },

    RemoveProduct(productName) {
        this.products = this.products.filter(p => p.name !== productName);
    },

    ClearCart() {
        this.products = [];
    }
};

console.log('\nTask5\n');

console.log("Общая цена без налога:", shoppingCart.CalculateTotalPrice());
console.log("Общая сумма налога:", shoppingCart.CalculateTax());
console.log("Общая цена с налогом:", shoppingCart.totalPriceWithTax());

shoppingCart.addProduct({name: "Apple iPhone", quantity: 2}); // увеличить iPhone до 3 штук
shoppingCart.addProduct({name: "New Product", price: 50, quantity: 4, taxPercent: 10});

console.log("После добавления товаров:", shoppingCart.products);

shoppingCart.RemoveProduct("Book");
console.log("После удаления книги:", shoppingCart.products);

shoppingCart.ClearCart();
console.log("После очистки корзины:", shoppingCart.products);


//Task6

const users = {
    "user1": { name: "Ali", age: 25, city: "Baku", salary: 1500 },
    "user2": { name: "Leyla", age: 30, city: "Ganja", salary: 1800 },
    "user3": { name: "Rashad", age: 28, city: "Baku", salary: 2000 },
    "user4": { name: "Nigar", age: 35, city: "Sumgait", salary: 2200 }
};

console.log('\nTask6\n');

const usersArray = Object.values(users);
console.log("Массив пользователей:", usersArray);

const groupeCity = usersArray.reduce((acc, user) => {
    if (!acc[user.city]) {
        acc[user.city] = [];
    }
    acc[user.city].push(user);
    return acc;
}, {});
console.log("Группировка по городу:", groupeCity);

const averageSalary = usersArray.reduce((sum, user) => sum + user.salary, 0) / usersArray.length;
console.log("Средняя зарплата:", averageSalary);

const highestSalary = usersArray.reduce((maxUser, user) => {
    return (user.salary > (maxUser?.salary ?? 0)) ? user : maxUser;
}, null);
console.log("Пользователь с самой высокой зарплатой:", highestSalary);

const under30 = usersArray.filter(user => user.age < 30);
console.log("Пользователи младше 30:", under30);

const namesHighSalary = usersArray
    .filter(user => user.salary > 1800)
    .map(user => user.name);
console.log("Имена с зарплатой > 1800:", namesHighSalary);


//Task7



//Task8

const textAnalyzer = {
    text: "",

    setText(newText) {
        this.text = newText;
        return this;
    },

    letterCount() {
        // Уберём все пробелы и знаки пунктуации
        return this.text.replace(/[\s\W_]/g, '').length;
    },

    wordCount() {
        const words = this.text.trim().match(/\b\w+\b/g);
        return words ? words.length : 0;
    },

    sentenceCount() {
        const sentences = this.text.match(/[^.!?]+[.!?]+/g);
        return sentences ? sentences.length : 0;
    },

    longestWord() {
        const words = this.text.match(/\b\w+\b/g);
        if (!words) return "";
        return words.reduce((a, b) => a.length >= b.length ? a : b, "");
    },

    wordFrequency() {
        const words = this.text.toLowerCase().match(/\b\w+\b/g);
        const freq = {};
        if (!words) return freq;
        words.forEach(word => {
            freq[word] = (freq[word] || 0) + 1;
        });
        return freq;
    },

    mostFrequentWord() {
        const freq = this.wordFrequency();
        let maxCount = 0;
        let mostFreqWord = "";
        for (const [word, count] of Object.entries(freq)) {
            if (count > maxCount) {
                maxCount = count;
                mostFreqWord = word;
            }
        }
        return mostFreqWord;
    },

    averageWordLength() {
        const words = this.text.match(/\b\w+\b/g);
        if (!words || words.length === 0) return 0;
        const totalLength = words.reduce((sum, w) => sum + w.length, 0);
        return totalLength / words.length;
    },

    statistics() {
        return {
            letterCount: this.letterCount(),
            wordCount: this.wordCount(),
            sentenceCount: this.sentenceCount(),
            longestWord: this.longestWord(),
            mostFrequentWord: this.mostFrequentWord(),
            averageWordLength: this.averageWordLength().toFixed(2),
            wordFrequency: this.wordFrequency()
        };
    }
};

console.log('\nTask8\n');

textAnalyzer.setText("Привет! Как дела? Это тестовый текст. Текст для анализа.");

console.log(textAnalyzer.statistics());


//Task9

const priceCalculator = {
    taxRates: {
        standard: 18,
        food: 0,
        luxury: 25
    },

    discountCodes: {
        STUDENT: 10,
        VIP: 15,
        FIRST: 20
    },

    deliveryPrices: {
        Baku: 5,
        other_city: 10,
        village: 15
    },

    calculateProductPrice(basePrice, category) {
        const taxPercent = this.taxRates[category] ?? 0;
        return basePrice + (basePrice * taxPercent / 100);
    },

    applyDiscount(price, discountCode) {
        const discountPercent = this.discountCodes[discountCode] ?? 0;
        return price - (price * discountPercent / 100);
    },

    calculateDelivery(location, orderValue) {
        if (orderValue > 100) return 0;

        if (location === "Baku") return this.deliveryPrices.Baku;
        else if (location === "village") return this.deliveryPrices.village;
        else return this.deliveryPrices.other_city;
    },

    calculateTotal(productsList, discountCode, deliveryAddress) {
        let totalProductsPrice = 0;
        for (const product of productsList) {
            totalProductsPrice += this.calculateProductPrice(product.basePrice, product.category);
        }

        const priceAfterDiscount = this.applyDiscount(totalProductsPrice, discountCode);

        const deliveryCost = this.calculateDelivery(deliveryAddress, priceAfterDiscount);

        return {
            totalProductsPrice: totalProductsPrice.toFixed(2),
            priceAfterDiscount: priceAfterDiscount.toFixed(2),
            deliveryCost: deliveryCost.toFixed(2),
            grandTotal: (priceAfterDiscount + deliveryCost).toFixed(2)
        };
    },

    createInvoice(customerInfo, orderDetails) {

        const totals = this.calculateTotal(orderDetails.productsList, orderDetails.discountCode, orderDetails.deliveryAddress);

        return {
            customer: customerInfo,
            products: orderDetails.productsList.map(p => ({
                name: p.name,
                basePrice: p.basePrice.toFixed(2),
                category: p.category,
                priceWithTax: this.calculateProductPrice(p.basePrice, p.category).toFixed(2)
            })),
            discountCode: orderDetails.discountCode,
            deliveryAddress: orderDetails.deliveryAddress,
            totals
        };
    }
};


const orderProducts = [
    { name: "Laptop", basePrice: 1000, category: "standard" },
    { name: "Bread", basePrice: 2, category: "food" },
    { name: "Gold Watch", basePrice: 5000, category: "luxury" }
];

const customerInfo = {
    name: "Elvin",
    address: "Baku",
    phone: "0123456789"
};

const orderDetails = {
    productsList: orderProducts,
    discountCode: "VIP",
    deliveryAddress: "Baku"
};


const invoice = priceCalculator.createInvoice(customerInfo, orderDetails);

console.log('\nTask9\n');

console.log(invoice);
