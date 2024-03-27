class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username:${this.username}`);
    }

    static createId(){
        return `123`
    }
}

// const harsh=new User("Harsh")
// console.log(harsh.createId()); 

class teacher extends User {
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone=new teacher("iphone","iphone@i.com")
console.log(iphone.logMe);