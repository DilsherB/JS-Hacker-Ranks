function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a,b)=>a-b);
    let fSum=0, lSum=0;
    for(let x=0; x<arr.length-1; x++){
        fSum+=arr[x]
    }
    for(let x=1; x<arr.length; x++){
        lSum+=arr[x]
    }
    console.log(fSum+" "+lSum);
    
}
