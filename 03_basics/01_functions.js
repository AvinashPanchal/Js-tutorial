function sayMyName(){
console.log("A");
console.log("V");
console.log("I");
console.log("N");
console.log("A");
console.log("S");
}

// sayMyName // function reference
// sayMyName() // function execution
// Parameters
// Arguments

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2);

// }
// addTwoNumbers(); // NaN
// addTwoNumbers(5, 6); // 11
// addTwoNumbers(5, "6"); // 56 (string conversion)

// addTwoNumbers(5, "a"); //5a
// addTwoNumbers(5, null);// 5

// const result = addTwoNumbers(5,6)
// console.log("Result: ", result);

// function addTwoNumbers(number1, number2){
    
//     let result = number1+number2
//     console.log("Avinash"); // Avinash Before Return Function Executed
//     return result
//     console.log("Varun"); // Unreachable code detected after return

// }
//const result = addTwoNumbers(5,6)
// console.log("Result: ", result); //Result:  11

// function loginUserMessage(username){
//     return `${username} Just Logged in`
// }
// loginUserMessage("Panchal")
//  console.log(loginUserMessage("Avinash")); //Avinash Just Logged in
//  console.log(loginUserMessage()); // undefined Just Logged in - when no value pass

// function loginUserMessage(username){
//     if (username===undefined){
//         console.log("please enter username")
//         return
//     }
//     return `${username} Just Logged in`
// }

// console.log(loginUserMessage("avinash"));

// function loginUserMessage(username){
//     if (!username){
//         console.log("please enter username")
//         return
//     }
//     return `${username} Just Logged in`
// }

// console.log(loginUserMessage("avinash"));


function loginUserMessage(username="Panchal"){
    if (!username){
        console.log("please enter username")
        return
    }
    return `${username} Just Logged in`
}

console.log(loginUserMessage());// Panchal Just Logged in