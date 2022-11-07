function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let result="NO";
    for(let i=0; i<10000; i++){
        if((x1+(v1*i))==(x2+(v2*i))){
            result="YES";
        }
    }
    return(result);
}
