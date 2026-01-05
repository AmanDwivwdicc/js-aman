// for of loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

// for (const num of arr){
//     console.log(num)
// } //1 2 3 4 5

const greetings="Hello World"

// for(const greet of greetings){
//     console.log(`each char is ${greet}`);
// }

//Maps

const map = new Map()
map.set('IN',"India")
map.set('US',"United States")
map.set('FR',"France")
map.set('IN','India')
map.set('IN','Bharat') //overwrites the previous value for key 'IN'

console.log(map)

for(const [key,value] of map){
    console.log(`Key is ${key} and value is ${value}`);
}