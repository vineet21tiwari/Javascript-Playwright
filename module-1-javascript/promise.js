//create a promise that checks whether a student is passed or not
// if marks > 40 ---> student passed otherwise failed

// let marks = 70

// let result = new Promise((resolve,reject)=>{
//     if(marks >= 40){
//         resolve("Student passed")
//     }

//     else{
//         reject("student failed")
//     }
// });

// result.then((message)=>{
//     console.log(message)
// }).
// catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("result checking completed")
// });

///////////////////////////////////////////////////////////////////////////////////////////////////

// Promise chaining

// Promise.resolve(10)
//     .then((number)=>{
//         console.log("step 1 : ",number)
//         return number * 2;
// }).then((number)=>{
//     console.log("step 2 : ", number)
//     return number + 5;
// }).then((number)=>{
//     console.log("step 3 : ", number)
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Suppose a customer has a product price of 1000, we want three steps :
        // 1 . original Price 
        // 2 . add 10% tax 
        // 3. apply 100 discount
        // 4. show final amount


function openWebsite(){
    return new Promise((resolve, reject)=>{

        let websiteWorking = false;

        setTimeout(()=>{
            if(websiteWorking){
                resolve("website opened successfully")
            } else {
                reject("website failed to open");
            }
            
        },3000)
    });
}


async function testWebsite() {
    try {
        console.log("starting test");
        let result  = await openWebsite();
        console.log(result);
        console.log("Test passed");
    }
    catch (error){
        console.log("Test failed");
        console.log(error)
    }
}

testWebsite();