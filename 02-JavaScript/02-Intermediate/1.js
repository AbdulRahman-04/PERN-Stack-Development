// Conditionals in js :

/*
 there are 4 types of conditionals in js : 

  - If statement : single condition
  - If else : two conditions 
  - If else if : more than 2 conditions 
  - nested if else : aalternate of if else if

*/

// if statement : executes a block of code when a condition is true.
let age = 2;
if (age >= 18) {
  // console.log("You can drive");
}

// if else statement : used for two conditions
let num = 13;
if (num % 2 == 0) {
  console.log("Number is even");
} else {
  console.log(`Number is odd`);
}

// if else if : used for more than two conditions
// let marks = 97;
// if (marks >= 90 && marks <= 100) {
//   console.log(`GRADE A`);
// } else if (marks >= 80 && marks < 90) {
//   console.log(`GRADE B`);
// } else if (marks >= 70 && marks < 80) {
//   console.log(`GRADE C`);
// } else {
//   console.log(`Failed`);
// }

// nested if else
let isLoggedIn = true;
let role = "admin";

if (isLoggedIn) {
  if (role === "admin") {
    console.log(`logged in as admin`);
  } else {
    console.log(`your not an admin`);
  }
} else {
  console.log(`You are not logged in`);
}

// switch statement : Switch statement is a conditional statement used to execute
// one block of code from multiple possible conditions based on the value of an expression.

// let day = "wednesday";

// switch (day) {
//   case "monday":
//     console.log(`aaj monday hai`);
//     break;
//   case "tuesday":
//     console.log(`aaj tuesday hai`);
//     break;
//   default:
//     console.log(`aaj konsa b din nai h re bhai🙏`);
// }

let database = "postgres";

switch (database) {
  case "mongodb":
    console.log("Document database selected 📄");
    break;

  case "postgres":
    console.log("SQL mode activated 🐘");
    break;

  case "mysql":
    console.log("Classic relational database 😎");
    break;

  default:
    console.log("Unknown database");
}
