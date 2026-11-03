function add(a,b){
    return a +b;
}

function subtract(a,b){
    return a - b;
}

// module.exports = {add,subtract}

// make add and subtract available to other javascript files
export {add,subtract};