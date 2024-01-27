//Imediately Invoked Function Expressions (IIFE)
//Function ko global scope ke pollution se bachne ke liye lagta hai ..
// Imediately exectued funtion ko hi IIFE bolte hai 

(function chai(){
    //Named IIFE
    console.log(`DB connected`);
})();

// If ; is missing than It will show error
// ()()--> First is function call and 2nd is excution call (())()()


(()=>{
    //Named IIFE
    console.log(`DB CONNECTED TWO`);
})();

((name)=>{
    //Passed with name
    console.log(`DB CONNECTED TWO ${name}`);
})('Harsh')