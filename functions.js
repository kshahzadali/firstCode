function factorial(i){
    //5*4*3*2*1
    let fact=1;
    for(j=i;j>0;j--){
        fact=fact*j;
    }
    return fact;
}

let z=6;
console.log(factorial(z));