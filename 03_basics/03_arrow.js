// const user = {
//     username:"Avinash",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this)
//     }
// }

// user.welcomeMessage() //Avinash , welcome to website
// user.username = "Panchal"
// user.welcomeMessage() //Panchal , welcome to website

// console.log(this)


// const chai = function(){
//     let username = "Avinash"
//     console.log(this.username)
// }

// const chai = () => {
//   let username = "Avinash"
//    console.log(this.username)
// }

// Arrow Function

// const addTwo = (num1, num2) =>{
//     return num1+num2
// }

//Arrow - implicit return
//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "Avinash"})

// console.log(addTwo(3, 4)); //7



// Immediately invoked function(IIFE) - global scope variable ke polution ko htane ke liye 

// function chai(){
//named IIFE
//     console.log("DB Connected");
// }
// chai()

(function chai(){
    console.log("DB Connected");
})();

(
    ()=>{
        console.log("DB Connected again")
    }
)();

(
    (name)=>{
        console.log(`DB Connected again ${name}`)
    }
)("Avinash");





