// Import the Distance module
const Distance = require('./Distance');

// Using the calculate function
console.log(`30 feet is ${Distance.calculate('feet', 30)} meters.`);
console.log(`30 meters is ${Distance.calculate('meters', 30)} feet.`);
console.log(`30 miles is ${Distance.calculate('miles', 30)} kilometers.`);
console.log(`30 kilometers is ${Distance.calculate('kilometers', 30)} miles.`);
