
function sayMyName() {
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
}

// sayMyName()  //Without () it is It's reference and with () It that's execution

// function addTwoNumber(number1,number2) {
//     //number1,number2 are parameter

//     console.log(number1+number2);
    
// }
function addTwoNumber(number1,number2) {
    // <-----Method 1 ---->
    // let result =number1+number2
    // return result
    
//     return number1+number2
// 
}


// const result=addTwoNumber(5,4)
// console.log("Result: ",result);

function loginUser(username) {
    return `${username} just logged in`
    
}

console.log(loginUser("Harsh")); // when no value is passed than It shows undefined logged in 
