// Name: Shail Desai
// Course: CIT 41200 DATA - DRIVEN CLOUD APPLICATIONS
// Date: 01/23/2024
// Assignment: Create a Javascript Module


--  Distance.js Code information

// This code will define helper functions for unit conversions

// This code will convert feet to meters
const feetToMeters = feet => feet * 0.348;

// This code will convert meters to feet
const metersToFeet = meters => meters * 3.28084;

// This code will convert miles to kilometers
const milesToKm = miles => miles * 1.60934;

// This code will convert kilometers to miles
const kmToMiles = kilometers => kilometers * 0.621371;

// This code will define the main calculate function for various conversions
const calculate = (unit, value) => {
    switch (unit) {
        case 'feet':
            // This code will handle feet to meters conversion
            return feetToMeters(value);
        case 'meters':
            // This code will handle meters to feet conversion
            return metersToFeet(value);
        case 'miles':
            // This code will handle miles to kilometers conversion
            return milesToKm(value);
        case 'kilometers':
            // This code will handle kilometers to miles conversion
            return kmToMiles(value);
        default:
            // This code will return null if the unit is not recognized
            return null;
    }
};

// This code will make the calculate function available for import in other files
module.exports = { calculate };


-- index.js

// This code will import the Distance module to use its calculate function
const Distance = require('./Distance');

// This code will use the calculate function to perform and log unit conversions

// This code will convert 30 feet to meters and log the result
console.log(`30 feet is ${Distance.calculate('feet', 30)} meters.`);

// This code will convert 30 meters to feet and log the result
console.log(`30 meters is ${Distance.calculate('meters', 30)} feet.`);

// This code will convert 30 miles to kilometers and log the result
console.log(`30 miles is ${Distance.calculate('miles', 30)} kilometers.`);

// This code will convert 30 kilometers to miles and log the result
console.log(`30 kilometers is ${Distance.calculate('kilometers', 30)} miles.`);


