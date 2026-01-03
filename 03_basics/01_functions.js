function sayMyName(){
    console.log("Aman");
}

//sayMyName()

function addTwoNumbers(num1, num2){
    return num1+num2
}

const result = addTwoNumbers(4,5);
// console.log(result);

function loginUserMessage(username){
    if(username===undefined){
        return "please enter a valid username"
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage()); //please enter a valid username
// console.log(loginUserMessage("aman")); //aman just logged in

function calculateCartPrice(...num1){ //rest operator(used to give multiple arguments as an array)
    return num1
}

//console.log(calculateCartPrice(20,30,40,50)); //[ 20, 30, 40, 50 ]

const user ={
    username: "aman",
    price: 199
}

const{username, price} = user //object destructuring

function handleObject(anyobject){
    console.log(`username is ${username} and price is ${price}`);
}

//handleObject(user); //username is aman and price is 199

const myArray = [1,2,3,4,5,6]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myArray)); //2
//console.log(returnSecondValue([10,20,30,40])); //20