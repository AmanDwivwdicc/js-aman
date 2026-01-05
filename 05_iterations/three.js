//forin is used for object and arrays

const myObject = {
    js: "javascript",
    py: "python",
    rb: "ruby",
    java: "java"
}

for (const key in myObject) {
    console.log(`key is ${key} and value is ${myObject[key]}`);
}