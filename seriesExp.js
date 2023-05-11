function power(a,n) {
    var result = 1;
    for (var i = 0; i < n; i++) {
        result = result * a;
    }
    return result;
}
function factorial(z) {
    var result = 1;
    for (var i = 1; i <= z; i++) {
        result = result * i;
    }
    return result;
}
function mySin(x, iterNum) {
    var sin = 0;
    var n = 1;
    for (var i = 0; i <= iterNum; i++) {
        sin = sin + (power(x,n)/factorial(n) - power(x,n+2)/factorial(n+2));
        n = n + 4;
    }
    // for (var i = 0; i <= iterNum; i++) {
    //     var member = power(x,n)/factorial(n) - power(x,n+2)/factorial(n+2);
    //     if (isNaN(member)) // maybe || member === 0
    //         break;
    //     sin += member;
    //     n += 4;
    // }
    console.log(sin + " = my function.");
    console.log(Math.sin(x)  + " math.sin");
}
function myCos(x, iterNum) {
    var cos = 0;
    var n = 0;
    for (var i = 0; i <= iterNum; i++) {
        cos = cos + (power(x,n)/factorial(n) - power(x,n+2)/factorial(n+2));
        n = n + 4;
    }
    console.log(cos + " = my function.");
    console.log(Math.cos(x) + " math.cos");
}

console.log(mySin(30,5));

/*
for (var i = 0; i <= iterNum; i++) {
    var member = power(x,n)/factorial(n) - power(x,n+2)/factorial(n+2);
    if (isNaN(member)) // maybe || member === 0
        break;
    sin += member;
    n += 4;
}*/