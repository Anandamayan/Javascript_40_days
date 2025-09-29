//For Loop
// A for loop is a best when we know exactly how many times we need to run a block of code.
// let i = 1;

for (let i = 1; i <= 5; i++) {
    console.log("Iteration/Loop", i);
}

//Find out the Even Number
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log("i", i);
    }
}

//Find out the even number and sum

let sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        // sum = sum+i;
        sum += i;
    }
}

console.log("Sum is", sum);

//Iterates the word

// let Name = "Anandamayan";

// for(let i=0; i<Name.length; i++){
//     console.log(Name.charAt(i));
// }

//Nested Loop

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("Row", i, " Col", j);
    }
}


// break ==> Exit the loop and iteration stops after the condition mets.
// continue ==> Skip the particular iteration and runs continuous.

for (let i = 1; i <= 5; i++) {
    console.log(i);
    if (i === 3) break;
}

console.log("--Break--");


for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}

console.log("--Continue--");

for (let i = 1; i <= 5; i++) {
    // console.log(i);
    if (i === 3) continue;
    console.log(i);
}

//Multiple Counters in an single loop

for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
    console.log(i, j);
}


for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// Create Multiplication Table (Using for loop)


for (let i = 1; i <= 10; i++) {
    let num = 3
    // let result = num * i
    console.log(`${num} * ${i} = `, num * i);
}

// Find the summation of all odd numbers between 1 to 500 and print them on the console log.

// for(let i=1; i<=500; i++){
//     if(i%2 !== 0){
//         console.log("Odd Numbers From 1 to 500 : " , i);
//     }
// }

// Skipping Multiples of 3

for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}

// While Loop ==>  A while loops runs as long as a given condition is true.It's best when we don't know in 
// advance how many iterations are done.

// Reverse Digits of a Number (Using while loop)

let num = 1234;
let reverse = 0;

while (num > 0) {
    let lastDigit = num %10; //Extract the last digit  (9)
    reverse = reverse * 10 + lastDigit; //append digit to reversed (0 * 10 + 9) => 0 + 9 => 9
    num = Math.floor(num/10); //remove last digit from num (678.9) => 678
}

console.log("Reversed Number: " , reverse);

let num1 = 0;

do {
    console.log("Inside do...while loop");
} while (num1 > 0);

let num2 = 0;

while(num2 > 0){
    console.log("Inside while loop");
}

// let correctPassword = "1234";
// let enteredPassword;

// do {
//     enteredPassword = prompt("Enter your password:");
// } while (enteredPassword !== correctPassword);

// console.log("Access Granted!");


