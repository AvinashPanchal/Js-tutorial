const name = 'Avinash'
const repoCount =10;

//console.log(name+ repoCount+" Value"); //Avinash10 Value

//console.log(`I am ${name} and my repo on github is ${repoCount}`); //I am Avinash and my repo on github is 10

const gameName = new String ('AvinashP');

// console.log(gameName[0]); // A
// console.log(gameName.__proto__); // {} object


// console.log(gameName.length); // 8
// console.log(gameName.toUpperCase()); // AVINASHP

// console.log(gameName.charAt(2)); // i
// console.log(gameName.indexOf('P')); // 7

// const newGame = gameName.substring(1, 6);
// console.log(newGame); // vinas - last value(6) not included only 1 to 5.

// const anotherGame = gameName.slice(-7, 4); 
// console.log(anotherGame); // in slice we can use negative value

// const newString = "  avinash  "
// console.log(newString);
// console.log(newString.trim()); // trim removes whitespaces from a string

// const url = "https://avinash.com/chai%20code";

// console.log(url.replace('%20', '-')); // https://avinash.com/chai-code

// console.log(url.includes("avinash")); // true


const anotherString = 'Avinash-Panchal-com';
console.log(anotherString.split('-'));