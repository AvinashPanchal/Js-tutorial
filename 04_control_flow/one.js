// if (<, >, >=, <=, ==, !=, ===)

if(true){
// code run
}

if(false){
    //code not run
}

// if(2=="2"){
// console.log(("executed")); //executed "==" only check variable not datatypes of variables
// }

// if(2==="2"){
//     console.log("executed"); // code inside { } not executed because "===" checks data as well as datatypes of variables
// }

// if(2 != 3){
//     console.log(" new executed"); // new executed
// }


// const temperature = 41

// if (temperature < 50){
//     console.log("Less than 50"); // Less than 50
// }

// else{
//     console.log("Temperature Greater Than 50"); // not executed
// }

// console.log("executed"); // executed


// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`User Power: ${power}`); //User Power: fly

// }

// console.log(`User Power: ${power}`); // power is not defined-scope variable issues


//implicit code example
// const balance = 1000
// if(balance>500) console.log("Test");

// 

const userLoggedIn = true
const debitCard = true
const userLoggedFromGoogle = false
const userLoggedFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allowed to Purchase"); 
}

if (userLoggedFromGoogle || userLoggedFromEmail){
    console.log("User Logged In");
}



