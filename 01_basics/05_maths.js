/* ***********maths library is inbuilt in js****

random() - generates random number between 0 and 1
floor() - rounds down the number
ceil() - rounds up the number
round() - rounds to nearest integer

console.log((Math.random()*10)+1);
*/

const min=10;
const max=20;
//generating random number between min and max
console.log(Math.floor(Math.random()*(max-min+1))+min);