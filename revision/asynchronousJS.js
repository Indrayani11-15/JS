//asynchronous behavior = having pauses in code
//network calls, write/read files, time fn, userInput

console.log("chaicode");

function sayHello(){
    console.log("Hey im just here to say hello");

    
}

setTimeout(() => {
    sayHello();
}, 4000);

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}
