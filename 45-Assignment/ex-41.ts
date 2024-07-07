/**Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

// create const variable to an array of magician's names
const magicians:string[] = ["Ali", "Saad", "Zavyaar", "Noman"];

// Create a function to print magicians name
function show_magicians(arr:string[]){
    arr.forEach(value =>{
        console.log(`Magician ${value}`)
    })
}

//  Call function
show_magicians(magicians)