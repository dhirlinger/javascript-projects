const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

//let firstHalf = str.slice(0,3);
//let secondHalf = str.slice(3);
//let newStr = secondHalf.concat(firstHalf);

let newStr = str.slice(3).concat(str.slice(0,3));
console.log(newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


let numLetters = input.question('How many numbers would you like to relocate? ');



//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (numLetters > str.length) {
    numLetters = 3;
    console.log(`**The number you enter is too large and has been changed to 3**`)
} 
newStr = str.slice(numLetters).concat(str.slice(0,numLetters));
console.log(`Original Word: ${str}`);
console.log(`In Pig-Latin: ${newStr}`);
