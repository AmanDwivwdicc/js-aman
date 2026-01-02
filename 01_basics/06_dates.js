let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2023,0,23,5,3); // month is 0 based index in this format
let myCreatedDate=new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp); // current time in milliseconds from 1 jan 1970
// console.log(myCreatedDate.getTime()) // time in milliseconds from 1 jan 1970 for given date

//to get date in seconds:
// console.log(Math.floor(Date.now()/1000))