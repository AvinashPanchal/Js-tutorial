
// if (true) {
// let a =10
// const b = 20
// var c = 30
// }

// console.log(a); error - block scope variable
//console.log(b); error - block scope variable
// console.log(c); //30  

// let a = 500
// const b = 200

// if (true){
//     let a=10
//     const b=20
//     var c=30

//     console.log("Inner ", a);
// }

// console.log(a)


// function one(){
//     const username = "Avinash"

//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     //console.log(website)

//    // two()
// }

// one()



// function representation 1

console.log(addOne(5)); // 5

function addOne(num){
    return num+1
}

//addOne(5)


// function representation 2

console.log(addTwo(6)) // Error - Cannot access 'addTwo' JS Hoisting

const addTwo = function(num){
    return num+1
}

// addTwo(6)



