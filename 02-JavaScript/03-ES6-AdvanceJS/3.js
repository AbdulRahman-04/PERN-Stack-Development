// // promises :

// function checkInventory() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`checking inventory`);
//       resolve();
//     }, 1000);
//   });

//   return promise;
// }

// function createOrder() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = true;
//       if (error) {
//         reject(new Error("order creation failed"));
//         return;
//       }
//       console.log(`creating order`);
//       resolve();
//     }, 2000);
//   });
//   return promise;
// }

// function chargePayment() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`charging payment`);
//       resolve();
//     }, 2000);
//   });
//   return promise;
// }

// function sendInvoice() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log(`sending invoice`);
//       resolve();
//     }, 2000);
//   });
//   return promise;
// }

// function main() {
//   checkInventory()
//     .then(createOrder)
//     .then(chargePayment)
//     .then(sendInvoice)
//     .catch((err) => {
//       console.log(err.message);
//     });
//   console.log(`Processing other requests`);
// }

// main();

function checkTable() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`checking table`);
      resolve();
    }, 1000);
  });
}

function takeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const err = true;
      if (err) {
        reject(new Error("err taking order, no waiters found"));
        return;
      }
      console.log(`taking order`);
      resolve();
    }, 1000);
  });
}

function cookFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`cooking food`);
      resolve();
    }, 1000);
  });
}

function serveFood() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`serving food`);
      resolve();
    }, 1000);
  });
}

// function main() {
//   checkTable()
//     .then(takeOrder)
//     .then(cookFood)
//     .then(serveFood)
//     .catch((err) => {
//       console.log(`err: `, err.message);
//     });
// }

// // main()

function verifyDocs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`verifying docs`);
      resolve();
    }, 500);
  });
}

function payFees() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`paying fees`);
      resolve();
    }, 1000);
  });
}

function generateRollNo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const err = true;
      if (err) {
        reject(new Error("error generating roll no"));
        return;
      }
      console.log(`roll no generated`);
      resolve();
    }, 1500);
  });
}

function sendConfirm() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`student confirmed`);
      resolve();
    }, 2000);
  });
}

// function main() {
//   verifyDocs()
//     .then(payFees)
//     .then(generateRollNo)
//     .then(sendConfirm)
//     .catch((err) => {
//       console.log(`err: `, err.message);
//     });
// }

// // main();

function checkInventory() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`checking inventory`);
      resolve();
    }, 1000);
  });
}

function createOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`creating order`);
      resolve();
    }, 600);
  });
}

function chargePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const err = true;
      if (err) {
        reject(new Error(`err while chaarging payments`));
      }
      console.log(`charging payment`);
      resolve();
    }, 700);
  });
}

function sendInvoice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`send invoice`);
      resolve();
    }, 1100);
  });
}

function main() {
  checkInventory()
    .then(createOrder)
    .then(chargePayment)
    .then(sendInvoice)
    .catch((err) => {
      console.log(err, err.message);
      return;
    });
}

main();
