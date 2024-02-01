
// For each loop can't store values in 3rd element

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNUms=myNums.filter( (num)=> num>5 ) // Filter ke andar ke callback ko store krr skte hai variables me
// console.log(newNUms);

//---Another Way-----

const newNum=[]
myNums.forEach((num)=>{
    if(num>4){
        newNum.push(num)
    }
})
console.log(newNum);