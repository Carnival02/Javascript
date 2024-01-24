
//Objects Literals

const mySym=Symbol("Key1") //symbol created

const JsUser={

    name:"HARSH",  //Name -> key and "HArSH" -> value
    [mySym]:"myKey1",
    age:18,
    location:"Noida",
    email:"Harhs@google.com",
    isLoggedIn:false,
    lastLoginDay:["Monday","Saturday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser[mySym])


// JsUser.email="NArs@gth.com"
// console.log(JsUser.email);

// Object.freeze(JsUser) //Freeze the object it does'nt able to change value


JsUser.greeting=function () {
    console.log("HEllo JS User");
    
}

JsUser.greetingtwo=function (){
    console.log(`Hello Js User,${this.name}`);    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());