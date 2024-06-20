/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces. */

//to new line use \n and to tab space use \ts
let myName :string = "\n \t Fatima "
console.log(myName) 


// to remove spaces and blank lines
let trimName : string = myName.trim()
console.log(trimName) 
