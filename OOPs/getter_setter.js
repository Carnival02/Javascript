class user{
    constructor(email,password){
        this.email=email;
        this.password=password

    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value.toUpperCase()
    }
    get password(){
        // Used for get a value outside the class
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value.toUpperCase()
    }
}
const harsh=new user("Harsh@hu.ai","123")
console.log(harsh.password);
console.log(harsh.email);