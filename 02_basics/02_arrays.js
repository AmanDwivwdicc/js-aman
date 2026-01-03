const marvel_Heros =["thor","ironman","spiderman"];
const dc_Heros=["superman","flash","batman"]

/*marvel_Heros.push(dc_Heros); //adds dc_Heros array as an element to marvel_Heros array

console.log(marvel_Heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const allHeros = marvel_Heros.concat(dc_Heros); //merges two arrays but does not change the original array

console.log(allHeros);

const all_new_heros=[...marvel_Heros, ...dc_Heros]; //merges two arrays using spread operator

console.log(all_new_heros); */

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const nanotherArr = anotherArr.flat(Infinity); //flattens the array upto specified depth

console.log(nanotherArr); //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]

console.log(Array.isArray("Aman")) //false
console.log(Array.from("aman")) //['a', 'm', 'a', 'n'] creates array from iterable objects

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) //[ 100, 200, 300 ] creates array from arguments
