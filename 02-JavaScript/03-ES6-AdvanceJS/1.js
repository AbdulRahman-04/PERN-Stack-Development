// /*
//   ES6 (ECMAScript 2015) was introduced in 2015.
//   It brought major improvements to JavaScript such as:
//   let & const, arrow functions, classes, modules,
//   promises, template literals, and destructuring.
//   ES6 is considered the foundation of modern JavaScript.
// */

// /*
//   try...catch is used for error handling in JavaScript.
//   It allows us to catch runtime errors and handle them
//   without crashing the entire program.
//   If an error occurs inside try, control moves to catch.
// */

// // try {
// //   let a = 10;
// //   console.log(b);
// // } catch (error) {
// //   console.log(error, error.message);
// // }

// // try {

// //     const c = 15
// //     c = 25
// //     console.log(c);

// // } catch (error) {
// //     console.log(error, error.message);

// // }

// // DESTRUCTURING :

// // object destructuring :

// // object k andar k keys jo names h wahi naam k variables m aap uska data store krskte e.g below :

// let student = {
//   name: "rxhman",
//   age: 22,
//   isAlive: true,
// };

// const { name, age, isAlive } = student;
// // console.log(name,age,isAlive);

// const user = {
//   username: "rxhman",
//   email: "rahman@gmail.com",
//   city: "Hyderabad",
// };

// const { username, email, city } = user;
// // console.log(username, email, city);

// const employee = {
//   id: 101,
//   name: "Rahman",
//   salary: 50000,
// };

// const { id, name: empName, salary } = employee;
// // console.log(id, empName, salary);

// // arry destructuring: isme aap array k values ku koi b var name m store krskte e.g :

// let profile = ["sneha", "24", true];
// const [pfpName, pfpage, pfpisAlive] = profile;
// // console.log(pfpName, pfpage, pfpisAlive);

// const colors = ["Red", "Green", "Blue", "Black"];
// const [firstColor, secondColor, thirdColor] = colors;
// // console.log(firstColor, secondColor, thirdColor);

// // For of loop : this loop executes for array values and string values variables only.

// // let arr = ["h", "e", "l", "l", "o"]
// // for(let x of arr){
// //     console.log(x);

// // }

// // let str = "heyyya"
// // for(let x of str){
// //     console.log(x);

// // }

// // for in loop : applies only on objects
// let newObj = {
//   key1: true,
//   key2: false,
// };
// // for (let y in newObj) {
// //   console.log(y, newObj[y]);
// // }

// // set time out and set intervals : used for functions only

// // settimeout : it is used to execute a function after certain amount of time for one.

// function welcome() {
//   console.log("starting....");
//   setTimeout(() => {
//     console.log("Welcome to javascript!");
//   }, 3000);
// }

// // welcome()

// function sayHi(name) {
//   setTimeout(() => {
//     console.log(`Hello ${name}`);
//   }, 2000);
// }

// // sayHi("Rahman");

// // setinterval : it is used to execute function repeatedly unlike timeout, which executes only for once.
// function sayHelloJs(greet) {
//   setInterval(() => {
//     console.log(greet);
//   }, 2000);
// }

// // sayHelloJs("Hello JavaScript!");

// // to control setinterval use clear interval in built method
// function Hi() {
//   let StopInterval = setInterval(() => {
//     console.log("Hi");
//   }, 1000);

//   setTimeout(() => {
//     clearInterval(StopInterval);
//   }, 10000);
// }

// // Hi()

// function Greet() {
//   let stopInterval = setInterval(() => {
//     console.log("Hello ji!");
//   }, 1000);

//   setTimeout(() => {
//     clearInterval(stopInterval);
//   }, 6000);
// }

// // Greet();

// // DATE AND TIME IN JS:
// const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay())

// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// // human readable form :
// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());

// Spread and Rest Operator :

// spread operator : The spread operator (...) is used to expand (spread)
// the elements of an array or the properties of an object into another array, object, or function call.

// basic array and object spreading:
let arr = [1, 2, 3, 4, 5];
// console.log(...arr);

// we can't spread a normal obj directly, we need to spread one obj into another
const obj6 = {
  name: "rxhman",
  clg: "dcet",
};

const student = {
  ...obj6,
  isAlive: true,
};

console.log(student);

// spreading two arrays into one array
let arr1 = [24, 25];
let arr2 = [26, 27];

let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// Rest Operator: collecting many values into one variable.
function data(...nums) {
  console.log(nums);
}
data(42, 46, 49);

// array destructuring
let myArr = [12, 14, 16, 18, 20];

const [firstVal, ...nums] = myArr;
// console.log(firstVal);
// console.log(nums);

// object destructuring :
let details = {
  name: "Rahman",
  age: 21,
  city: "Hyderabad",
};

const { name, ...otherDetails } = details;
console.log(name);
// console.log(otherDetails);

// Using spread operator, create a new array by adding:
const backend = ["Node", "NestJS"];
const newBackend = [...backend, "PostgreSQL", "Drizzle"];
console.log(newBackend);

// Merge all three arrays into one using spread.
const arr11 = [1, 2];
const arr12 = [3, 4];
const arr13 = [5, 6];

const newArray = [...arr11, ...arr12, ...arr13];
console.log(newArray);

// Create a new object using spread and:
// change age to 22
// add city: "Hyderabad"

const user1 = {
  name: "Rahman",
  age: 21,
};

const updatedUser = {
  ...user1,
  city: "Hyderabad",
  age: 22,
};

console.log(updatedUser);

// rest operator:
// Create a function with many arguements nd one parameter
function primeNums(...nums) {
  console.log(nums);
}

primeNums(10,20,30,40,50)


// Using array destructuring + rest operator: store apple in first var and others using rest operator.
const fruits = ["Apple", "Mango", "Banana", "Orange"];
const [first, ...allFruits] = fruits
console.log(first);
console.log(allFruits);


// Using object destructuring + rest operator: store name seperately nd remaining prop in one var

const student10 = {
    studName: "Rahman",
    age: 21,
    city: "Hyderabad",
    college: "DCET"
};

const {studName, ...otherProp} = student10
console.log(studName);
console.log(otherProp);

