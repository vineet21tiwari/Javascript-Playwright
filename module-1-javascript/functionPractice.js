function add(a,b){
    return a+b
}

function multiplicationTable(a){
    for(let i = 1;i<=10;i++){
        console.log(a+ " x " + i + " = " + a*i);
    }
}

function countDigits(n){
    let count = 0;
    while(n>0){
        lastDigit = n %10;
        n = Math.floor(n/10);
        count++;
    }
    return count
}

function calculatePercentage(maths,science,english){
    let total = maths+science+english
    let percentage = total*100/300

    return percentage
}

function getResult(maths,science,english){
    if(calculatePercentage(maths,science,english)>=75){
        return "Distinction"
    }
    else if(calculatePercentage(maths,science,english)>=40){
        return "Pass"
    }
    else{
        return "Fail"
    }
}

function tenPercent(price){
    return price*0.10;
}

function twentyPercent(price){
    return price*0.20;
}

function finalPrice(price,discountCallBack){
    let discount = discountCallBack(price);
    return price-discount;
}

console.log(finalPrice(1000,tenPercent));
console.log(finalPrice(1000,twentyPercent));
// console.log(getResult(74,89,65))

// let addResult = add(10,34);
// multiplicationTable(9);
// multiplicationTable(13);
// let countResult = countDigits(348220);

// console.log("Result of addition " + addResult);
// console.log("Number of digits " + countResult);

