/**Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program. */

let mountains: string[] = [
    "K2",
    "Nanga Parbat",
    "Gasherbrum I",
    "Broad Peak",
    "Gasherbrum II",
    "Masherbrum",
    "Rakaposhi",
    "Tirich Mir",
    "Diran"  
];

// Checking mountain name in index 9
console.log(mountains[9]) 

// Adding a mountain name in last of array
mountains.push("Batura Sar")

// is mountain name available in index 9
console.log(mountains[9]) 

// Checking mountain names 
console.log(mountains)