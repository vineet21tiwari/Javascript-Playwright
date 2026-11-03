// let maths = 80;
// let science = 72;
// let english = 65;

// let totalMarks= maths + science + english;
// let percentage = (totalMarks / 300) * 100;
// console.log(percentage," %");
// if (percentage>=75 && maths >=60 && science>=60 && english >= 60) {
//     console.log(" eligigible for scholorship.");
// }
// else if (percentage >= 40 ){
//     console.log("Passed but no scholorship.");
// }
// else {
//     console.log("Failed")
// }

let amount = 6500;
let isPremium = true;

let discount = 0;
let shipping = 0;
if(amount >=5000 && isPremium){
    discount = amount*20/100;
}
else if(amount >=5000 || isPremium){
    discount = amount *10/100;
}
else {
    discount = 0;
}

let priceAfterDiscount = amount - discount;
if(priceAfterDiscount > 5000){
    shipping = 0;
}
else{
    shipping  = 200;
}

let finalAmount= priceAfterDiscount + shipping;

console.log("Discount = ", discount);
console.log("Price after discount = ",priceAfterDiscount);
console.log("Shipping =  ", shipping);
console.log("Final Amount = ",finalAmount);