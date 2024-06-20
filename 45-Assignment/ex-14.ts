/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/
export{friends}
let friends : string[] = ["urooj", "ulfat", "maryam"]
let message : string = "you are invited to dinner on sunday."

for(let i = 0; i < friends.length; i++){
    console.log(friends[i], message)
}