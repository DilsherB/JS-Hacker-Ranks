function plusMinus(arr) {
    // Write your code here
    let positive=0, negative=0, zero=0;
    let n=arr.length;
    for(let x=0; x<n; x++){
        if(arr[x]>0){
            positive++;
        }else if(arr[x]<0){
            negative++;
        }else if(arr[x]==0){
            zero++;
        }
    }
    console.log(positive/n);
    console.log(negative/n);
    console.log(zero/n);
}
