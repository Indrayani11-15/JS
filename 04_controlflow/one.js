//if statement

const isUserLoggenIn = true
const temperature = 41


// if (temperature>41) {
//     console.log("less than 50");
    
// }else{
//     console.log("temperature is greater than 50");
// }


// <,>,<=,>=,==,!=,===,

// const score = 200
// if(score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)

// const balance = 1000

//this is very bad practice to write the code , avoid this
// if (balance>500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else if (balance < 1200) {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
    
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("user logged in");
    
}