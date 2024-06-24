//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

const input = require('readline-sync');

let startingFuelLevel;
let astronanutsAboard; 
let altitude; 

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuelLevel = input.question('Report fuel level: ');
startingFuelLevel = Number(startingFuelLevel);

while (startingFuelLevel < 5000 || startingFuelLevel > 30000 && !Number.isInteger(startingFuelLevel)) {
  startingFuelLevel = input.question('Please re-enter fuel level as an integer between 5001 & 29,999: ');
  startingFuelLevel = Number(startingFuelLevel);
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  astronanutsAboard = input.question('Report number of astronanuts aboard: ');
  astronanutsAboard = Number(astronanutsAboard);

  while (astronanutsAboard > 7 && astronanutsAboard < 1) {
    astronanutsAboard = input.question('Maximum # allowed 7. Please re-enter number of astronanuts aboard: ');
    astronanutsAboard = Number(astronanutsAboard);
  }
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
altitude = 100;
while(startingFuelLevel > 0) {
  startingFuelLevel -= 100 * astronanutsAboard;
  altitude += 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${altitude} km.`);
if (altitude >= 2000) {
  console.log(`Orbit achieved!`);
} else {
  console.log(`Failed to reach orbit.`);
}