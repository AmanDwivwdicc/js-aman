//Nullish Coalescing Operator (??)
//The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
//val1 = 5 ?? 10; // val1 will be 5 because it's not null or undefined
//val1 = null ?? 10; // val1 will be 10 because the left side is null
//val1 = null ?? 5 ?? 10 // val1 will be 5 because it's the first non-null/undefined value

console.log(val1);
