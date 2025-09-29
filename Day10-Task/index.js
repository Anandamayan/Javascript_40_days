// // Scope & Scope Chaining
// // Global Scope
// // Function Scope
// // Block Scope

// //Global Scope

// let favCar = "BMW";

// function Test(){
//     console.log("My Fav Car is",favCar);
// }

// Test();

// console.log(favCar);

// {
//     console.log(favCar);
// }

// // Function Scope

// function greet(){
//     var name = "Anandamayan";
//     console.log("Welcome", name);
// }

// greet();
// // console.log(name); //We can't access a variable outside the function

// // Block Scope

// {
//     let age = "25";
//     var name = "Anand";
//     console.log("My name is", name);
//     console.log("My age is",+age);
// }
// console.log(name);

// // console.log(age); //Block scope we access inside only in the block only for let and const only


// // Scope chain

// var count = 10; //Global Scope

// function outer(){
//     var count = 20;

//     function inner(){
//         var count = 30;
//         console.log(count); //30
//     }
//     inner();
//     console.log(count); //20
// }

// outer();
// console.log(count); //10


// // Variable Shadowing

// let workStatus = "I am finished the work..."

// function manager(){
//     let workStatus = "I am not finish the work..."
//     console.log(workStatus);
// }

// manager();
// console.log(workStatus);

// let user = "Alice";

// function outer() {
//     function inner() {
//         console.log(user);
//     }
//     let user = "Bob";
//     inner();
// }

// outer();
// console.log(user);

// let total = 0; // Global, bad practice

// function add(num) {
//     total += num;
// }

// add(5);
// add(10);
// console.log(total);

// Create a function with a nested function and log a variable from the parent function.

function outer(){
    let car = "BMW";

    function inner(){
        console.log("My fav car is",car);
    }

    inner();
}

outer();

// Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

function testLoop(){
    for(let i=0; i<=3;i++){
        let msg = "Hello " + i;
        console.log(msg);
    }

    // console.log(msg);
}

testLoop();

//  Write a function that tries to access a variable declared inside another function.

function function1(){
    let secret = "I'm from function1";
    console.log(secret);
}

function function2(){
    console.log(secret);
}

function1();
// function2();


// console.log(a);
// let a = 10;

// let message = "Hello";

// function outer() {
//     let message = "Hi";

//     function inner() {
//         console.log(message); //Hi
//     }

//     inner();
// }

// outer();

//  What will be the output and why?

let x = "Global";

function outer() {
    let x = "Outer";

    function inner() {
        let x = "Inner";
        console.log(x);
    }

    inner();
}

outer();

//  What will be the output and why?
function counter() {
    let count = 0;
    return function () {
        count--;
        console.log(count);
    };
}

const reduce = counter();
reduce();
reduce();
