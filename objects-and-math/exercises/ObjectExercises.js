let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let daBeagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5, 
   astronautID: 4,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let whatsaTardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1, 
   astronautID: 5,
   move: function() {
      return Math.round(Math.random()*10);
   }
};

let crew = [superChimpOne, salamander, superChimpTwo, daBeagle, whatsaTardigrade];

function crewReports(animal) {
   return `'${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.'`
}

function fitnessTest(animalArray) {
   
   let resultsArray = [];

   for(i =0; i < animalArray.length; i++) {
      let animal = animalArray[i];
      let turns = 0;
      let steps = 0; 
      let results; 
      
      while(steps < 21) {
         steps += animal.move();
         turns++;
      }
      results = `${animal.name} took ${turns} turns to take 20 steps.`;
      resultsArray.push(results);
      
   }

   return resultsArray;

}

let results = fitnessTest(crew);

for (i = 0; i < crew.length; i++) {
   
   console.log(results[i]);
}


// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
