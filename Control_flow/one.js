//***IF & ELSE******//

// if(true /*Condition*/){

// }
// if(false){

// }else{
//     console.log("dd")
// }

// const score = 200
// if(score>100){
//     const power="Fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 1000
// if (balance>500) console.log("Test");  //Implicet scope


//++++++++++++++++  NESTING IF & ELSE +++++++++++++

// if(balance<500){
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("Less than 750");
// }else if(balance < 900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }


const userLoggedIn =true
const debitCard = 1
const loggedInfromGoogle = false
const loggedInfromEmail=true

if (userLoggedIn && debitCard ) {  //&& -> for both true AND 
    console.log("Allow to Buy Courses");
}
if (loggedInfromEmail || loggedInfromGoogle) { //  || -> OR only one true
    console.log("User logged In ");
    
}

