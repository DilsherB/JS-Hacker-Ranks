function compareTriplets(a, b) {
    let alice=0;
    let bob=0;
    let result=[];
    for(let i=0; i<a.length; i++){
        if(a[i]>b[i]){
            alice++
        }else if(a[i]<b[i]){
            bob++
        }
    }
    result.push(alice, bob);
    return result;
}
