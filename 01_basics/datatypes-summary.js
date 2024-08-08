 //data types : 
 //1)Primitive: 7 types 
 // string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId );

const bigNumber = 34536536n
console.log(bigNumber);

//2)Non Primitive: (reference type data types)
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Jahan",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof anotherId);

//https://262.ecma-international.org/5.1/#sec-11.4.3



// *************************************************************

//Stack memory(Primitive), Heap memory(Non-Primiitive)

let myYoutubename = "Indrayanidotcom"

let anothername = myYoutubename
anothername = "Uandme"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "indra@google.com"

console.log(userOne.email);
console.log(userTwo.email);



