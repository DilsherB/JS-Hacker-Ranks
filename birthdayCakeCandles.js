function birthdayCakeCandles(candles) {
    // Write your code here
    candles.sort((a,b)=>a-b);
    let x, y, frequency=1;
    for (x = 0; x < candles.length; x++) {
        if(candles[x+1]>candles[x]){
            frequency=1;
        }
        if(candles[x]==candles[x+1]){
            frequency++;
        }
    }
    return(frequency);
}
