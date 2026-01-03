// singleton  , jab literals se object banaye toh singleton nhi hota hai, constructor se banaye tab hota hai
//object.create

//object literals

const JsUser = {
    name: "aman",
    "full name": "aman dwivedi",
    age: 19,
    location:"raipur",
    inLoggedIn: false,
    lastLoginDays:["monday","saturday"]
} //by default object keys k string ki tarah leta hai

// console.log(JsUser.age)
// console.log(JsUser["age"])
// console.log(JsUser["full name"])

// JsUser.age=21
// Object.freeze(JsUser) //freeze karne ke baad object ke andar kuch bhi change nhi kar sakte
// JsUser.age=22 //will not work
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`); //this keyword refers to the current object, `` and ${} used for string interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());