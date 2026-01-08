function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
       
}
let teaOrder = makeTea("lemon tea")
console.log(teaOrder);


function orderTea(teaType){
    function confirmOrder(){
        return`Order confirmed for ${teaType}`;
    }
    return confirmOrder()
}
let Chaiorder = orderTea("chai")
console.log(Chaiorder);


//Arrow functions

const calculateTotal = (price, quantity) => price*quantity
let totalCost = calculateTotal(120,5)
console.log(totalCost);


//Write a function named 'processTeaOrder' that takes another function
//, 'makeTea', as a parameter nad calls it with the argument "earl grey"
//Return the result of calling makeTea

function makeTea(typeOfTea){
    return `makeTea: ${typeOfTea}`
}
function processTeaOrder(teaFunction){
    return teaFunction("earl grey")
}
let order = processTeaOrder(makeTea)
console.log(order);


//Write a function named 'createTeaMaker' that returns another function. The returned function
//should take one parameter, 'teaType', and return a message like "Making green tea".
//Store the returned function in a variable named 'teaMaker' and call it with 'green tea'.

function createTeaMaker(){
    return function(teaType){
        return`Making ${teaType}`
    }
}