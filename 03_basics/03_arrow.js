const user = {
    username:"aman",
    price:999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}`); //this refers to the current object
        console.log(this) //prints the whole user object current context
    }
}

// user.welcomeMessage() //welcome aman
// user.username ="dwivedi ji"
// user.welcomeMessage() //welcome dwivedi ji

//console.log(this) //in global context, this refers to the global object(window in browsers, empty object in nodejs)

// function chai(){
//     console.log(this); //in normal function call, this refers to global object
// }
// chai()

// function chai(){
//     let username ="aman"
//     console.log(this.username); //undefined as this refers to global object which doesn't have username property
// }

// const chai = function(){
//     let username ="aman"
//     console.log(this.username); //undefined as this refers to global object which doesn't have username property
// }
 
//arrow function
const chai = () =>{
    let username = "aman"
    console.log(this.username); //in arrow function, this refers to the surrounding context(global here)
    console.log(this); //prints empty object in nodejs(global object)
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) =>(num1 + num2) //implicit return(without return keyword and curly braces)

