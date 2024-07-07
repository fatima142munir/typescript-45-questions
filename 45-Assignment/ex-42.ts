/**Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified. */

// create const variable to an array of magician's names
const magicians:string[] = ["Ali", "Saad", "Zavyaar", "Noman"];

// Create a function to print magicians name
function show_magicians(arr:string[]):void{
    arr.forEach(value =>{
        console.log(`Magician ${value}`)
    })
}

//  Call function
show_magicians(magicians)

// Create another function to print magicians name with 'the great' words
function make_great(arr:string[]):void{
    arr.forEach(value =>{
        console.log(`The Great Magician ${value}`)
    })
}

//  Call function
make_great(magicians)
