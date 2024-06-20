/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/
let pName: string = "aLi"
let lowerCaseName : string = pName.toLowerCase()
let upperCaseName : string = pName.toUpperCase()
let titleCaseName1 : string = pName.charAt(0).toUpperCase()
let titleCaseName2 : string = pName.slice(1).toLowerCase()
let titleCaseName : string = titleCaseName1+titleCaseName2
console.log(lowerCaseName)
console.log(upperCaseName)
console.log(titleCaseName)