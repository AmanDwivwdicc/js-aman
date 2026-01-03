//array

const myArr=[0,1,2,3,4,5];
const myArr2=new Array("aman","don","king");

//Array methods:

//myArr.unshift(9);//adds element at the beginning
//myArr.shift(); //removes element from the beginning
//myArr.push(6); //adds element at the end


// const newArr=myArr.join(); //converts array to string
// console.log(newArr);

//slice and splice

console.log("A", myArr); //[ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1,3);
console.log(myn1); //[ 1, 2 ]
console.log("B", myArr); //[ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1,3);//removes elements from index 1 to 3
console.log(myn2); //[ 1, 2, 3 ]
console.log("C", myArr); //[ 0, 4, 5 ]