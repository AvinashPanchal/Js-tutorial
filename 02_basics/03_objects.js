// object are represented in two ways
//1. Singleton or construtor object.create
//2. object literals (key:values)

const mySym = Symbol("key1")

const JsUser = {
    name:"Avinash",
    "full name": "Avinash Panchal",
    [mySym]: "mykey1",
    age: 35,
    location: "Delhi",
    email: "er.avinashpanchal@gmail.com",
    isLoggedIn: false,
    latsLogginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email); //er.avinashpanchal@gmail.com
// console.log(JsUser["email"]); // er.avinashpanchal@gmail.com
// console.log(JsUser["full name"]);  //Avinash Panchal
// console.log(JsUser[mySym]); // mykey1


JsUser.email = "Avinash@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "Avinash@microsoft.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting()); //Hello JS
console.log(JsUser.greetingTwo()); //Hello JS User, Avinash
