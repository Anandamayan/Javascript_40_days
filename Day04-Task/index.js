
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day.");
}

// Build an ATM Cash Withdrawal System

let amount = 1550;

if (amount % 100 === 0) {
    console.log("Withdrawal Successful.");
} else {
    console.log("Invalid Amount.");
}

//  Build a Calculator with switch-case

let num1 = 10;
let num2 = 15;
let operator = "-";

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    case "%":
        result = num1 % num2;
        break;
    default:
        result = "Invalid operator";
}

console.log(`${num1} ${operator} ${num2} = ${result}`);

// Pay for your movie ticket

let age = 12;

if(age < 18){
    console.log(`You are Children category age ${age} so you want to paid $3`);
}else if(age >=18 && age <=60){
    console.log(`You are Adult category age ${age} so you want to paid $10`);
}else if(age>60){
    console.log(`You are Seniors category age ${age} so you want to paid $8`);
}

// Horoscope Sign Checker

let birthdayMonth = "April";
let zodiac;

switch(birthdayMonth){
    case "March":
    case "April":
        zodiac="Aries";
        break;
    case "May":
    case "June":
        zodiac="Taurus";
        break;
    default:
        zodiac = "Invalid month";
}

console.log(`${birthdayMonth} borns are ${zodiac}`);

// Which Triangle?

let a = 10;
let b = 15;
let c = 20;

let type;

if(a === b && b === c){
    type = "Equilateral Triangle";
}else if(a === b || b === c || a === c){
    type = "Isosceles Triangle";
}else{
    type = "Scalene Triangle";
}

console.log(`sides:${a}, ${b}, ${c}`);
console.log(`Triangle Type: ${type}`);





