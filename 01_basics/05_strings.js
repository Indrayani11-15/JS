const name = "Indrayani"
const repoCount = 50

//console.log(name +  repoCount + " Value");//this is outdated format

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('indrayani-hc')

// console.log(gameName[0]);
// console.log(gameName[2]);
// console.log(gameName[5]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-12,4)
console.log(anotherString);

const newStringOne = "       hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

