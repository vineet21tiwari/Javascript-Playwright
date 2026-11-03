const prompt = require("prompt-sync")();
// Logical Operators:
// condition1 <&& / || > conditon2
// condtion1 and conditon 2 should always give you result in true or false

// console.log(10 && 0 && 30);
// console.log("" || null || undefined || "Javascript");

// let age = 25;
// let hasLicense = true;

// let username = "";
// let password= "12345";

// if(username && password=="12345"){
//     console.log("Login successful")
// }

// else{
//     console.log("Login failed")
// }


// Q1 :  check who can drive , a person whose age is more than 25 and has License can drive

let age = prompt("Enter your age: ");
let hasLicense = prompt("Do you have License: ")

if(age>=25 && hasLicense){
    console.log("can drive")
}
else{
    console.log("cannot drive")
}
