// async and await

// Async/Await is the easiest and most modern way
// to handle asynchronous JavaScript.

// It does NOT replace Promises.
// It is a cleaner syntax built on top of Promises.

// fetch() immediately returns a pending Promise.

// await waits until that Promise resolves
// and gives us a Response object.

// response.json() reads the response body
// and parses the JSON.

// Since parsing is also asynchronous,
// response.json() returns another Promise.

// Therefore, we use another await
// to get the final JavaScript object.

// async function getData() {

//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

//     const data = await response.json();

//     console.log(data);

// }

// // getData();

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const jsonData = await response.json();
  console.log(jsonData);
}

// getData()

function getPromiseData() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    (response) => {
      return response.json();
    }
  );
}

function main() {
  getPromiseData().then((data) => {
    console.log(data);
  });
}

main();
