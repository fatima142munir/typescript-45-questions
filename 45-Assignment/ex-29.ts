/**Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas! */

// Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits: string[] = ["apple", "banana", "mango"]  

//Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// no. 1
if(favorite_fruits.includes("banana")){
    console.log("I really like bananas!")
}else{
    console.log("This fruit is not in your list..!")
}

// no. 2
if(favorite_fruits.includes("apple")){
    console.log("I really like apples!")
}else{
    console.log("This fruit is not in your list..!")
}

// no. 3
if(favorite_fruits.includes("mango")){
    console.log("I really like mangoes!")
}else{
    console.log("This fruit is not in your list..!")
}

// no. 4
if(favorite_fruits.includes("grapes")){
    console.log("I really like grapes!")
}else{
    console.log("This fruit is not in your list..!")
}

// no. 5
if(favorite_fruits.includes("melon")){
    console.log("I really like melons!")
}else{
    console.log("This fruit is not in your list..!")
}



