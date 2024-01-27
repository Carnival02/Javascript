
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

// function loginUser(username) {
//     return `${username} just logged in`
    
// }

// console.log(loginUser("Harsh")); // when no value is passed than It shows undefined logged in 

function calculateCartPrice(...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,600,700));
const user={
    username: "Harsh",
    price:155
}

function handelObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
} 

// handelObject(user)
handelObject({
    username:"Same",
    price:399
})

const myNewArray=[200,100,300,600]
function returnSecondValue(getArray) {
    return getArray[1]
    
}
console.log(returnSecondValue(myNewArray));
