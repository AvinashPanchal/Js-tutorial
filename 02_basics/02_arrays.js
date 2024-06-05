const marvel_heros = ["thor", "ironman", "spiderman"]

const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros); 
// console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]) // flash

//concat
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// spread
// const newHeros = [...marvel_heros, ...dc_heros]
// console.log(newHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]



// flat
// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
// const realArray = anotherArray.flat(Infinity); // convert all array element into new array
// console.log(realArray); // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11 ]


// console.log(Array.isArray("Avinash")); //false
// console.log(Array.from("Avinash")); // ['A', 'v', 'i', 'n', 'a', 's', 'h'] - converted to array anything

// console.log(Array.from({name:"Avinash"})); // [] empty array in key/element

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
