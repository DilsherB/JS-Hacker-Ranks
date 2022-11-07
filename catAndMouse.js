function catAndMouse(x, y, z) {
    let a = Math.abs(z-x);
    let b = Math.abs(z-y);
if (a<b){
    return('Cat A');
    }
else if (b<a){
    return('Cat B');
    }
 else {
    return('Mouse C');
    }
}
return catAndMouse;
