const tinderUser = new Object() //object constructor syntax (singleton)

//const tinderUser = {} //object literal syntax 

tinderUser.id = "123abc"
tinderUser.name = "Aman"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname:{
            firstname: "Aman",
            lastname: "Dwivedi"
        }
    }
}

//console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}
//const obj4 = {obj1, obj2} //wrong way

const obj4 = Object.assign({}, obj1, obj2, obj3) //correct way to merge many objects, returns a new object merging all objects in empty list {}

//console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const obj5 = Object.assign(obj1, obj2, obj3) //merges obj 2 and obj3 into obj1

//console.log(obj5);

const obj6 = {...obj1, ...obj2, ...obj3} //using spread operator to merge objects

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //gives list of keys as an array in the object
// console.log(Object.values(tinderUser)); //gives list of values as an array in the object
// console.log(Object.entries(tinderUser));//gives list of key value pairs as an array in the object

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true, checks if the key is present in the object or not

const course = {
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Aman",
}

const {courseInstructor: inst} = course //object destructuring, extracting value of courseInstructor key and storing in inst variable

console.log(inst);

//api is nothing but json format data coming from backend

//json(JavaScript Object Notation) 
// contains keys in string format only
// {
//     "courseName": "js in hindi",
//     "price": 999,
//     "courseInstructor": "Aman"
// }