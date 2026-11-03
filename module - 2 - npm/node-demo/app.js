// // login Code 
// // calculator code 
// // payment code 
// // student code 
// // utility code 

// // App . js ----------> uses functions from other files

// // Two main module system in Node.js 
// // CommonJS
// //     It uses :
// //         require()
// //         module.exports()
// // ES modules 
// //     It uses :
// //         import
// //         export
// //   "type" : "module" ----> this will tell node.js that treat my .js files using ES module syntax , so that
// //                            we can use import and export

// // const math = require("./math");
// // const user = require("./user")


// import {add,subtract} from "./math.js"
// import { getUserAge,getUserName } from "./user.js";

// // console.log(math.add(20,30));
// // console.log(math.subtract(30,10));
// // console.log(user.getUserAge())
// // console.log(user.getUserName())

// // if(condition){
// //     const math = require("./math.js")
// // }

// console.log(add(20,30));
// console.log(subtract(30,10));
// console.log(getUserAge())
// console.log(getUserName())

// import "dotenv/config";

import {config} from "./config.js"
console.log("Environment: ",config.environment);
console.log("BASE URL: ", config.baseUrl);
console.log("studentName: ", config.studentName);
console.log("Course: ",config.course);








