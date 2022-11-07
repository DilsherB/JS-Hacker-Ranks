function timeConversion(s) {
    // Write your code here
    let time=s.slice(0,10).split(':');
    // return(time);
    if((time[0]<12)&&(time[2].includes('PM'))){
        time[0]=parseInt(time[0])+12;
    }
    if((time[0]==12)&&(time[2].includes('AM'))){
        time[0]='00';
    }
    // return(time);
    return(time.join(':').slice(0,8));
}
