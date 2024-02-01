const coding =["js","ruby","Java","cpp","python"]

    // CALL BACK FUNCTIONs....
 
coding.forEach( function(val){
    // console.log(val);
})

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)


coding.forEach( (item,index,arr)=>{ 
    console.log(item,index,arr);
}
)

// Applying loop in array of object
const myCoding=[
    {
        languageName:"javascript",
        languageFileNAme:"Js"
    },
    {   
        languageName:"Java",
        languageFileNAme:"J"
    },
    {
        languageName:"Python",
        languageFileNAme:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})