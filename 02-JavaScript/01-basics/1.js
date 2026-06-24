// console.log("hello world");
// console.log("abdul rahman");
// console.log("suhail roshan");

// to execute js file use this cmd : node filename

// single line comment 

/*
 
  multiline comment

*/

// variables : variables in js or any programming language is like containers which can store data of any type in itself. in js there are 3 ways to create variables 

// var : same name variable can be declared again and value is updated

var a = 10
var a = 15
// console.log(a);


// let : using let keyword we can declare variables but same name variables cannot be redeclared, but value of var can be updated
let b = 22
b = 49
// console.log(b);

// const : constant means, neither the variable can be redeclared nor value can be updated
const rollNo = 5049
// rollNo = 50
// console.log(rollNo);

// DATATYPES IN JS 

// PRIMITIVE                 // NON-PRIMITIVE

// string                    // arrays, funtions and objects
// number
// boolean
// undefined
// null
// bigint
// symbols


// Type conversion : there are two types of conversion in js. implicit conversion and explicit conversion 

// implicit conversion : use + operator to converts to string data type 

let ab = 50 +  '49'
// console.log(ab, typeof(ab));

let boolValue = 'true' + true
// console.log(boolValue, typeof(boolValue));

let cd = "49" - 25
// console.log(cd, typeof(cd));

let boolValue1 = true - 45
// console.log(boolValue1, typeof(boolValue1));

// explicit conversions : built in methods for conversions 

// conversion to string 
let num = 35
let numToStr = String(num)
// console.log(numToStr, typeof(numToStr));

let bool = false
let boolToStr = String(bool)
// console.log(boolToStr, typeof(boolToStr));

// conversion to number
let str = "5049"
let strToNum = Number(str)
// console.log(strToNum, typeof(strToNum));

let bool1 = false
let boolToNum = Number(bool1)
// console.log(boolToNum, typeof(boolToNum));
 
// conversion to boolean
let str1 = "true"
let strToBool = Boolean(str1)
// console.log(strToBool, typeof(strToBool));

let number = 1
let conv4 = Boolean(number)
// console.log(conv4, typeof(conv4));



// Scoping in js : 

// block scope : a variable declared inside a {} is called blcok scope variable.

//                                    VAR               LET                CONST

// inside of block                    ✅                 ✅                 ✅
// outside of bloc                    ✅                 ❌                  ❌

{
    var abd = 35
    // console.log(abd);
    let sid = 49
    // console.log(sid);
    const hsn = 28
    //  console.log(hsn);
     
    
    
}

// console.log(abd);
// console.log(sid);
// console.log(hsn);






// function scope : a varable declared inside function is called function scope.

//                                    VAR               LET                CONST

// inside of block                    ✅                 ✅                 ✅
// outside of bloc                    ❌                ❌                  ❌


// global scope : a var declaredd neither inside any block nor function 


//                                    VAR               LET                CONST

// inside of block                    ✅                 ✅                 ✅
// outside of bloc                    ✅                 ✅                 ✅