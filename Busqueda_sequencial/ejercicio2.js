function returnLetter (arr) {
    let res = [];
    for (let x of arr) {
        if (typeof x === 'string'&& x.length===1) {
            res.push(x);
        }
    }
    return res;
}


let arr = [8,'e',7,2,'a','d','f',2,3,1,4,3]
console.log(returnLetter(arr))
