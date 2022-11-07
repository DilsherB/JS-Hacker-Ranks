function breakingRecords(scores) {
    // Write your code here
    let lBreak=0,hBreak=0,lScore=scores[0],hScore=scores[0];
    for(let i=0; i<scores.length; i++){
        if(hScore<scores[i]){
            hBreak++;
            hScore=scores[i];
        }if(lScore>scores[i]){
            lBreak++;
            lScore=scores[i];
        }
    }
    return[hBreak, lBreak];
}
