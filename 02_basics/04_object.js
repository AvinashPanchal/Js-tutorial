// const tinderUser = new Object() // constructor
// console.log(tinderUser); // {}

const tinderUser = {} // non singleton or literals
tinderUser.id = "123abc"
tinderUser.name = "Amit"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname:{
        userfullname:{
            fisrtname:"Avinash",
            lastname:"Panchal"
        }
    }
}

// console.log(regularUser.fullname); //{ userfullname: { fisrtname: 'Avinash', lastname: 'Panchal' } }
// console.log(regularUser.fullname.userfullname); // { fisrtname: 'Avinash', lastname: 'Panchal' }
// console.log(regularUser.fullname.userfullname.fisrtname); // Avinash

const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2}
//console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj3 = {...obj1, ...obj2}
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const users= [
    {
        id:1,
        email:"user1@gmail.com"
    },
    {
        id:2,
        email:"user2@gmail.com"
    },
    {
        id:3,
        email:"user3@gmail.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


