const accountId = 144553
let accountEmail = "indver@gmai.com"
var accountPass = "1323"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "hc@gmail.com"
accountPass = "34353"
accountCity = "Chennai"


console.log(accountId);

/* prefer not to use var bacuse of issue in block scope and functional scpoe*/


console.table([accountId,accountEmail,accountPass,accountCity,accountState])
