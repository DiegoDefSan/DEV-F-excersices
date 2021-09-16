/*
    function -> diagonalDifference(arr:array ints) {
        definir dig1=0, dig=2;
        definit i=0, j=0;
        repetir
            dig1 += arr[i][i];
            i++;
        hasta que i=arr.length-1
        repetir
            dig2+=arr[j][arr.length-1-j];
            j++;
        hasta que j=arr.length-1
        
        Retornar Math.abs(dig1-dig2);
    }
*/

function diagonalDifference(arr) {
    let dig1 = 0, dig2 = 0;
    for (let i = 0; i<arr.length; i++) {
        dig1+= arr[i][i];
    }
    for (let j = 0; j<arr.length; j++) {
        dig2 += arr[j][arr.length-1-j];
    }
    return Math.abs(dig1-dig2);

}