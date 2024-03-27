// All after ES6

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;

    }
    encryptPassword(){
        return`${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}

const chai=new user("Harsh","harsh@google.com","123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//----  BEHIND THE SENCE ----

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password

}
User.prototype.encryptPassword=function(){
    return`${this.password}abc`
}