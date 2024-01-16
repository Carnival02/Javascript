// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1); //Both are true

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); //It is true because in js while comparison null treating as a 0 that's why 3rd is true and 1st is flase


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0); all are false

//=== strictly check also check the data type as well

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(primitve) , Heap(non- primitive)

//STACK (Always get copy)
let myname = "HArsh";

let anoter_name=myname
anoter_name="King"

console.log(anoter_name);
console.log(myname);


//Heap MEMORY (Always get reference)
let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="harsh@google.com"

console.log(userOne.email);
console.log(userTwo.email);