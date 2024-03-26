//Object Literal

// const user={
//     username:"Harsh",
//     loginCount : 8,
//     signedIn:true,

//     getUserDeatils:function(){
       // console.log("Got user Details");
    //    console.log(`username:${this.username}`);
        //console.log(this);
// }

// }

// console.log(user.username);
// //console.log(user.getUserDeatils());
// console.log(this);

//-----------Constructor Function--------------

// const promiseOne=new Promise()  
// const date=new date()

function user(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn

    return this
}

const userOne=new user("Harsh",12,true)
console.log(userOne);