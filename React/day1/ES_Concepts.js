// ES6 Concepts:

// variable declaration - let vs const vs var
// arrow functions
// this keyword
// template literals
// spread and rest operators
// destructuring of array and object
// property shorthand
// modules

// Classes

// var, let and const

// var -> can be redeclared and can be reassigned
// let -> cannot be redeclared but can be reassigned
// const -> cannot be redeclared and cannot be reassigned

// -------------------------------------------------------------------------------------

// Arrow Function

// function myFunc() {}

// const myArrowFunc = () => {};

// Anonymous or IIFE
// (function () {
//   // logic
// })();

// const add = function(){
//     // logic
// };

// add();

// -------------------------------------------------------------------------------------
// Template Literals:

// let candidateName = "John";
// let role = "Software Engineer";

// const acknowledgeEmail = `Hi ${candidateName}, Thanks for applying for the position of ${role}. We appreciate your interest in our organization. Your profile is under process, we will keep you posted.`;
// // -------------------------------------------------------------------------------------
// // spread and rest operators

// let fruits = ["apple", "orange", "mango"];

// let updatedFruits = [...fruits, "pineapple", "jackfruit"];

// function myNewFunc(...params) {
//   console.log(params);
// }

// myNewFunc(1, 2, 3, 4, 5);
// // -------------------------------------------------------------------------------------
// // property shorthand:

// let username = "Preeti";
// let profession = "Architect";
// let city = "Chennai";
// let email = "preeti@gmail.com";
// let mobileNumber = "1234567890";

// let userDetails = {
//   name: username,
//   job: profession,
//   address: city,
//   emailAddress: email,
//   mobile: mobileNumber,
// };

// let userDetails1 = {
//   username: username,
//   profession: profession,
//   city: city,
//   email: email,
//   mobileNumber: mobileNumber,
// };

// // using property shorthand;
// let userDetails3 = {
//   username,
//   profession,
//   city,
//   email,
//   mobileNumber,
// };

// // -------------------------------------------------------------------------------------

// let carInfo = {
//   brand: "Hyundai",
//   model: "i20",
//   color: "White",
//   variant: "Sportz",
// };

// const { brand, model, color, variant } = carInfo;

// let cities = ["Chennai", "Trichy", "Coimbatore", "Madurai"];

// const [city1, city3] = cities;

// CLASS

// let this = {};

// this.name = name;

class User {
  constructor(name, email, profession) {
    this.name = name;
    this.email = email;
    this.profession = profession;
  }

  runSomeFunction() {
    this.getUserDetails();
  }

  getUserDetails() {
    console.log({
      name: this.name,
      email: this.email,
      profession: this.profession,
    });
  }
}

let user1 = new User("John", "john@gmail.com", "Doctor");

let user2 = new User("Divya", "divya@gmail.com", "Engineer");

// user1.getUserDetails();
// user2.getUserDetails();
user1.runSomeFunction();
