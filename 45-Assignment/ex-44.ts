/**Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time. */

function sandwitch(...itemSandwitch: string[]):void{
    console.log("Following items must have in Sandwitch");
    itemSandwitch.forEach(item =>{
        console.log(`- ${item}`)
    })
}

sandwitch("mayo", "Chicken")
sandwitch("Cucumber","mayo", "Chicken", "onion", "Capsicum")
sandwitch("Cucumber","mayo", "onion", "Capsicum")


