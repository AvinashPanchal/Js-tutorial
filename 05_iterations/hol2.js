// For Each Loop - Array
// Callback Function - function(){} - callback function has no name

const coding = ["JS", "Ruby", "Python", "CPP"]

// coding.forEach( function (item) {
//     console.log(item);

// } )

// coding.forEach( (item) =>{
//  console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName:"JS"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    }
]

myCoding.forEach( (item)=>{
console.log(item.languageName);
})

