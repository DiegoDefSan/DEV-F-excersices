function validMatrix(arr) {
    let long = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (long != arr[i].length) {
            return false;
        }
    } return true;
}

function equalMatrix(arr1, arr2) {
    let m = arr1.length;
    let p = arr2.length;
    let n = arr1[0].length;
    let q = arr2[0].length;
    return m==p && n==q;
}

function validMultMatrix(arr1, arr2) {
    let n = arr1[0].length;
    let p = arr2.length;
    return n==p;
}

function sumMatrix(m1, m2) {
    let m3 = [];
    for (let i = 0; i < m1.length; i++) {
        let ls = [];
        for (let j = 0; j < m1[0].length; j++) {
            ls.push(m1[i][j] + m2[i][j]);
        }
        m3.push(ls);
    }
    return m3;
}

function mutMatrix(r, m) {
    let m3 = [];
    for (let i = 0; i < m.length; i++) {
        let ls = [];
        for (let j = 0; j < m[0].length; j++) {
            ls.push(m[i][j]*r);
        }
        m3.push(ls);
    }
    return m3;
}

function determinant(m) {
    let res;
    if (m.length == 2) {
        res = m[0][0]*m[1][1] - m[0][1]*m[1][0];
    } else if (m.length == 3) {
        let m1 = [[m[1][1], m[1][2]], [m[2][1], m[2][2]]];
        let m2 = [[m[1][0], m[1][2]], [m[2][0], m[2][2]]];
        let m3 = [[m[1][0], m[1][1]], [m[2][0], m[2][1]]];
        res = m[0][0]*determinant(m1) - 
                m[0][1]*determinant(m2) + 
                m[0][2]*determinant(m3);
        return res;
    }
    return res;
}

var ls1 = [[3, 6], [-2, 5], [-4, -4]];
var ls2 = [[-1, 0], [3, -2], [8, 8]];

console.log(sumMatrix(mutMatrix(2, ls1), mutMatrix(-1, ls2)));
