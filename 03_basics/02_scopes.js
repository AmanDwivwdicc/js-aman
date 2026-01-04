
if(true){
    let a = 10
    const b =20
    var c =30
}

//console.log(a)
//console.log(b)
//console.log(c)

// a and b will give error as they are block scoped(defined using let and const)
// c will be accessible as it is function scoped(defined using var)


function one(){
    const username = "aman"

    function two(){
        const website = "aman.com"
        console.log(username);
    }
    //console.log(website);

    two()

}

//one()

//Two ways to make functions:

console.log(addone(5)); //function creation ke pahle bhi use kr sakte hain //6
function addone(num){ 
    return num+1
}

//console.log(addtwo(5)); //error  //Cannot access 'addtwo' before initialization
const addtwo = function(num){  //function as an expression
    return num+2
}







