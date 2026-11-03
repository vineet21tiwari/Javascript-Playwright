// let numbers = [10,20,30,40]
// for(let i=0;i<numbers.length;i++){
//     console.log(numbers[i]);
// }

// // print every element multiplied by 2
// for(let i = 0;i<numbers.length;i++){
//     console.log(numbers[i]*2);
// }

// // for..of

// let fruits = ["Apple","Mango","Banana","Kiwi"]

// for (let x of fruits){
//     console.log(x)
// }

// forEach()
let numbers2 = [10,20,30];

// numbers2.forEach(function(num){
//     console.log(num);
// });
// // callback(10),callback(20), callback(30)

// numbers2.forEach(num => {
//     console.log(num);
// });

//Important forEach() parameters : 
// the callback can receive : 
// array.forEach(function(value,index,array))


numbers2.forEach(function(num,index,numbers2){
    console.log(index,num,numbers2.length);
});