/* Typescript :
  
 - to install typescript, u need to install node js on ur laptop/pc (node -v)
 - npm i -g typescript (global install, only once)
 - tsc -v

 there are two ways of running ts file 

 1) compile the ts file into js and run it after coding is done 
    tsc 1.ts -> this complies ts file into js (1.js) -> ndoe 1.js
    
 2) (good way) tsc 1.ts --watch (every time u save code in ts file js file gets automatically updated) 
    -> tsc 1.ts --watch -> tsc 1.ts  -> node 1.js

*/


// basic types in typescript : 

// primitive types : number , string, boolean, undefined, null , bigint , symbol.

/* Primitive types in typescript:  there are 3 primitive types in ts, they are: number, string and boolean.

   just like in js these primitive variables are declared.

   in typescript, u can do type annotation, which means telling compiler at time of 
   decalring variable its data type

 */

// declaring variable is typescript : 
var a : string = `abd`
let age: number = 22
const college:string = `DCET`
const isAlive : boolean = true
console.log(a, age, college, isAlive);
console.log(typeof(a), typeof(age), typeof(college), typeof(isAlive));


 

// arrays : array in ts is very powerful, we declare type of values which is going to be stored in array.

// normal js array 
let jsArr = [1,2,3, true, 'hey']
// console.log(jsArr);

let tsArr : boolean[] = [true, false, true, false]
// console.log(tsArr);


/*

  Tuples : tuple is a special type of array,
  which stores fixed size and specific data values in itself.

  let arr = [string, boolean, number] = ["hey", true, "go"] 

*/ 


// normal ts array: 
let tsArr1 : number[] = [1,2,49, 46]
// console.log(tsArr1);

const tupArr : [boolean, string, number] = [true, 'hi', 49]
// console.log(tupArr);


// ENUM: An enum is a way to store a fixed set of values under a name. 
//       It makes the code clean and easy to read.

// enums se apan custom data type bnaskte with fixed values like in this eg jisme statuscode ek custom datatype h jisme fixed values h error, success etc 
// and jo b variable ku apan enum assign krre wo variable sirf enum k andar k values access krskta..

enum StatusCode {
    success = 200,
    error = 400,
    servererr = 404
}

let checkCodes : StatusCode = StatusCode.servererr
// console.log(checkCodes);


// ANY , UNKNOWN , VOID, UNDEFINED, NULL ETC:

// ANY : If a variable is declared without specifying its type and without assigning a value, TypeScript treats it as any. 
//       This means the variable can hold any type of value, which removes TypeScript’s type safety and is generally not recommended.

let myVar;
// console.log(myVar);


// Unknown: it is a special TypeScript type that can store any value, but unlike any,
//         it does not allow operations (like arithmetic or method calls) without proper type checking..

let ab:any = 'hello'
ab = ab.toUpperCase()
// console.log(ab);

let unVar: unknown = "heyya"
if(typeof unVar === "string"){
    console.log(unVar.toUpperCase());
}

let unVar1 : unknown = false
if (typeof unVar1 === "boolean"){
 console.log(unVar1);
}

// let names:any = 'rxhman'
// names = names.toUpperCase()
// console.log(names);

/* Void: it is a special type which tells that what datatype value 
        is getting returned inside a function. if no value is getting retrned 
        
        void ka matlab hai “koi value return nahi ho rahi”.

        Matlab function sirf execute hota, lekin kuch return nahi karega.        
*/

function sayHello(): void {
 
    console.log(`Hello`);
    

}

// sayHello()

function Add(a:number, b:number): number {
 
    return a + b

}

let sumValue : number = Add(24,48)
// console.log(sumValue);

function checkTrue(value : boolean) : boolean {
 return value
}

let checkBool: boolean = checkTrue(true)
// console.log(checkBool);


function myClg(college:string): string{
    return college
}

let checkClg : string = myClg("DCET")
// console.log(checkClg);



// undefined: it literally means a variable is declared but it has been not assigned with any value.

let undefVar : undefined
// console.log(undefVar);


// never: use karte ho jab function kabhi normal tarike se end nahi hoga. 
//        Ya toh error throw karega ya infinite loop me fasa rahega.

function abcd():never{
    while(true){
        console.log(`hello`);
    }
}

// abcd()

