/**Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name. */

// create const variable to an array of magician's names
const magicians:string[] = ["Ali", "Saad", "Zavyaar", "Noman"];

// Create a function to print magicians name
function show_magicians(arr:string[]):void{
    arr.forEach(value =>{
        console.log(`Magician ${value}`)
    })
}

//  Call function
console.log("old array")
show_magicians(magicians)

// Create another function to print magicians name with 'the great' words
function make_great(arr:string[]):string[]{
    return arr.map(value => `The Great Magician ${value}`)
}

// save return array in const variable newArr
const newArr: string[]= make_great(magicians);

// print new array
console.log("new array")
show_magicians(newArr)

// to check original array is unchanged or not
console.log(magicians)

