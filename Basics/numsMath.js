const score=400

const balance =new Number(100)
console.log(balance);

console.log(balance.toString()); //Now it becomes String
console.log(balance.toFixed(2)); //Point precision

const otherNumber=23.8966

console.log(otherNumber.toPrecision(3));//Decimval value ko change krta hia aur Priority Decimal se phle wale ko milte hia 

const hunderds=10000000

console.log(hunderds.toLocaleString());

console.log(hunderds.toLocaleString('en-IN'));//Indian values ke hisab se Commas

/////**************---MATHS----****************************************************** */

console.log(Math);

console.log(Math.abs(-4)); //Negative value -> Positive Value
console.log(Math.round(4.6));//Round off

console.log(Math.ceil(4.2));//Highest value -> Ans=4
console.log(Math.random());//Random values from 0 to 1

const min=10
const max =20

console.log(Math.floor(Math.random()*(max - min +1))+min ); 