/*
    function -> compareTriplets(a: array, b: array) {
        definir scores:array = [aliceScore, bobScore]
        //asumimos a.length=b.length
        por (definir i=0; mientras i < a.length; aumentar en 1, a) 
            si (a[i]>b[i]) 
                scores[0]:aliceScore += 1;
            sino
                si (a[i]<b[i]) 
                    scores[1]:bobScore+=1;
        retornar scores;
    }
*/

function compareTriplets(a, b) {
    let scores = [0, 0];
    for (let i = 0; i<a.length; i++) {
        if (a[i]>b[i]) {
            scores[0]+=1;
        } else if (a[i]<b[i]) {
            scores[1]+=1;
        }
    }
    return scores;
}