console.log("Welcome To Day14 - Error Handling");

try {
    console.log("Execution starts here");
    // age;
    console.log("Execution ends here");
} catch (err) {
    console.error("An Error has occured");
    // console.log(err);
    // console.log(err.name);
    console.log(err.message);
    console.log(err.stack);

}

// try {
//     let r = p + 50;
//     console.log(r);
// } catch (error) {
//     console.log("An error occurred:", error.name);
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }


function divideNumbers(a, b) {
    try {
        if (b === 0) {
            const err = new Error("Division by Zero is not available")
            throw err;
        }
        let result = a / b;
        console.log(`The Result is: ${result}`);
    } catch (error) {
        console.log("Got a Math Error", error.message);
    }
}

divideNumbers(25, 5);
divideNumbers(36, 6);
divideNumbers(28, 4);
divideNumbers(30, 0);
// divideNumbers(5, a);


const person = {
    name: "Anandamayan",
    address: {
        city: "Bangalore"
    }
}

function getPostalCode(user) {
    try {
        console.log(user.address.city);
        console.log(user.address.postalCode);
        console.log(user.address.country.postalCode);
    } catch (error) {
        console.error("Error Accessing Property", error)
    }
}

getPostalCode(person);

function validateAge(age) {
    try {
        if (isNaN(age)) {
            throw new Error(`Invalid Input: Age must be a number, Your input is ${age}`);
        }
        console.log(`User's Age is: ${age}`);
    } catch (err) {
        console.error("Validation Error Occured:", err.message);
    }
}

validateAge(25);
validateAge("Ajay");
// validateAge();

function validateForm(formDetails) {
    try {
        if (!formDetails.username) throw new Error("UserName is Required");
        if (!formDetails.email.includes("@")) throw new Error("Must include @ Symbol")
    } catch (error) {
        console.error("Validation Error Occured:", error.message);
        throw error;
    } finally {
        console.log("Form Submitted Successfully");
    }
}

try {
    validateForm({ username: "", email: "anand@gmail.com" })
} catch (error) {
    console.error("Showing error message for user creation", error.message)
}


// Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. 
// If any condition fails, throw appropriate errors



function processPayment(amount) {
    let balance = 1000;

    try {
        if (amount <= 0) {
            throw new Error("Amount must be greater than zero");
        }

        if (amount > balance) {
            throw new Error("Insufficient balance");
        }

        console.log(`Payment of ${amount} processed successfully!`);
    } catch (error) {
        console.error("Payment Failed!", error.message);
    } finally {
        console.log("Payment process completed!");

    }
}

processPayment(500);
processPayment(1200);


//Custom Error

function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
}

function ValidateCitizen(age) {
    if (age < 60) {
        throw new ValidationError("You are under 60 so you can't senior citizen")
    }

    return "You are a Senior Citizen";
}

try {
    const message = ValidateCitizen(55);
    console.log(message);
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}


// 3. Implement a custom error handling system for an e-commerce website that categorizes errors as
// UserError
// PaymentError
// ServerError
// EmailError


class UserError extends Error { }
class PaymentError extends Error { }
class ServerError extends Error { }
class EmailError extends Error { }

function placeorder(ordertype) {
    try {
        if (ordertype === "user") {
            throw new UserError("User not found!");
        } else if (ordertype === "payment") {
            throw new PaymentError("Payment Failed!");
        } else if (ordertype === "server") {
            throw new ServerError("Server not responding!");
        } else if (ordertype === "email") {
            throw new EmailError("Email could not be sent!");
        } else {
            console.log("Ordered Placed Successfully:)");
        }
    } catch (error) {
        if (error instanceof UserError) {
            console.log("User Error:", error.message);
        }
        if (error instanceof PaymentError) {
            console.log("Payment Error:", error.message);
        }
        if (error instanceof ServerError) {
            console.log("Server Error:", error.message);
        }
        if (error instanceof EmailError) {
            console.log("Email Error:", error.message);
        }

    }
}

placeorder("user");
placeorder("payment");
placeorder("server");
placeorder("email")


function fetchData(url){
    try{
      if(!url.startsWith('https')){
        throw new Error("Invalid URL! URL must be start with https");
      }

      console.log(`Feching data from ${url}`);
      const  data = {product:"Laptop",price:25000}
      console.log("Data Fetched Successfully", data);
    }catch(error){
          console.log("Error:", error.message);
    }
}

// fetchData("http://anandamayan-portfolio.com");
fetchData("https://anandamayan-portfolio.com");
