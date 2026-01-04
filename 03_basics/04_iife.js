//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log("DB connected")
})(); // function defined and called immediately(IIFE)

//(function definition)( function immediate call )

((name) => {
    console.log(`DB connected using arrow function ${name}`)
})('aman'); // IIFE 

