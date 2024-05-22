// Stack - All primitive datatypes  - changes apply on copy of data, original value never change.
//Heap - All non-primitive  - changes apply on direct on data, so original value of data change.

let myClassName = "Avinash Online";

let anotherClassName = myClassName;
anotherClassName = "Chai Or Code"

console.log(myClassName); // Avinash online
console.log(anotherClassName); // Chai Or Code


let userOne = {
    email: "avinash@gmail.com",
    upi:"avinash@upi"
}
 
let userTwo = userOne

userTwo.email = "avinash@cefnogi.com"

console.log(userOne);
console.log(userTwo);