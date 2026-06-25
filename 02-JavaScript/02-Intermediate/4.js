/*

 objects: Objects are non-primitive data types used to store data in the form of key-value pairs.

*/

// creating an object:

let student = {
    name : "rxhmann",
    rollNo: 5049,
    college: "DCET"
}

// console.log(student);

// updating an object :
student.name = "Abdul Rahman"
student.rollNo = 160321735049
student.college = 'DCET'
// console.log(student);

// deleting a key value pair from object : 
// delete student.college
// console.log(student);
// delete student.rollNo
// console.log(student);

// object methods : 

// 1: Object.keys : 
console.log(Object.keys(student));

// 2: Object.values : 
console.log(Object.values(student));

// 3: Object.entries : converts an object into an array.
console.log(Object.entries(student));

// 4: Object.fromentries: converts an array into object.
let arr = [["name", "rahman"], ["rollNo", 49]]
console.log(Object.fromEntries(arr));

// 5: Object.is : 
let a = 10;
let b = 10
console.log(Object.is(a,b));

// 6: Object.seal: 
// let obj1 = {
//     lol : "lol",
//     lmao : "lmao"
// }

// Object.seal(obj1)
// obj1.lmfao = "hehe"
// console.log(obj1);

// ye smjh ni aya obj.string()  // 7: obj.toString(): 
//  let obj = { name: "Rahman", age: 21 };

// console.log(obj.toString());


// 8: Object.assign: assign keys nd values of one obj to other obj
let obj2 = {
    hi : "hi"
}

let obj3 = {
    hello: "hello"
}

console.log(Object.assign(obj3, obj2));
console.log(Object.assign(obj2, obj3));



// 9: Object.freeze: 
Object.freeze(obj3)
obj3.add = "plus"
console.log(obj3);





