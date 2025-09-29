// Hoisting ==> It is JS default behaviour of moving declarations to the top their scope
// That means variables and functions can be used before they are declared..


//  Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.

// console.log(favCar);  //Undefined

// var favCar = "BMW"

// console.log(favCar);

// console.log(favCar);  //Throw an error
// In this area Temporal Dead Zone appears(TDZ)
// let favCar = "BMW"

// console.log(favCar); //Throw an error

// console.log(favCar);
// In this area Temporal Dead Zone appears(TDZ)
const favCar = "BMW"

console.log(favCar);

// Explain Variable and Function Hoisting with Example. Post the code as your answer.

// Normal Function

greet();

function greet(){
    console.log("Welcome");
}

// Function as an expression

test(); //Throws an error

let test = function(){
    console.log("Working...");
}
