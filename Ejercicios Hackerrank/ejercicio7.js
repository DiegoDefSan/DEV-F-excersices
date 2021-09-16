function staircase(n) {
    for (let i = 1; i<=n; i++) {
        let word = '';
        for (let j=1; j<=(n-i); j++) {
            word += ' ';
        }
        for (let k=1; k<=i; k++) {
            word += '#';
        }
        console.log(word);
    }
}
