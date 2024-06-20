/**Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */ 

// List of current users
let currentUsersVar: string[] = ["Sara", "Beena", "Faris", "Alam", "Tara"] ;

// List of new users to check
let newUsersVar: string[] =  ["SARA", "Teena", "faris", "Salam", "Maria"];

// Function to check if a username is available or not
function checkUsernames(currentUsers: string[], newUsers: string[]){
    // Convert all current usernames to lowercase for case-insensitive comparison
    let lowerCaseCurrentUsers = currentUsers.map(user => user.toLowerCase());

    newUsersVar.forEach(newUser => {
        // Convert the new username to lowercase
        let lowerCaseNewUser = newUser.toLowerCase();

        // Check if the new username is in the list of current users
        if (lowerCaseCurrentUsers.includes(lowerCaseNewUser)) {
            console.log(`The username '${newUser}' is already in use. Please enter a new username.`);
        } else {
            console.log(`The username '${newUser}' is available.`);
        }
    });
}


// Check the usernames
checkUsernames(currentUsersVar, newUsersVar);
