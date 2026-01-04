// if(1==true){
//     console.log("Equal");
// }

const userEmail=[]

if(userEmail){
    console.log("got user email");
}else{
    console.log("user email not found");
}

if(userEmail.length === 0){
    console.log("array is empty");
}
    
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}





//Falsy values:

//false,0,-0,BigInt 0n,"",null,undefined,Nan

//Truthy values:


//Infinity,-Infinity, true, BigInt 1n,'0',"false",[],{}, " "


