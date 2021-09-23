function minNumber(arr) {
    return arr.sort((a, b) => a-b)[0]
}

function minNumber2 (arr) {
    let min_ = Infinity;
    for (let x of arr) {
        if (x<min_) {min_=x}
    }
    return min_;
}

let arr = [1,4,5,-1,-7,2,3,9];
console.log(minNumber(arr))
console.log(minNumber2(arr))