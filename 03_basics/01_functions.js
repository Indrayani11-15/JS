

function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }

function addTwoNumbers(num1, num2){
    
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username){
    // if(username === undefined){
    if(!username){
        console.log("Please enter a username");
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("hitesh));
// console.log(loginUserMessage());


//rest operator
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500));

const user ={
    username:"hitesh",
    prices: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}
// handleObject(user)
handleObject({
    username:"hitesh",
    price:345
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 1000]));
