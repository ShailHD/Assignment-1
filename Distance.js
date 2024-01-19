// These are the Helper functions
const feetToMeters = feet => feet * 0.348;
const metersToFeet = meters => meters * 3.28084;
const milesToKm = miles => miles * 1.60934;
const kmToMiles = kilometers => kilometers * 0.621371;

// Main calculate function
const calculate = (unit, value) => {
    switch (unit) {
        case 'feet':
            return feetToMeters(value);
        case 'meters':
            return metersToFeet(value);
        case 'miles':
            return milesToKm(value);
        case 'kilometers':
            return kmToMiles(value);
        default:
            return null;
    }
};

// Export the calculate function
module.exports = { calculate };
