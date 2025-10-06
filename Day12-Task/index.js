// let user = {
//     name : "Anandamayan",
//     age : 25,
//     gender : "Male",
//     "is Working": true,
//     "is Married": false
// }

// console.log(user);
// console.log(user.age);

// user.isSeniorCitizen = false;
// user["Gym Rat"] = true;

// console.log(user["is Married"]);
// delete user["is Married"];
// console.log(user);


// //constructor function

// function StuDetails(fname,lname){
//     this.f_name = fname;
//     this.l_name = lname;
// }

// const roll_175050 = new StuDetails("Ananda","Mayan");
// const roll_175053 = new StuDetails("Jai","Seelan");
// console.log(roll_175050);
// console.log(roll_175053);

// const personDetails = new Object();
// personDetails.name = "Anandamayan";
// personDetails.age = 25
// personDetails.gender = "Male"

// console.log(personDetails);

// function createUser(name,age){
//     return{
//         name,
//         age,

//         greet(){
//             console.log(this.name);
//         }
//     }
// }

// const user1 = createUser("Anandamayan",25);
// const user2 = createUser("Aathav arjun",36);

// console.log(user1);
// user1.greet();
// console.log(user2);
// user2.greet();


let profile = {
    name : "Sanjay",
    company : "Google",
    message : function(){
        console.log(`${this.name} works at ${this.company}`);
    },
    salary: 50000,
    address: {
        city: "Madurai",
        state: "Tamilnadu",
        country: "India"
    }
}

console.log(profile.name);
console.log(profile.company);
profile.message();
console.log(Object.keys(profile));
console.log(profile.salary);
console.log("salary" in profile);

if(!profile.salary){
    console.log("Salary is doesn't exists");
}

for(let key in profile){
    console.log(key);
    console.log(profile[key]);
}

// Object Reference

let fruit = {name : "Apple"};
let oneMoreFruit = {name: "Apple"};

console.log(fruit == oneMoreFruit);
console.log(fruit === oneMoreFruit);

fruit = oneMoreFruit;

const obj = {name : "Anandamayan"};
const obj2 = Object.assign({},obj);
console.log(obj);
console.log(obj2);
console.log(obj === obj2);


const obj3 = {
    a : 1,
    b:{c:2}
}

console.log(obj3);

const obj4 = Object.assign({},obj3);
console.log(obj4);
obj4.b.c = 10;
obj4.a = 200;
console.log(obj4.b);
console.log(obj3.b);

console.log(obj4.a);
console.log(obj3.a);

const obj5 = structuredClone(obj3);
obj5.b.c = 30;
obj5.a = 300;

console.log(obj5.b.c);
console.log(obj3.b.c);
console.log(obj5.a);
console.log(obj3.a);

const myDetails = {
    name : "Anandamayan",
    age : 25
}
// Convert Object in to an Array
const myArr = Object.entries(myDetails);
console.log(myArr);

const personalDetails = new Map([
    ["name","Jaiseelan"],
    ["age",25],
    ["Gender","Male"]
]);
// Convert Array in to an Object
const newArr = Object.fromEntries(personalDetails);
console.log(newArr);

const emp = {
    salary : 15000,
}

Object.freeze(emp);
emp.salary = 10000;
console.log(emp.salary);
console.log(Object.isFrozen(emp));


const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {company: {location:{city}}} = person;
console.log(city);

const student = {
    'name': 'John Williamson',
    'age': 9,
    'std': 3,
    'subjects': ['Maths', 'English', 'EVS'],
    'parents': {
      'father': 'Brown Williamson',
      'mother': 'Sophia',
      'email': 'john-parents@abcde.com'
    },
    'address': {
      'street': '65/2, brooklyn road',
      'city': 'Carterton',
      'country': 'New Zealand',
      'zip': 5791
    }
   }
   
    function SendEmail(student){
        const {address:{city}} = student
        console.log(`Send an email to ${student.parents.email}`);
        console.log(`I'm from ${city} City`);
    }

   SendEmail(student);


   const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for(let {name,address,age} of users){
    console.log(name,address,age);
    
}


const user = {
  name: "Anand",
  details: {
    age: 25,
    address: {
      city: "Chennai",
      pin: 600001
    }
  }
};


const deepCopy = structuredClone(user);

deepCopy.details.address.city = "Madurai";

console.log(user.details.address.city);
console.log(deepCopy.details.address.city);

const user1 = Object.assign({},user);
user1.details.age = 30;
user1.name = "Sanjay";
console.log(user1.details.age);
console.log(user.details.age);

console.log(user1.name);
console.log(user.name);

const empDetails = {
    empName : "Rahul",
    age : 28,
    totalWorkHours : 8
}

const empDetailsAnArray = Object.entries(empDetails);
console.log(empDetailsAnArray);
console.log(Object.keys(empDetails),"Keys");
console.log(Object.values(empDetails),"Value");


const modelDetails = new Map([
    ["Name","PraveenRaj"],
    ["Age",34],
    ["SkinColor","Fair"]
]);

const toObject = Object.fromEntries(modelDetails);
console.log(toObject);


const employee = {
    salary : 15000,
}

console.log(employee.salary,"salary");
console.log(employee.name);
// console.log(employee.name.fname);
console.log(employee.name?.fname);









 














// const user = { name: "Alex", age: undefined };
// console.log(user.age ?? "Not provided");

// const obj = Object.freeze({ a: 1 });
// obj.a = 2;
// console.log(obj.a);

// // Given an object with deeply nested properties, extract name, company, and address.city using destructuring

// const person = {
//   name: "Tapas",
//   company: {
//     name: "tapaScript",
//     location: {
//       city: "Bangalore",
//       zip: "94107"
//     }
//   }
// };

// const{name, company:{name:companyName, location:{city}}} = person;

// console.log(name);
// console.log(companyName);
// console.log(city);

// // Build a Student Management System
// // Store student details in an object (name, age, grades).
// // Implement a method to calculate the average grade.
// let StuDetails = {
//     name : "Anandamayan",
//     age : 25,
//     grades : [75,86,94,63,78],

//     avgGrade : function(){
//         let sum = this.grades.reduce((acc,curr)=> acc + curr,0);
//         let average = sum/this.grades.length;
//         console.log("Average Grade:", average.toFixed(2));
//     }
    
// }
// console.log(StuDetails);
// StuDetails.avgGrade();

// const oldPerson = { name: "John" };
// const newPerson = oldPerson;
// newPerson.name = "Doe";
// console.log(oldPerson.name);

// // Book Store Inventory System
// // Store books in an object.
// // Add functionality to check availability and restock books.

// let bookStore = {
//     books: {
//         "Atomic Habits":2,
//         "Attitude EveryThing":5,
//         "Harry Potter":0
//     },
    
//     checkAvailability : function (bookName){
//         if(this.books[bookName] > 0){
//             console.log(`${bookName} is available (${this.books[bookName]} copies left)`);
//         } else{
//             console.log(`${bookName} is out of stock!`);
//         }
//     }
// }

// console.log(bookStore.books);
// bookStore.checkAvailability("Attitude EveryThing");
// bookStore.checkAvailability("Harry Potter");






