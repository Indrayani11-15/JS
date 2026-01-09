let car = {
    make: "Toyota",
    model:"Camry",
    year:2020,

    start: function(){
        return`${this.make} car got started in ${this.year}`
    }
}
//console.log(car.start());


function Person(name,age){
    this.name = name
    this.age = age
}

let John = new Person("John", 20)
//console.log(John.name);

//Prototypal CHain

function Animal(type){
    this.type = type
}

Animal.prototype.speak = function(){
    return `${this.type} makes a sound`
}

Array.prototype.hitesh = function(){
    return`Custom method ${this}`
}

let myArray = [1,2,3]
console.log(myArray.hitesh());
let myNewArray = [1,2,3,4,5,6]
//console.log(myNewArray.hitesh());


class Vehicle{
    constructor(make,model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make} `
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make}: This is an inheritance example`
    }
}

let myCar = new Car("Toyota","Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Toyota","Corolla")
console.log(vehOne.make);


//Encapsulation : restricting direct access to data object

class BankAccount{
    #balance = 0;
    
    deposit(amount){
        this.#balance += amount
        return this.#balance
    }

    getBalance(){
        return `$${this.#balance}`
    }
}

let account = new BankAccount()
console.log(account.deposit(120));
console.log(account.getBalance());


//Abstraction : hiding irrelevant info and only displaying whats imp

class CoffeeMachine{

    start(){
    //call DB
    //filter value
    return `Starting the machine...`;
    }
    brewCoffee(){
        //complex calculation
        return `Brewing cofee`;
    }

    pressStartButton(){
       let msgOne =  this.start()
       let msgTwo =  this.brewCoffee()
       return`${msgOne} and ${msgTwo}`
    }
}

let myMachine = new CoffeeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());


//Polymorphism: more than one form

class Bird{
    fly(){
        return`Flying...`
    }
}

class Penguin extends Bird{
    fly(){
        return`Penguins cant fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());



//Static method

class Calculator{
    static(a,b){
        return a + b
    }
}

let minicalc = new Calculator()
console.log(minicalc.static(3,4));


//Getters and Setters : all about having more control


class Employee{
    constructor(name,salary){
        this.name = name
        this._salary = salary
    }

    get salary(){
        return `you are not allowed to see salary`

    }

    set salary(value){
        if(value<0){
            console.error("Invalid Salary")

        }else{
            this._salary = value
        }
    }
}

let emp = new Employee("Alice", 50000)
console.log(emp.salary);
