// for of

["", "", ""]
[{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }


// Maps - just like object - collections of key-value pair and remembers the original insertion order of the keys. No duplicate values, all uniques value.

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('Fr', "France")
// map.set('IN', "India") - no duplicacy

//console.log(map);

// for (const key of map) {
//     console.log(key);
// }

// destructuring 

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value); // myObject is not iterable
}




