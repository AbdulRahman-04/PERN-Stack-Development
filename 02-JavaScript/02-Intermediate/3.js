/*
  
  Functions in js : A function is a reusable block of code 
                    that performs a specific task when it is invoked (called).
                     -> normal function
                     -> function with parameter
                     -> function with return 
                     -> default parameter function
                     -> function expression
                     -> Arrow function
                     -> Anonymous function
                     -> IIFE

*/

// normal function
function sayHello() {
  console.log(`hello world`);
}

// sayHello()

// function with parameter and arguement:
function Add(a, b) {
  console.log(a + b);
}

// Add(3,3)

function myDetails(name, rollNo) {
  console.log(name, rollNo);
}

// myDetails("rahman", 5049)

// function with return: return key word has 2 jobs, one to return value outside the fnction and 2nd to not execute code written below return keyword

// Create a function named square()
// that takes a number as a parameter and returns its square.

function Square(number) {
  return number ** 2;
}

let sqValue = Square(10);
// console.log(sqValue);

// Create a function named checkEven() that takes a number as a parameter.

// Return "Even" if the number is even.
// Return "Odd" if the number is odd.

function checkEven(num) {
  if (num % 2 == 0) {
    return "even"
  } else {
    return "Odd";
  }
}

// checkEven(11)

// function expression :
let dcet = function () {
  console.log("dcet");
};

// dcet()

// arrow function :
// Create an arrow function named multiply that takes
// 2 numbers and returns their multiplication.
let multiply = (num1, num2) => {
  return num1 * num2;
};

let mulValue = multiply(3, 10);
// console.log(mulValue);

// Create an arrow function named isAdult.

// Takes age as a parameter.
// Returns "Adult" if age is 18 or above.
// Otherwise returns "Minor".

let isAdult = (age) => {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Not Adult";
  }
};

console.log(isAdult(16));


// anonymous function :

let greet = function () {
  console.log("greet");
};

// greet()

// iife :
// (function(boy){
//    console.log(boy);

//  }("boy"))

// hoisting : hoisitng means calling the fnction
// even before its written but we cant do this on arrow funcs, func expression.

// sayName("rxhmannn.goattt")

function sayName(name) {
  console.log(name);
}

// recursion : Recursion is a technique in which a function calls itself until a base condition is met.
function rollNo(number) {
  console.log(number);
  rollNo();
}

// rollNo(5049);
