//Declare an array named "teaFlavors" that contains the strings "greeen tea", 
//, black tea, and oolong tea. Access the first element of the array
//and store it in a variable named "firstTea".

let teaFlavors = ['Green tea', 'Black tea', 'Oolong tea']
let firstTea = teaFlavors[0]
console.log(firstTea);


/* Declare an array named "citites" containing `"London",
"Tokyo", 'paris', and "new York'. Access the third element in the array and store it in a variable named 
'favoriteCity'*/

let cities = ["London", "Tokyo", "Paris", "New York"]

let favoriteCity = cities[2]
console.log(favoriteCity);

//you have an array named 'teaTypes' containing `"herbal tea", "white tea"
// and "masala chai". Change the second elelment of the array to "jasmine tea"

let teaTypes = ["Herbal tea", "white Tea", "masala chai"]
teaTypes[1] = "Jasmine tea"
console.log(teaTypes);

/*Declare an array named `citiesVisited` containing
`"Mumbai"` and Sydney. Add "Berlin" to the array using
the `push` method. */

let citiesVisited = ["Mumbai", "Sydney"]
citiesVisited.push("Berlin")
console.log(citiesVisited);


/*You have an array named `teaOrders` with `chai`, `iced tea`
, `matcha`,and `earl grey`.
remove the last element using the pop method and store it
in a variable named `lastOrder`*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
let lastOrder = teaOrders.pop()
console.log(lastOrder);

//You have an array named "PopularTeas" containing "green tea",
//"oolong tea", and "chai". Create a soft copy of this array named
//'softCopyTeas'

let PopularTeas = ["Green tea", "oolong tea", "chai"]
let softCopyTeas = PopularTeas
console.log(softCopyTeas);

//You have an array named "topCitites" containing "Berlin"
//, "Singapore", and "New York"
//Create a hard copy of this array anmed"hardCopyCities"

let topCitites = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...topCitites];
topCitites.pop()
console.log(hardCopyCities);


//Merging two arrays

let europeanCities = ["Paris", "Rome"]
let asianCities = ["Tokyo", "Bangkok"]
let worldCities = europeanCities.concat(asianCities)
console.log(worldCities);


