/*
function  -> aVeryBigSum(arr: array[]) {
    definir result = 0;
    por cada item del array:
        result = result0 + item;
    retornar result;
}
*/


function aVeryBigSum(arr) {
    // Write your code here
    let res=0;
    for (let x of arr) {
        res +=x;
    }
    return res;
}