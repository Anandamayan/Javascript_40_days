function sum(a, b) {
    console.log(a + b); // just prints
}
sum(5, 3);


function addAndPrint(a, b) {
    return a + b;
}

let result = addAndPrint(5, 20);
console.log(result);

//  Write a Function to Convert Celsius to Fahrenheit

function celToFah(Celsius) {
    let Fahrenheit = (Celsius * 9 / 5) + 32
    console.log(`Fahrenheit for ${Celsius} : `, Fahrenheit);
}

celToFah(10);

// Create a Function to Find the Maximum of Two Numbers

function findMaxNum(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log("Max:", findMaxNum(10, 25));


function isPalindrome(str) {
    // let str = "racecar";
    let reversed = str.split("").reverse().join("");
    if (reversed === str) {
        return true;
    } else {
        return false;
    }
}

console.log("IsPalindrome:", isPalindrome("madam"));

// Write a Function to Find Factorial of a Number

function factorial(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log("Factorial of 5:", factorial(5));

//Rest parameter

function calculateThis(x, y, ...rest) {
    console.log(x, y, rest);
}

calculateThis(1, 2, 3, 4, 5, 6)


//Nested function

function outer() {
    console.log("outer");

    return function inner() {
        console.log("inner");
    }
    // inner();


}
// outer();
let retFunc = outer();
console.log(retFunc());

function greeting(name) {
    //    console.log("Hello " + name);
    return "Hello " + name;
}

// greeting("Anandamayan");

console.log(greeting("Anandamayan"));


// IIFE

(function(age){
    console.log("IIFE",age);
    
})(25);

//Recursion

function fetchWater(count){
    console.log("Fetching water...", count);

    if(count === 0){
        console.log("No more water is left to fetch...");
        return;
    }

    fetchWater(count - 1);
}

fetchWater(5);

// Write a function to Count Vowels in a String

function countVowels(Word){
    let count = 0;
    let vowels = "aeiouAEIOU"
    for(let i=0; i<Word.length;i++){
       if(vowels.includes(Word.charAt(i))){
        count++;
       }
    }

    return count;
}

 
console.log(countVowels("GYM"));
console.log(countVowels("Anandamayan"));
console.log(countVowels("Trisha"));

// Write a Function to Capitalize the First Letter of Each Word in a Sentence

function toCapitalize(Sentence){
   return Sentence
   .split(" ")
   .map(word=>word.charAt(0).toUpperCase() + word.slice(1))
   .join(" ")
}

console.log(toCapitalize("my name is anandamayan"));

// Normal JS Function
function welcome(language){
    console.log("Hello", language);
}

welcome("JavaScript");

// IIFE Task  ==> Immediately Invoked Function Expression
(function(language){
    console.log("Hello",language);
})("Go-lang")

// Create a Simple Callback Function

function greet(name){
    console.log("Hello",name);
}

function processUser(name,callback){
       callback(name);
}

processUser("Anandamayan", greet)


