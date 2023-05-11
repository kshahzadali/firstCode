console.log("this is my first assignment ");
/*
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
*/
let itP=0;
let itNP=0;
let resultP=[];
let resultNP=[];
for(let i=2;i<100;i++){
    let isprime=-1;
   
    for(let j=2;j<=i/2;j++){
        if(i%j===0){
            isprime=0;
            resultNP[itNP++]=i;
            break;
        }
    }
    if(isprime!==0)
    {
       // console.log(i,"is not a prime number")
       resultP[itP++]=i;
    }
}
console.log("primer : "+resultP);
console.log("Not primer : "+resultNP);
