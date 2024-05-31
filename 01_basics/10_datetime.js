// let myDate = new Date();
// console.log(myDate); // 2024-05-31T06:24:12.456Z
// console.log(myDate.toString());// Fri May 31 2024 06:26:17 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());// Fri May 31 2024
// console.log(myDate.toISOString()); // 2024-05-31T06:27:22.529Z
// console.log(myDate.toJSON()); // 2024-05-31T06:28:01.426Z
// console.log(myDate.toLocaleDateString());// 5/31/2024
// console.log(myDate.toLocaleString());// 5/31/2024, 6:29:37 AM
// console.log(typeof myDate); // object


let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate); 2023-01-23T00:00:00.000Z
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 "Month Started in JS from 0 - 11"

// let anotherDate = new Date(2022, 1, 20, 5, 3);
// console.log(anotherDate.toDateString()); // Sun Feb 20 2022
// console.log(anotherDate.toLocaleString()); //2/20/2022, 5:03:00 AM

//let newDate = new Date ("2023-01-20");
//console.log(newDate.toLocaleString()); // 1/20/2023, 12:00:00 AM

// let newDate = new Date ("02-11-2023")
// console.log(newDate.toLocaleString()); // 2/11/2023, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp);// 1717138273927
console.log(myCreatedDate.getTime());// 1674432000000 in mili second
console.log((myCreatedDate.getTime())/1000); //1674432000 in second
console.log(Date.now()/1000); //1717138727.34
console.log(Math.floor(Date.now()/1000)); //1717138683





