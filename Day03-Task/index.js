
// // Comparision operator

// console.log("--Normal equality operator--");
// console.log(3 == '3'); //It compares only operands not as type
// console.log("--Strict equality operator--");
// console.log(3 === '3'); //It compares both operands and its type too
// console.log('Anand' === 'Anand');


// let obj1 = {'name':'Anandamayan'}
// let obj2 = {'name':'Anandamayan'}
// // Eventhough value is same in the above object it through false beacuse memory address is different...
// console.log(obj1 === obj2); //Equality operator
// console.log(obj1 !== obj2);

// let a=10
// console.log("--Post Increment--");
// // Post increment
// console.log(a++); //First it returns the current value then return the increment value in an next variable calls
// console.log(a);
// console.log("--Pre Increment");
// // Pre increment
// console.log(++a); //It returns first the increment value

// console.log("--Post Decrement--");
// // Post decrement
// console.log(a--);;
// console.log(a);
// console.log("--Pre Decrement--");

// // Pre decrement
// console.log(--a);

// console.log("--Assignment Operator--");

// let x=10;
// console.log(x+=5);
// console.log(x*=2);
// console.log(x/=5);
// console.log(x-=2);
// console.log(x%=5);

// console.log( x ** 2 );


//1. Odd or Even?

//  Take a number and find if the number is an odd or even number.
function findOddOrEven(num){
    if(num % 2 === 0){
        console.log(num + " is an Even Number"); //  Print the number and result in the console.
    }else{
        console.log(num + " is an Odd Number"); //  Print the number and result in the console.
    }
}

findOddOrEven(8);

//  Do you have a Driving License?
function eligibleAgeDrivingLicense(age){
    if(age>=18){
        console.log("Great, You are eligible to apply for Driving License");
    }else{
        console.log("Sorry, You are not eligible to apply for Driving License");
    }
}

eligibleAgeDrivingLicense(25);
eligibleAgeDrivingLicense(16);

//  Write a program for the Traffic Light Simulation.
// Red Light... Green Light... Let's Play!

function trafficLightSimulation(color){
    if(color == 'Red'){
        console.log("Please,Stop");
    }else if(color == 'Orange'){
        console.log("Get Ready, to Start");
    }else if(color == 'Green'){
        console.log("Let's, Go");
    }
}

trafficLightSimulation('Green');


//  Leap Year Checker

let year = 2028;

let result = (year % 4 === 0)?"Leap Year":"Not a Leap Year"
console.log(year + " is " + result);

//Max of Three Numbers

let p = 25;
let q = 42;
let r = 17;

let max;

if(p>=q && p>=r){
    max = p;
}else if(q>=p && q>=r){
    max = q;
}else{
    max = r;
}

console.log("The maximum number is: " + max);

// Create an Electricity Bill Calculator

let units = 10;
let costPerUnit = 150;
let daysInMonth = 30;

let monthlyBill = units * costPerUnit * daysInMonth;

let annualBill = monthlyBill * 12;

let annualDiscounted = annualBill * 0.8;

console.log("Monthly Bill: " + monthlyBill);
console.log("Annual Bill (Without discount): " + annualBill);;
console.log("Annual Bill (With Discount): " + annualDiscounted);

















