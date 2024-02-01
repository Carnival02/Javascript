
const myNums=[1,2,3]

// const myTotal=myNums.reduce( function(acc,cuurVal){
//    console.log(`Value of acc ${acc}and currValue ${cuurVal}`);
//     return acc + cuurVal
// },0)


const myTotal=myNums.reduce( (acc,curr)=>acc+curr,0)

console.log(myTotal);

const shoppingCart=[{
    itemName:"Js Course",
    Price:299
},
{
    itemName:"C++ Course",
    Price:5999

},
{
    itemName:"DSA Course",
    Price:999
}
]

const Total=shoppingCart.reduce((acc,item)=>acc+item.Price,0)
console.log(Total);