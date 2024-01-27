
const user={
    username:"Harsh",
    price :566,
    welcomeMessage:function(){
        console.log(`${this.username } ,Welcome to Website`);
        console.log(this); //This will print the current context of the object 
    }


}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this); //Yha prr current conext empty hai to {} yeh ayega 

// function chai(){
//     // let username="Harsh" 
//     // console.log(this.username);  --> Only acces in Objects

//     //Function me this keyword me username print nhi hoga onlyu on Objects 
// }
// chai()

// const chai=function(){
//     let username="HArsh"
//     console.log(this.username);
// }
// chai()

const chai=()=>{
    let username="HArsh"
    console.log(this);
}



// chai()

()=> {} //Arrow function

//BAsic Arrow Function
// const addTwo=(num1,num2)=>{
//     return num1+num2 -> explicite return because we useing return keyword
// }

// const addTwo =(num1,num2) => num1+num2
const addTwo=(num1,num2) => (num1+num2) //Implicet return 

console.log(addTwo(3,5));
