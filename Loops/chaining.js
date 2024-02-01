const myNum=[1,2,3,5,4,5,6,7,8,9,10]

// const newNum=myNum.map((num)=> num+10)


//---------Chaning -> using multiple things at a single time...
const newNum=myNum.map((num)=>num*10).map((num)=>num+4).filter((num)=>num>= 40 )

console.log(newNum);