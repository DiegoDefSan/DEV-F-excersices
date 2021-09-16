function birthdayCakeCandles(candles) {
    let res = 0;
    let maxs = candles[0];
    for (let i=0; i<candles.length; i++) {
        if (candles[i]>maxs) {
            maxs=candles[i];
            res = 0;
        }
        if (maxs==candles[i]) {
            res +=1;
        }
    }
    return res;
}