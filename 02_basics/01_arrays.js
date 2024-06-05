const myArr = [22, 25, 36, 39, 40, 45]
//console.log(myArr[0]); // 22 "JavaScript arrays are zero-indexed"

const myHeros = ["Shaktiman", "Nagraj", "Dhruv"]
const myArr2 = new Array(1, 2, 3, 4, 5)

// Array Methods

myArr.push(6) // add 6 value in the end of array
//console.log(myArr);  // [22, 25, 36, 39, 40, 45, 6]

myArr.pop() // always remove last value from an arrays
//console.log(myArr); //[22, 25, 36, 39, 40, 45]

myArr.unshift(0) // always add first value in an arrays
//console.log(myArr); // [0, 22, 25, 36, 39, 40, 45]

myArr.shift() /// always remove first value in an arrays
//console.log(myArr); // [ 22, 25, 36, 39, 40, 45 ]

// console.log(myArr.includes(9)); //false
// console.log(myArr.includes(25)); //true

//console.log(myArr.indexOf(36)); // 2

const newArr = myArr.join() // convert array to string
console.log(myArr); // [ 22, 25, 36, 39, 40, 45 ]
console.log(newArr); // 22,25,36,39,40,45





