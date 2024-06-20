let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split()); //it seems nothing changed.
console.log(str.split('e')); //'e' was removed and also servered as the point at which a new array item was created. 
console.log(str.split(' ')); // single white spaces were removed and were the points at which new array items were created.
console.log(str.split('')); // each character (including white space) became a new array item. 
console.log('============='); // the purpose of the parameter seems to the point of which an array itme is created and that point is also emitted. 

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

console.log(arr.join()); //a string is created with a coma between each array item. 
console.log(arr.join('a'));// a string is created with 'a' between each array item. 
console.log(arr.join(' ')); // a string is created with ' ' between each array item.
console.log(arr.join('')); // a string is created with nothing between each array item.
console.log('============='); //it seems the purpoes of the parameter is to choose a character (or not) to be placed between each character that was formally an array item. 

//3) Do split or join change the original string/array? No. 

console.log(str);
console.log(arr);
console.log('=============');

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let alphabetizedString = cargoHold.split(',').sort();
console.log(alphabetizedString);