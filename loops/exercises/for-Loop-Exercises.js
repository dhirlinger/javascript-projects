/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

//a
for (i=0; i<=20; i++) {
  console.log(i);
}
console.log('\n============== \n');
//b
for (i=3; i<=29; i+=2) {
  console.log(i);
}
console.log('\n============== \n');
//c
for(i=12; i>=-14; i-=2){
  console.log(i);
}
console.log('\n============== \n');
//d
for (i=50; i>=20; i--) {
  if (i % 3 === 0)console.log(i);
}
/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
console.log('\nExercise #2:\n');

let str = "LaunchCode";
let arr = [1, 5, 'LC101', 'blue', 42];
//a
for(i=0; i<arr.length; i++){
  console.log(arr[i]);
}
console.log('\n============== \n');
//b
for(i=str.length-1; i>=0; i--){
  console.log(str[i]);
}



/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  console.log('\nExercise #3:\n');

  let arr2 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  let arrEvens =[];
  let arrOdds =[];

  for(i=0; i<=arr2.length; i++) {
    if(arr2[i] % 2 === 0) {
      arrEvens.push(arr2[i]);
    } else {
      arrOdds.push(arr2[i]);
    }
  }

  console.log(arrEvens + '\n'+ arrOdds);
