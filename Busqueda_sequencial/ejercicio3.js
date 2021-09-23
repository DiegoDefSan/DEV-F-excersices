function maxNumber(arr) {
    return arr.sort((a, b) => a-b)[arr.length-1]
}

function maxNumber2 (arr) {
    let max_ = -Infinity;
    for (let x of arr) {
        if (max_<x) {max_=x}
    }
    return max_;
}


let arr = [1,4,7,2,4,1,9,4,0,2,4,5,12];
console.log(maxNumber2(arr))

