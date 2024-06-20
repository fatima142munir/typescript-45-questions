// create an array of strings named Mountains containing the names of 10 famous mountains in Pakistan.
let mountains: string[] = [
    "K2",
    "Nanga Parbat",
    "Gasherbrum I",
    "Broad Peak",
    "Gasherbrum II",
    "Masherbrum",
    "Rakaposhi",
    "Tirich Mir",
    "Diran",
    "Batura Sar"
];

// Function to print out the list of mountains
function printMountains(): any {
    console.log("Mountains I'd like to visit:");
    mountains.forEach((element, index) => {
        console.log(`${index + 1}. ${element}`);
    });
}

// Call the function to print the list
printMountains();
