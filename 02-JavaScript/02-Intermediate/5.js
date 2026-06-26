/*
  Array : An array is a non-primitive data type used to store multiple values in an ordered collection. 
        Each element is accessed using its index.

*/

let arr = ["rxhman", 49, "fsd"];
// console.log(arr);

// rxhman is stored at index value 0, according to arrays concept in JS.
// console.log(arr[0]);

// updating array elements:
arr[0] = "Abdul Rahman";
// console.log(arr);

// delete an array element
delete arr[1];
// console.log(arr);

// Array methods :

// .map() is an array method that takes each item in an array, changes it in some way, and returns a new array with those changed values.

// It does not modify the original array

// It always returns a new array

// You use it when you want to apply the same logic to every element

let num = [1, 2, 3, 4, 5];

let multiply = num.map((x) => {
  return x * 2;
});

// console.log(multiply);

// Use .map() to create a new array where every number is increased by 5.
let numbers = [10, 20, 30, 40, 50];

let sum = numbers.map((x) => {
  return x + 5;
});

console.log(sum);

// Use .map() to convert every name into uppercase.
let names = ["rahman", "suhail", "sneha", "muzammil", "ismail"];
let upperName = names.map((x) => {
  return x.toUpperCase();
});

console.log(upperName);

const users = [
  { id: 1, name: "Rahman" },
  { id: 2, name: "Ayaan" },
  { id: 3, name: "Sara" },
];

let arrayConv = users.map((x) => {
  return x.name;
});

console.log(arrayConv);

// .forEach() goes through each element of an array and runs some code on it.

// It does not return anything

// It is used for doing actions, not creating new arrays

// Original array is not changed automatically (unless you change it yourself)

let array = [1, 2, 3, 4, 5];
let x = array.forEach((x) => {
  console.log(x * 2);
});

// console.log(x, array);

// Use forEach() to print the square of every number.
let nums = [5, 10, 15, 20, 25];
let sq = nums.forEach((x) => {
  console.log(x ** 2);
});

console.log(sq);

// filter : .filter() is an array method that checks each element and keeps only the ones that pass a condition.
// It returns a new array with the elements that match the rule.

// Original array is not changed

// Callback must return true or false

// true → keep the element

// false → remove the element

let nums1 = [2, 4, 5, 7, 9, 12];

let greater = nums1.filter((x) => {
  return x > 5;
});

// console.log(greater);

// Use filter() to create a new array containing only even numbers.

let numbers1 = [5, 10, 15, 20, 25, 30];

let evenNums = numbers1.filter((x) => {
  return x % 2 == 0;
});
console.log(evenNums);

// Use filter() to create a new array containing only adults (18 or above).
let ages = [12, 18, 25, 15, 30, 10];
let adults = ages.filter((x) => {
  return x >= 18;
});
console.log(adults);

// .find() is an array method that searches for the first element that matches a condition and returns that element.

// It stops as soon as it finds a match

// It returns one value, not an array

// If nothing matches → returns undefined

// Original array is not changed

let clg = ["dcet", "mjcet", "vgit", "nsakcet"];
let searchClg = clg.find((x) => {
  return x === "vgit";
});

console.log(searchClg);

// Use find() to get the first number greater than 10.
let nums2 = [5, 12, 8, 20, 15];
let findNum = nums2.find((x) => {
  return x > 10;
});

console.log(findNum);

// .some() is an array method that checks if at least one element in the array satisfies a condition.

// It returns true or false

// Stops early once it finds a match

// Does not return an element or array

// Original array is not changed

let studs = ["rxhman", "uzair", "ethelala", "saif", "saif", "salman"];
let saifIsTrue = studs.some((x) => {
  return x === "saif";
});

// console.log(saifIsTrue);

// Use some() to check whether there is at least one adult (age >= 18).
let ages1 = [12, 15, 17, 21, 16];
let anyAdult = ages1.some((x) => {
  return x >= 18;
});
// console.log(anyAdult);

// .every() is an array method that checks whether all elements in the array satisfy a condition.

// It returns true or false

// If even one element fails → returns false

// Stops early on first failure

// Original array is not changed

let num3 = [2, 30, 6];
let checkEven = num3.every((x) => {
  return x % 2 == 0;
});
// console.log(checkEven);

// Use every() to check whether all students have scored 35 or more marks.
let marks = [85, 90, 78, 92, 88];
let checkMarks = marks.every((x) => {
  return x > 35;
});

console.log(checkMarks);

// .includes() is an array (and string) method that checks whether a specific value exists in the array.

// It returns true or false

// Uses value comparison, not a condition function

// Original array is not changed

const getMyNames = ["rahman", "omer", "sneha", "ismail"];
let myName = getMyNames.includes("sneh");
console.log(myName);

// Use includes() to check whether "Mango" exists in the array.
// let fruits = ["Apple", "Mango", "Banana", "Orange"];
// let checkFruits = fruits.includes("Mango")
// console.log(checkFruits);

// .push() adds one or more elements to the end of an array and changes the original array.

// Returns the new length of the array

const nos = [48, 49, 50, 51, 52];

nos.push(55);
console.log(nos);

let fruits = ["Apple", "Mango"];
fruits.push("Banana", "Orange");
console.log(fruits);

// .pop() removes the last element from an array and changes the original array.

// Returns the removed element

// Mutates the array

fruits.pop();
console.log(fruits);

nos.pop();
console.log(nos);

// .slice() cuts out a part of an array and gives it to you in a new array.

// Original array stays the same

// You choose from where to where to cut

// The cut part comes in a new array

// const numbers5 = [1,2,3,4,5,6,7,8,9,10]
// let cutNum = numbers5.slice(1,6)
// console.log(cutNum);

// slice to get mango nd banana
let getMyFruit = fruits.slice(1, 3);
console.log(getMyFruit);

// .sort() arranges the elements of an array in order (like ascending or alphabetical) and changes the original array.

// It modifies the array

// By default, it sorts as strings

// You can give a function to control the order

const getall = ["rxhman", "abd", "ismail", "suhail"];

const sortNames = getall.sort();
console.log(sortNames);

// .splice() array ke beech se items nikaalta hai ya add karta hai
// aur original array ko change karta hai.

const arr2 = [1, 2, 3, 4];

arr2.splice(1, 2, 99, 100);

console.log(arr2);

// .reduce() is an array method that takes all elements of an array and combines them into one final value.

// The final value can be a number, string, object, or array

// It runs element by element

// Original array is not changed

const nums7 = [10, 20, 30];

// sum = 0 , n = 10, then 20 , then 30

const total = nums7.reduce((sum, n)=>{
    return sum+n
}, 0)
console.log(total);



// shift : removes first elem of array
// unshift : add elem at first place of array
