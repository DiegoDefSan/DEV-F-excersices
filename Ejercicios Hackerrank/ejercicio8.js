function miniMaxSum(arr) {
    arr.sort(function(a, b) {
        return a-b;
    });
    let res = arr.reduce(function(a, b) {
        return a+b;
    })
    console.log(res-arr[arr.length-1], res-arr[0]);
}
