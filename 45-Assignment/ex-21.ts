/**They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items. */

// Defining types of an object by using interface 
interface studentObjectType {
    firstName: string;
    lastName: string;
    rollNum: number;
    cell: number;
    batch: string;
    shift: string;
    hobbies: string[];
    skills? : string; 
}

// Creating an onject named student
let student: studentObjectType = {
    firstName : "Fatima",
    lastName : "Munir",
    rollNum : 8765,
    cell : +927565433,
    batch : "1",
    shift : "Night",
    hobbies : ["Reading", "Coding", "Social gathrings."]

}
// for(let key in student){
//     console.log(`${key} = ${student[key]}`)
// }

console.log(student)
