//Immediately Invoked Function Expressions (IIFE)

(function chai (){
    //named IIFE
    console.log(`DB connected`);
    
})();

//many times there is problem due to global scope polution, so to 
//eliminate or reduce that problem we use IIFE

( (name) => {//un-named IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');