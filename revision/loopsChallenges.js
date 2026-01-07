//1. Write a for loop that loops through the array ["green tea", 
//"black tea", "Chai", "oolong tea"] and stops the loop when it finds "chai".
// Store all teas before "chai" in a new array named "selectedTeas"

let arr1 = ["green tea", "black tea", "chai", "oolong tea"]
let selectedTeas = []
for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] == "chai"){
        break;
    }
    selectedTeas.push(arr1[i])
}

console.log(selectedTeas);


//2.Write a for loop that loops through the array ["London", "New york", "Paris", "Berlin"]
//and skips "Paris". Store the other cities in a new array named "visitedCities".

let cities = ["London", "New York", "Paris", "Berlin"]
let visitedCities = []
for (let j = 0; j < cities.length; j++) {
    if(cities[j] == "Paris"){
        continue;
    }
    visitedCities.push(cities[j]);
    
}
console.log(visitedCities);


//3.Use a 'for-of' loop to iterate through the array '[1,2,3,4,5]' and then stop when the number
//'4' is found. Store the numbers before '4' in an array named 'smallNumbers'.

let numbers = [1,2,3,4,5]
let smallNumbers = []

for (const num of numbers) {
    if(num === 4){
        break;
    }
    smallNumbers.push(num)
}
console.log(smallNumbers);


//4. Use a for-of loop to iterate through the array ["chai", "green tea", "herbal tea",
//"black tea"] and skip "herbal tea". sStore the other teas in an array named "preferredTeas"

let teaTypes = ["chai", "Green tea", "herbal tea", "black tea"]
let preferredTeas = []
for (const element of teaTypes) {
    if(element === "herbal tea"){
        continue;
    }
    preferredTeas.push(element)
}
console.log(preferredTeas);

//5. Use a for-in loop to loop through an object containing city populations. Stop the loop
// when the population of "Berlin" is found and store all previous cities populations in a
//new object named 'cityPopulation'.
let cityPopulation = {}
let citiesPopulation = {
    "London": 890000,
    "New York": 8400000,
    "Paris":2200000,
    "Berlin":3500000
};
for (const city in citiesPopulation) {
    if(city === "Berlin"){
        break;
    }
    cityPopulation[city] = citiesPopulation[city];
}
console.log(cityPopulation);

//6. Write a forEach loop that iterates through the array ["earl grey", "green tea", "chai",
//"oolong tea"]. Stop the loop when "chai" is found and store all the previous tea types in an array 
// named 'availableTeas'.

let teas = ["earl grey", "green tea", "chai", "oolong tea"]
let availableTeas = []
teas.forEach((tea) => {
    if (tea ==="chai"){
        return;
    }
    availableTeas.push(tea)
   

});
console.log(availableTeas);


//Use a for-of loop to iterate through an array ["chai", "green tea", "black tea", "jasmine tea"
//,"herbal tea"] and stop when the length of the current tea name is greater than 10. Store the
//teas iterated over in an array named 'shortTeas'.

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
let shortTeas = []

for (const tea of myTeas) {
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea)
}
console.log(shortTeas);
