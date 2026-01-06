//callback functions are functions that are passed as arguments to other functions

//reduce method 

const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc, currval){ //accumulator and current value
//     console.log(`accumulator is ${acc} and current value is ${currval}`);
//     return acc+currval
// },0) //initial value of accumulator

const myTotal = myNums.reduce( (acc, currval) => acc+currval ,0)

//console.log(myTotal); //6


const shoppingCart = [
    {productId:1, productName:"mobile", price:12000},
    {productId:2, productName:"laptop", price:55000},
    {productId:3, productName:"tv", price:22000},
]

 const totalPrice = shoppingCart.reduce( (acc, currval) => {
//     console.log(`acc is ${acc} and currval price is ${currval.price}`);
     return acc+currval.price
 },0)

 console.log(totalPrice);
 

