// var c=300

let a=300

if (true) {
    let a=10
    const b=20
    console.log("INNER",a);
    
}

//console.log(a); this is not in the scope show error
//console.log(b);
// console.log(c);
// console.log(a);

function one(){

    const username ="HArsh"
    function two() {
        const website="Youtube"
       // console.log(username);
        
    }
    // console.log(website); this will Not execute 

     two() //this will execute 

}
// one()

if (true) {
    const username="HArhs"
    if(username==="HArhs"){
        const website=" Youtube"
        // console.log(username+website);// This will run and shows HArhs Youtube
    } 
    // console.log(website); this will show error because Website ka scope upar khtm ho gya hia 
}
// console.log(username); This will show error because scope is ended upar hi 

//+++++++++++++++++++++  INTERSTING *****************************
addOne(5) //No problem while execution

function addOne(num){
    return num+1
}
 addTwo(5) //Show error because we are holding value of function in add two
const addTwo =function(num){
    return num + 2
}
