// const score = 400
// console.log(score);


// const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString()); //100
// console.log(balance.toString().length); //3

// console.log(balance.toFixed(2)); // 100.00


// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3)); //124
// console.log(otherNumber.toPrecision(4)); //123.9

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000


// ++++++++++++++++ Math ++++++++++++++++++ //

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-5)); // 5 abs changes value to positive
// console.log(Math.round(4.3));// 4 Round off the number 

// console.log(Math.ceil(4.3)); // 5 round off the number to the uppar value i.e 5
// console.log(Math.floor(4.3)); // 4 round off the number to the lower value i.e. 4

// console.log(Math.min(2, 4, 6, 8)); // 2 Find Minimum value
// console.log(Math.max(5, 4, 7, 9)); //  9 Find Maximum value

// console.log(Math.random()); // 0.6224667183022652 values always between 0 & 1.
// console.log((Math.random()*10) + 1); //6.5966510315430735
// console.log(Math.floor((Math.random()*10)+1)); // 9

const min=10
const max=20

console.log(Math.floor((Math.random(max-min)*10) + min));//11
console.log(Math.floor((Math.random()*(max-min+1)) + min));//15 






