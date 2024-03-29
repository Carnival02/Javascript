const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);


const myNewObject=Object.create(null)

const chai={
    name:'ginger Chai',
    price:250,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    // writable:false,
    enumerable:false,

})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {

    if(typeof value !=='function'){
        console.log(`${key}:${value}`);
    } 
        
}