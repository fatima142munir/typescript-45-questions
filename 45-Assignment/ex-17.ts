/**Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */

let friends : string[] = ["urooj", "ulfat", "maryam","yasmeen", "maya" ]
//choose friends to cancell invite 
let confirmFriends: string[] = friends.splice(3,4)
//choose friends to confirm invite 
let cancelFriends: string[] = friends.splice(0,3)
// console.log(cancelFriends)
// console.log(confirmFriends)

//Msg them to cancell invitation
cancelFriends.forEach(canFrnds => {
    console.log(`Hey ${canFrnds} I am srinking guest list for some reason that's why you are NOT invited.`)
});

//Msg them to confirm invitation
confirmFriends.forEach(conFrnds => {
    console.log(`Hey ${conFrnds} I am srinking guest list for some reason but you are still invited.`)
});
console.log(friends)