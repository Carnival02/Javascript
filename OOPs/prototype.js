let myName="Hitesh       "

// console.log(myName.length);
// console.log(myName.trim().length);

let myHeros=["thor","spiderman"]

let heroPower={
    thor:"Hammer",
    spiderman:"sling",
    getSpiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh=function(){
    console.log(`Hitesh is present in all object `);
}
// heroPower.hitesh()
Array.prototype.heyHitesh=function(){
    console.log(`Hitesh say Hello`);
}
myHeros.hitesh()

//--------Inheritance---------

const user={
    name:"Harsh",
    email:"harsh@ggoogle.com"
}

const teacher={
    makeVideo:true

}
const teachingSupport={
    isAvailable:false

}
const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:teachingSupport
}

teacher.__proto__=user

//--Mordern Syntax--\
// isme 1st ka property 2nd wala le leta hai..

Object.setPrototypeOf(teachingSupport,teacher)

let anotherUserName="chaiAurCode     "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUserName.trueLength()

"Hitesh".trueLength()
"iceTea".trueLength()