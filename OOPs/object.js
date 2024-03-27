function mutlipleBy5(num){
    return num*5
}

mutlipleBy5.power=2

console.log(mutlipleBy5(5));
console.log(mutlipleBy5.power);
console.log(mutlipleBy5.prototype);

function createUser(username,score){
    this.username=username
    this.score=score

}
createUser.prototype.increment=function(){
    this.score++
}
createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}

const chai= new createUser("Chai",25)
const tea = createUser("Tea",250)

chai.printMe() 