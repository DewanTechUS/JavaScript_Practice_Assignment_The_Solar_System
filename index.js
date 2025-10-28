//////////////////////////////
// The Solar System, Part 1 //
//////////////////////////////
// Student Name: Dewan Mahmud 2025-RTT-57
const solarSystem = [ // array of objects // planets 
// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

   // a note for me to avoid confusion remember array starts with 0 index
{ name: "Mercury", ringSystem: false, moons: [] }, //0 (i am numbering them for reference)
  { name: "Venus", ringSystem: false, moons: [] }, //1
  { name: "Earth", ringSystem: false, moons: ["The Moon"] }, //2
  { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },//3
  { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] }, //4 
  { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },//5
  { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },//6
  { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] } //7
];
// 1. Print the array of Jupiter's moons to the console (no for loop, just print the entire array).
// study: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

console.log(solarSystem[4].moons); // ["Europa", "Ganymede", "Io", "Callisto"]

// 2. Print the name of Neptune's moon "Nereid" to the console.

console.log(solarSystem[7].moons[1]); // "Nereid"
// 3. Add a new moon called "Endor" to Venus' moons array. // note/ when you add some in array you use .push method

solarSystem[1].moons.push("Endor"); // it is in the course and it will push it to the array

// 4. Add a Pluto object to the solarSystem array using .push. The object should contain Pluto's name, ringSystem boolean, and moons array (which includes "Charon").

solarSystem.push({ name: "Pluto", ringSystem: false, moons: ["Charon"] }); // pushed pluto object to the array this is how to add new object to an array this is reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
//console.log(solarSystem); // to check if pluto is added or not

// 5. Add a new key-value pair to the the Earth object: the key should be 'diameter', and the value should be Earth's diameter in miles represented as a string.

solarSystem[2].diameter = "7,918 miles"; //I googled it for get the diameter // added diameter to earth object // to print it //   
      // console.log(solarSystem[2].diameter);

// 6. Change Mercury's ringSystem boolean to true.

solarSystem[0].ringSystem = true; // it is a false or true
      //console.log(solarSystem[0].ringSystem); // to check if it is changed or not

// 7. Change Uranus' moon "Umbriel" to "Oberon"
solarSystem[6].moons[3] = "Oberon"; // changed umbriel to oberon
     //console.log(solarSystem[6].moons); // to check if it is changed or not

// 8. Iterate through the solarSystem array and print only the objects that have a ringSystem (where ringSystem: true), and ignore the others.

// reference for loop: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
// reference for if statement: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

    for (let i = 0; i < solarSystem.length; i++) // iiterating through the array
    {
      if (solarSystem[i].ringSystem) //ringSystem is true boolean if it is true it will go inside the block
      {
    console.log(solarSystem[i]);
  }

}
 // I do not know why my code is not running in the browser but it is running in the node js terminal. I tried many times but it is not working in the browser. please check it. thank you.

