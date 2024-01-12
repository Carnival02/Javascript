const accountId=144553
let accountEmail="Carnivalking02@gmail.com"

var accountPassword="12345"
accountCity="jaipur"

let accountState;
//if you don't define value at a time of declaration of variable than it will print undefined

//accountId=2 //Not allowed of changing Constant variavle

accountEmail="hc@hc.com"
accountPassword="252455500"
accountCity="Bengurluru"
console.log(accountId);

/*
    prefer not to use Var
    because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState])