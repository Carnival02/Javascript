const name ="Harsh"

const repoCount=50

// console.log(name+repoCount+"Value");

console.log(`Hello My name is ${name} and my repoCount is ${repoCount}`); //String interpolation


const gameName= new String('Harsh')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newgameName=gameName.substring(0,3);
console.log(newgameName);

const anotherString=gameName.slice(0,2)
console.log(anotherString);

const newStringOne="  Harsh  "
console.log(newStringOne);
console.log(newStringOne.trim()); // Remove white spaces and Terminate line

const url="https://Harsh.com/HAr%20sh"

url.replace('%20','-')
console.log(url.replace('%20','-'));


