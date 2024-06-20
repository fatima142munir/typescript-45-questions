/**More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list. */

//previous list
let friends : string[] = ["urooj", "ulfat", "maryam"]
 
// adding more friends
friends.unshift("memoona")
friends.splice(1,0, "ali")
friends.push("beena")

//check list
// console.log(friends)

//type message for each of friend

for(let i = 0; i < friends.length; i++){
    console.log(`Hello ${friends[i]} you are invited to dinner on Sunday`)
}


