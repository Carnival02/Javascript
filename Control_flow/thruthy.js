const userEmail=[]


if (userEmail) {
    console.log("Got user Email");
    
}else{
    console.log("Don't have user email");
}


/*  
 +++++ Falsy values +++

    false , 0,-0, BigInt 0n,"",null, undefined, NaN

******* Truthy Values **********

    "0","false" -> under string any value is truthy,-> space under string
    [],{}, function(){} -> Empty function ,

*/ 

//  Nullish Coalescing Operator (??) : Null undefined

let val1;
// val1 = 5 ?? 10

val1 = null ?? 10

console.log(val1);


// Terniary Operator 
            
// condition ? true : false

const iceteaPrice=100
iceteaPrice >= 80 ? console.log("Less than 80") : console.log("More than 80");;