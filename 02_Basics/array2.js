const marvel_heros=["Thor","Iron Man","Spiderman"]
const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //Isme array me array aa jata hai

// const all_hero=marvel_heros.concat(dc_heros) //It merge two array 
// console.log(all_hero); 

const new_hero=[...marvel_heros,...dc_heros]; //.. is a spread opertaor 
console.log(new_hero);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5,]]]

const real_another_array = another_array.flat(Infinity) //Sperd the value of the array 
console.log(real_another_array);



console.log(Array.isArray("Harsh"))
console.log(Array.from("Harsh")) //It convert this string into an array 

console.log(Array.from({name:"Harsh"})); //Intersting It gives empty array because it don't get any key 

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));