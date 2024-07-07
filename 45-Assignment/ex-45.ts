/**Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly. */

// Function to create a car object with required and additional properties
function createCar(manufacturer: string, model: string, additionalProperties: { [key: string]: any } = {}): { [key: string]: any } {
    return {
        manufacturer,
        model,
        ...additionalProperties
    };
}

// Call the function with required and additional properties
const car1 = createCar("Toyota", "Camry", { color: "red", year: 2020 });
const car2 = createCar("Honda", "Civic", { color: "blue", sunroof: true, engineType: "V6" });
const car3 = createCar("Ford", "Mustang", { color: "black", convertible: true, horsepower: 450 });

// Print the resulting car objects
console.log(car1);
console.log(car2);
console.log(car3);
