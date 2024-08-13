//singleton 
//when objects are made from literals its not singleton, but if its made using constrcutor it is singleton
// Object.create
//Object Literals:


//declaring objects using literals(not singleton objects)
const mySym = Symbol("key1")


const JsUser = {
    name: "Indrayani",
    "full name":"Indrayani Verulkar",
    [mySym]: "mykey1",
    age: 20,
    location: "Chennai",
    email: "indrayani@google.com",
    isLoggedIn: false,
    lastLoggesinDays: ["MOnday", "tuesday"]
}

//two ways to access the keyword pair
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "indver@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "isfhs"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello Js user,${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
