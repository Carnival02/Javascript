//ARRay

const myArr=[0,1,2,3,4,5]

const myHero=["Shaktiman","One Piece"]

const myArr2 =new Array(1,2,3,4)

console.log(myArr[3]);

//  ARRAY METHODS
// myArr.push(6)
// myArr.pop()
// console.log(9);
// console.log(myArr);


// myArr.unshift(9)  //Push things on the first place
// myArr.shift() //Remove 1st element of the array
// console.log(myArr);

console.log(myArr.includes(9)); //Is value present 

console.log(myArr.indexOf(9)); //Index of array element

const newArr=myArr.join() //It is now become string from an array

console.log(myArr);
console.log(newArr);

// Slice,Splice
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);


