/**No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed. */

//make sure the list of users is not empty.
let users :string[] = ["Ali", "Sonia", "Dania"] 

// create program like that, If the list is empty, print the message We need to find some users!
function emptyArrayOrNot(){
    if(users.length === 0){
        console.log("We need to find some users!")
    }else{
        for(let names of users){
            console.log(`welcome ${names}.`)
        }
    }
}

emptyArrayOrNot()

//Remove all of the usernames from your array, and make sure the correct message is printed.
users.splice(0, users.length)
emptyArrayOrNot()