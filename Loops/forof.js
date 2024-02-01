// For of loop

// ["","",""]


const arr=[1,2,4,5,6]
for (const num of arr) {
    console.log(num);   
}

const greeting ="Hello World"
for (const greet of greeting) {
    console.log(greet);
    
}

// MAP

const map=new Map()
map.set('IN',"India")

map.set('USA',"United States ")

map.set('FR',"France")

// console.log(map);


for (const [key,value] of map) {
    console.log(key,':-',value); // this gives array if we don't do [key,value ]
}