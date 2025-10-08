"use strict";

const employee = {
    firstName: "Ananda",
    lastName: "Mayan",
    age: 25,

    returnThis: function () {
        return this;
    },

    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log("My age is", employee.age);
console.log("This inside the employee object", employee.returnThis());
console.log("My FullName is", employee.getFullName());


const Tom = {
    name: "Tom",
    age: 7
}

const Jerry = {
    name: "Jerry",
    age: 3
}

function greet(obj) {
    obj.logMessage = function () {
        console.log(`${this.name} is ${this.age} years old!`);
    }

    console.log(obj);

};

console.log(Tom.name);

greet(Tom);
greet(Jerry);
Tom.logMessage();
Jerry.logMessage();

const people = {
    name: "JeyaVel"
}

function sayName() {
    // console.log("This inside a function", this);
    console.log(`My Name is, ${this.name}`);

}

sayName.call(people);

function outer(a) {
    console.log("This inside an outer function", this);

    return function inner(b) {
        console.log("This inside an inner function", this);
    }
}

const outerResult = outer(5);
outerResult(3);

//Inside the Arrow function

const getFood = () => this;

console.log("This inside the arrow function defined in global scope", getFood());


const fruit = {
    name: "Apple",
    color: "Red",

    getDesc: () => `${this.name} is ${this.color}`,

    getDesc: function () {
        return () => `${this.name} is ${this.color}`
    }
    // getDesc: function(){
    //     return `${this.name} is ${this.color}`
    // }
}

const descFunc = fruit.getDesc();
console.log(descFunc());

// console.log(fruit.getDesc());

// What is the problem here? Fix it to log the correct name and explain the fix

const user = {
    name: "tapaScript",
    //   greet: () => {
    //     console.log(`Hello, ${this.name}!`);
    //   },

    greet: function () {
        console.log(`Hello, ${this.name}`);
    }
};

user.greet();

const obj = {
    name: "Tom",
    greet: function () {
        console.log(`Helloooo, ${this.name}!`);
    },
};


// obj.greet();

const greetFn = obj.greet;
console.log(greetFn);

greetFn.call(obj);

const user1 = {
    name: "Alex",
    greet: function () {
        // function inner() {
        //   console.log(`Hello, ${this.name}!`); //Old Code
        // }
        // console.log(this.name);

        const inner = () => {
            console.log(`Hello, ${this.name}!`); //New code
        }
        inner();
    },
    intro: function () {
        const inner1 = () => {
            console.log(`My name is ${this.name}`);
        }
        inner1();
    },

    inner2: () => {
        console.log(`My name is ${this.name}`);
    }
};

user1.greet();
user1.intro();
user1.inner2();


// Explicit Binding ==> Call,Apply,Bind


function greeting() {
    console.log(`Hello, ${this.name} belongs to ${this.address}`);
}

const userDetails = {
    name: "Anandamayan",
    address: "Welcome All Of you"
}

greeting.call(userDetails);


const likes = function (hobby1, hobby2) {
    console.log(this.name + ' likes ' + hobby1 + ',' + hobby2);
}

const person = {
    name: "Vetri",
}

likes.call(person, "Gym", "Singing");

const hobbiesToBind = ["Dancing", "Cooking"];

likes.apply(person, hobbiesToBind);

const Cartoon = function (name, animal) {
    this.name = name;
    this.animal = animal;

    this.log = function () {
        console.log(this.name + ' is a ' + this.animal);
    }
}

const tomCartoon = new Cartoon("Tom", "Cat");
const jerryCartoon = new Cartoon("Jerry", "Mouse");

tomCartoon.log();
jerryCartoon.log();


const personalDetails = {
    name: "Vijay",
    age: 48,
    gender: "Male",
    professional: "Actor",
    work: function () {
        const inner = () => {
            console.log(`I'm an ${this.professional}`);
        }
        inner();
    }
}

function AboutMe() {
    console.log(`My name is ${this.name} and age is ${this.age} then i'm a ${this.gender}`);
}

personalDetails.work();

AboutMe.call(personalDetails);


// Can you attach the car1's describe() method to car2 object? Give all possible solutions that you can think of
const car1 = {
    brand: "Audi",
    model: "A8",
    describe: function () {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    },
};

const car2 = {
    brand: "BMW",
    model: "X1",
};

// // Using call()
// car1.describe.call(car2);

// // Using apply()
// car1.describe.apply(car2);

// // Using bind()
// const describeCar2 = car1.describe.bind(car2);
// describeCar2();

// Copy the Method Reference
car2.describe = car1.describe;
car2.describe();
car1.describe();

Object.assign(car1, car2);
car2.describe();

const person1 = {
    name: "Charlie",
    sayHello: function () {
        console.log(this.name);
    },
      sayHelloArrow: () => {
        console.log(this.name);
      },
    sayHelloArrow1: function () {
        const ArrowFunc = () => {
            console.log(this.name);
        }
        ArrowFunc();
    }
};

person1.sayHello();
person1.sayHelloArrow();
person1.sayHelloArrow1();
