function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let applesCount=0, orangesCount=0;
    for(let x=0; x<apples.length; x++){
        apples[x]=apples[x]+a;
        if((apples[x]>=s)&&(apples[x]<=t)){
            applesCount++
        }
    }
    for(let x=0; x<oranges.length; x++){
        oranges[x]=oranges[x]+b;
        if((oranges[x]>=s)&&(oranges[x]<=t)){
            orangesCount++;
        }
    }
    console.log(applesCount);
    console.log(orangesCount);
}
