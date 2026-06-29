// synchronous vs asynchronous js :

/*
  synchronous js means code gets executed line by line, and main thread gets blocked for code written below until the 
  above code is executed
*/

// function checkInventory(callback) {
//   setTimeout(() => {
//     console.log("Checking inventory");
//     callback();
//   }, 2000);
// }

// function createOrder(callback) {
//   setTimeout(() => {
//     console.log(`creating order`);
//     callback();
//   }, 1000);
// }

// function chargePayment(callback) {
//   setTimeout(() => {
//     console.log(`charging payment`);
//     callback();
//   }, 3000);
// }

// function sendInvoice(callback) {
//   setTimeout(() => {
//     console.log(`sending invoice`);
//     callback();
//   }, 2000);
// }

// function main() {
//   // the below code is callback hell
//   checkInventory(() => {
//     createOrder(() => {
//       chargePayment(() => {
//         sendInvoice(() => {
//           console.log(`All tasks done!`);
//         });
//       });
//     });
//   });

//   console.log(`processing other requests`);
// }

// // main();

// function receiveOrder(callback) {
//   setTimeout(() => {
//     console.log(`order recieved 1 sec`);
//     callback();
//   }, 1000);
// }

// function cookFood(callback) {
//   setTimeout(() => {
//     console.log(`cook food`);
//     callback();
//   }, 2000);
// }

// function serveFood(callback) {
//   setTimeout(() => {
//     console.log(`serve food`);
//     const error = new Error("error serving food");
//     callback(error);
//   }, 3000);
// }

// function takePayment(callback) {
//   setTimeout(() => {
//     console.log(`take payment`);
//     callback();
//   }, 4000);
// }

// function customerLeft(callback) {
//   setTimeout(() => {
//     console.log(`customer left`);
//     callback();
//   }, 5000);
// }

// function main() {
//   receiveOrder(() => {
//     cookFood(() => {
//       serveFood((error) => {
//         if (error) {
//           console.log(error);
//         }
//         takePayment(() => {
//           customerLeft(() => {
//             console.log(`happy customer`);
//           });
//         });
//       });
//     });
//   });
//   console.log(`processing other customers`);
// }

// main();

// function checkUserName(callback) {
//   setTimeout(() => {
//     console.log(`checking username`);
//     callback();
//   },1000);
// }

// function hashPassword(callback) {
//   setTimeout(() => {
//     console.log(`hashing pass`);
//     const error = new Error("error while hashing password");
//     callback(error);
//   },1200);
// }

// function saveUser(callback) {
//   setTimeout(() => {
//     console.log(`saving user`);
//     callback();
//   },1400);
// }
// function generateJWT(callback) {
//   setTimeout(() => {
//     console.log(`generating jwt`);
//     callback();
//   },1600);
// }

// function sendEmail(callback) {
//   setTimeout(() => {
//     console.log(`sending email`);
//     callback();
//   },1800);
// }

// function main() {
//   checkUserName(() => {
//     hashPassword((error) => {
//       if (error) {
//         console.log(error);
//       }
//       saveUser(() => {
//         generateJWT(() => {
//           sendEmail(() => {
//             console.log(`user created successfully!`);
//           });
//         });
//       });
//     });
//   });

//   console.log(`processing other users`);

// }

// main()

function checkInventory(callback) {
  setTimeout(() => {
    console.log(`checking inventory`);
    callback();
  }, 1000);
}

function createOrder(callback) {
  setTimeout(() => {
    const error = new Error("error creating order");
    console.log(`creating order`);
    callback(error);
  }, 500);
}

function chargePayment(callback) {
  setTimeout(() => {
    console.log(`charging payment`);
    callback();
  }, 1222);
}

function sendInvoice(callback) {
  setTimeout(() => {
    console.log(`sending invoice`);
    callback();
  }, 2200);
}

function main() {
  checkInventory(() => {
    createOrder((error) => {
      if (error) {
        console.log(error.name, error.message);
        // return;
      }
      chargePayment(() => {
        sendInvoice(() => {
          console.log(`purchase successful!`);
        });
      });
    });
  });
}

main();
