
// Closure Function ==> A closure function has allows you to access a outerscope variable in an 
// innerscope when outerscope execution finishes


function outerCount() {
    let count = 0;

    return function innerCount() {
        count++;
        console.log(count);
    }
    // return innerCount();
}

const result = outerCount();

result();
result();
result();

//Real life Bank Example

function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: (amount) => {
            balance = balance + amount;
            console.log("Deposited", amount, "Current Balance", balance);
        },
        withdraw: (amount) => {
            if (amount > balance) {
                console.log("Insufficient Bank Balance");

            } else {
                balance = balance - amount;
                console.log("Withdrawn", amount, "Current Balance", balance);
            }
        },
        checkBalance: () => {
            console.log("Current Balance", balance);
        }
    }
}

const myAccount = createBankAccount(500);
myAccount.deposit(300);
myAccount.withdraw(500);
myAccount.checkBalance();
// myAccount(500);

// function outer() {
//     let count = 0;
//     return function inner() {
//         count++;
//         console.log(count);
//     };
// }
// const counter = outer();
// counter();
// counter();

function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure()());

//  Create a button dynamically and attach a click event handler using a closure. 
// The handler should count and log how many times the button was clicked.

// function onClickButton(){
//     let count = 0;

//     document.getElementById("click_btn").addEventListener("click",function(){
//         count++;
//         console.log(`Button Clicked ${count} times`);
//     })
// }

// onClickButton();


// Write a function createMultiplier(multiplier) that returns another function to multiply numbers.

function createMultiplier(multiplier){
      return function(number){
        return number * multiplier
      }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(8));
console.log(triple(7));

// Write a function factory of counter to increment, decrement, and reset a counter. 
// Use closure to refer the count value across the functuions.

function counter(){
    let count = 0;
    const display =document.getElementById("countDisplay")
    return {
        increment : ()=>{
            document.getElementById("increment").addEventListener("click",function(){
                count += 1;
                console.log("Count:", count);

                display.textContent = count;
            })
        },

         decrement : ()=>{
            document.getElementById("decrement").addEventListener("click",function(){
                count -= 1;
                console.log("Count:", count);
                display.textContent = count;
            })
        },

         reset : ()=>{
            document.getElementById("reset").addEventListener("click",function(){
                count = 0;
                console.log("Count:", count);
                display.textContent = count;
            })
        }

    }
}

const myCounter = counter();
myCounter.increment();
myCounter.decrement();
myCounter.reset();
