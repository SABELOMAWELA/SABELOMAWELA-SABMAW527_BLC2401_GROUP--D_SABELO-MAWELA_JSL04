// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
const preference = "Regular";
console.log(`The user prefers ${preference} Monster Energy.`);


// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
//  Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.


 
//   **traditional method **
// let cansLeft = 3; // Any number of cans
// if (cansLeft < 5){
//     console.log("Time to restock!");
// } else {
//  console.log("We're stocked!")
// }

let cansLeft = 3; // Any number of cans
const message = cansLeft < 5 ? "Time to restock!" : "We're stocked!";
console.log(message);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

//    **traditional method **
//let heartRate = 95; // Current heart rate in bpm
// if (heartRate < 100){
//     console.log("Boost needed!")
// }else {
//     console.log("Energy levels are high!")
// }

// #### Challenge 3: Workout Intensity answer
let heartRate = 95;
const bpm = heartRate < 100 ? "Boost needed!" : "Energy levels are high!"
console.log(bpm)


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

// **traditional method **
// let currentTemp = 4;            
// if (currentTemp <= 5) {
//     console.log("Chilled to perfection!");
// }else {
//     console.log("Needs a cooler!")
// }

// #### Challenge 4: Temperature Suitability answer
let currentTemp = 4;
const degree = currentTemp <= 5 ?  "Chilled to perfection!" : "Needs a cooler!" 
console.log (degree)


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."
// Define the current hour in 24-hour format

//  **traditional method **
// let currentHour = 22;
// if ( currentHour >=7 &&currentHour <24 ) {
//     console.log ("Unleash the beast!")
// }else{
//    console.log ("Better stick to water.") 
// }


//Challenge 5: Late Night Coding Session answer 
let currentHour = 22;
const inbetween = currentHour >= 7 && currentHour < 24 ? "Unleash the beast!" : "Better stick to water.";
console.log(inbetween);

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."






// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.