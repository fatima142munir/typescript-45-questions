/* Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.” */

let cars : string[] = ["Fortuner", "Civic", "Alto"]
for(let i = 0; i < cars.length; i++){
    console.log(`I would like to own a ${cars[i]} car.`);
}