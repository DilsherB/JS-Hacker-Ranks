function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let count=0;
    for(let x=0; x<n; x++){
        for(let y=x+1; y<n; y++){
            if(((ar[x]+ar[y])%k)==0){
                count++
            }
        }
    }return count;
}
