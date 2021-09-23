function repeatNumber(arr) {
    let max_=arr[0], count=0;
    if (arr.length===0) {return null}

    let dct = {};
    for (let x of arr) {
        if (dct[x]==null) {
            dct[x]=1
        } else {
            dct[x]+=1;
        }
        
        if (dct[x]>count) {
            max_=x;
            count=dct[x]
        }

        //En caso de tener la misma cantidad, se queda con el numero mayor
        if (dct[x]==count&&x>max_) {
            max_=x
        }
        
    }
    return max_;
}

let arr = [3,6,1,8,2,3,6,3,2,5,6]

console.log(repeatNumber(arr))

