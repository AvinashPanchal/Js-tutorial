// For in Loop - for object
// const myObject = {
//     js:"Javascript",
//     cpp:'C++',
//     rb:"ruby",
//     swift:"Apple Swift"
// }

// for (const key in myObject) {
    
//     //console.log(key);
//     //console.log(myObject[key]);
//     console.log(`${key} shortcut for ${myObject[key]}`);
    
// }

// For in Loop - for Array

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);
    //console.log(programming[key]);
}

// For in Loop - for Map

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('Fr', "France")

for (const key in map) {
   console.log(key); // nothing show - not iterable
}