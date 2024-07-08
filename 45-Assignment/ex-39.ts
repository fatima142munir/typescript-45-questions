/**City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */

// create a function with parameters
function city_country(city:string, country:string){
    return `"${city}, ${country}"`
};

// Call your function with at least three city-country pairs
let pair1:string = city_country("karachi", "Pakistan")
let pair2:string = city_country("Bombay", "India")
let pair3:string = city_country("Multan", "Pakistan")

// print the value that’s returned.
console.log(pair1)
console.log(pair2)
console.log(pair3)