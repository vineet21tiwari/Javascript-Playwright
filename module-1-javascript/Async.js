// function processStudent(name, callback){
//     console.log("Processing ... " + name);

//     setTimeout(()=>{
//         console.log("processing completed");
//         callback();
//     },2000);
// }

// function showResult(){
//     console.log("Result displayed");
// }

// processStudent("Vineet",showResult);

let promise = new Promise((resolve,reject)=>{
        let success = true

        if(success){
            resolve("Task completed");
        }

        else{
            reject("Task failed")
        }
});

promise.then((result)=> {
        console.log(result);
})
.catch((error) => {
    console.log(error);
})
.finally(()=>{
    console.log("operation fininshed")
})


let orderFood = new Promise((resolve,reject)=>{

    console.log("Food ordered")

    setTimeout(()=>{
        resolve("food delivered");
    },3000)
});

orderFood.then((result) =>{
    console.log(result);
})