//////////////////////////////
// The Solar System, Part 2 //
//////////////////////////////
const system = { // object of objects // planets with their properties
  mercury: { // planet mercury
    radiusp: 'same',
    name: 'Mercury',
    density: 5.43,
    tilt: 2,
    image: 'textures/mercury.gif',
    rotationperiod: 1408,
    period: 0.24,
    radiuse: 2439,
    satellites: 0,
    au: 0.3871,
    eccentricity: 0.206,
    velocity: 47.89,
    mass: 0.06,
    inclination: 7
  },
  venus: { // planet venus
    radiusp: 'same ',
    name: 'Venus',
    density: 5.25,
    tilt: 177.3,
    image: 'textures/venus.gif',
    rotationperiod: 5832,
    period: 0.62,
    radiuse: 6052,
    satellites: 0,
    au: 0.7233,
    eccentricity: 0.007,
    velocity: 35.04,
    mass: 0.82,
    inclination: 3.4
  },
  earth: { // planet earth home where we live
    radiusp: 6357,
    name: 'Earth',
    density: 5.52,
    tilt: 23.45,
    image: 'textures/earth.gif',
    rotationperiod: 23.93,
    period: 1,
    radiuse: 6378,
    satellites: 1,
    au: 1,
    eccentricity: 0.017,
    velocity: 29.79,
    mass: 1,
    inclination: 0
  },
  mars: { // planet mars
    radiusp: 3380,
    name: 'Mars',
    density: 3.95,
    tilt: 25.19,
    image: 'textures/mars.gif',
    rotationperiod: 24.62,
    period: 1.88,
    radiuse: 3397,
    satellites: 2,
    au: 1.524,
    eccentricity: 0.093,
    velocity: 24.14,
    mass: 0.11,
    inclination: 1.85
  },
  jupiter: { // planet jupiter
    radiusp: 66854,
    name: 'Jupiter',
    density: 1.33,
    tilt: 3.12,
    image: 'textures/jupiter.gif',
    rotationperiod: 9.92,
    period: 11.86,
    radiuse: 71490,
    satellites: '69',
    au: 5.203,
    eccentricity: 0.048,
    velocity: 13.06,
    mass: 317.89,
    inclination: 1.3
  },
  saturn: { // planet saturn
    radiusp: 54360,
    name: 'Saturn',
    density: 0.69,
    tilt: 26.73,
    image: 'textures/saturn.gif',
    rotationperiod: 10.66,
    period: 29.46,
    radiuse: 60268,
    satellites: 30,
    au: 9.539,
    eccentricity: 0.056,
    velocity: 9.64,
    mass: 95.18,
    inclination: 2.49
  },
  uranus: { // planet uranus
    radiusp: 24973,
    name: 'Uranus',
    density: 1.29,
    tilt: 97.86,
    image: 'textures/uranus.gif',
    rotationperiod: 17.24,
    period: 84.01,
    radiuse: 25559,
    satellites: 24,
    au: 19.19,
    eccentricity: 0.046,
    velocity: 6.81,
    mass: 14.53,
    inclination: 0.77
  },
  neptune: { // planet neptune
    radiusp: 24340,
    name: 'Neptune',
    density: 1.64,
    tilt: 29.6,
    image: 'textures/neptune.gif',
    rotationperiod: 16.11,
    period: 164.79,
    radiuse: 25269,
    satellites: 8,
    au: 30.06,
    eccentricity: 0.01,
    velocity: 5.43,
    mass: 17.14,
    inclination: 1.77
  },
  pluto: { // dwarf planet pluto
    radiusp: 'same',
    name: 'Pluto',
    density: 2.03,
    tilt: 122.46,
    image: 'textures/pluto.gif',
    rotationperiod: 153.3,
    period: 248.54,
    radiuse: 1160,
    satellites: 1,
    au: 39.48,
    eccentricity: 0.248,
    velocity: 4.74,
    mass: 0.002,
    inclination: 17.15
  }
};


// Using the 'system' object defined above, complete the following tasks:
// 1. Console.log the mass of Mercury

console.log(system.mercury.mass); // 0.06

// 2. Console.log the eccentricity of Venus
console.log(system.venus.eccentricity); // 0.007
c
// 3. Console.log the sum of the number of satellites of Jupiter, Saturn, Uranus, and Neptune (131)

console.log(system.jupiter.satellites + system.saturn.satellites + system.uranus.satellites + system.neptune.satellites); // 131

// 4. Write a conditional that checks if Mercury's radiusp is a string (remember the typeof command). If Mercury's radiusp is a string, change the value to be the same as its radiuse value. (radiusp is radius at the poles, radiuse is radius at the equator).

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
if (typeof system.mercury.radiusp === "string") {
  system.mercury.radiusp = system.mercury.radiuse; 
}
   //console.log(system.mercury.radiusp); // to check if it is changed or not (working so far)

// 5. Console.log Mercury's radiusp (should be 2439, not 'same').
console.log(system.mercury.radiusp); // 2439 


// 6. Find the difference between Jupiter's momentum and Pluto's momentum. (To get momentum, you'll want the product of velocity and mass).

// reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
  const jupiterMomentum = system.jupiter.velocity * system.jupiter.mass; // 4138.9334
 console.log(jupiterMomentum); //checking jupiter momentum (Working so far)

 // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 const plutoMomentum = system.pluto.velocity * system.pluto.mass; // 2.60492
    console.log(plutoMomentum); //checking pluto momentum (Working so far)

    // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 const momentumDifference = jupiterMomentum - plutoMomentum; // 4136.32848
 console.log(momentumDifference); // checking momentum difference (Working so far)

 // reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction
console.log(momentumDifference); // 4136.32848 
  console.log(typeof momentumDifference); // to check the type it is number (working)

  // with more practice i can do is better. ask teacher for more projects like this. and how to submit this files.
//--------------------------------------------------------------