// In javascript based on data store and access from memory there are 2 types. 
// Datatypes in JS => 1. Primitive() 2. Non-Primitive
// Primitive (Call by Value): 7 types (String, Number, Boolean, Null, Undefined, Symbol, BigInt)
// Non-Primitive(Call by Reference): Arrays, objects, Functions 

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;
let userMail;


const id = Symbol('123');
const anotherID = Symbol ('123')

console.log(id === anotherID); //false

const bigNumber = 34645647859544556564n;


// Arrays, Objects, Functions

const heros = ["Nagraj", "Shaktiman", "Doga"];

let myObj = {
    name: "Avinash",
    age: 22
}

const myFunction = function(){
    console.log("Hello Avinash");
}

