function bonAppetit(bill, k, b) {
    // Write your code here
    let sum=0;
    bill.splice(k,1);
    for(let i=0; i<bill.length; i++){
        sum+=bill[i];
    }
    if(sum/2==b){
        console.log(b)    
    } else{
        console.log(b-(sum/2))
    }

return bonAppetit;
