function plusMinus(arr) {
    let posi = arr.filter(function(n) {
        return n>0;
    }).length;
    let nega = arr.filter(function(n) {
        return n<0;
    }).length;
    let zero = arr.filter(function(n) {
        return n==0;
    }).length;
    
    console.log((posi/arr.length).toFixed(6));
    console.log((nega/arr.length).toFixed(6));
    console.log((zero/arr.length).toFixed(6));
}