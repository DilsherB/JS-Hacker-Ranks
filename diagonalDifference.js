function diagonalDifference(arr) {
    // Write your code here
    let n=arr.length;
    let firstDig=0;
    let secondDig=0;
    let result=0;
    for (let x=0;x<n;x++) {
        for (let y=0;y<n;y++) {
            if(arr[x]==arr[y]){
                firstDig += arr[x][y]
            }
            if(x+y==n-1){
                secondDig+=arr[x][y]
            }
        }
    }
    return Math.abs(firstDig-secondDig);
}return diagonalDifference;
