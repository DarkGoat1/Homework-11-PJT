// Create a variable called "name" that holds a string
var name = "Homer Simpson";

// Create a variable called "country" that holds a string
var country = "United States";

// Create a variable called "age" that holds an integer
var age = 25;

// Create a variable called "hourlyWage" that holds an integer
var hourlyWage = 15;

//Create a variable that holds a number as a string
var weeklyhours = "40";

// Calculate the "dailyWage" for the user
var dailyWages = hourlyWage * parseInt(weeklyhours);

// Create a variable called 'weeklyWage' that converts a string into an integer


// Create a variable called "satisfied" that holds a boolean
var satisfied = true;

// Print out "Hello <name>!"
console.log(`Hello ${name}`);

// Print out what country the user entered
console.log(`you are from ${country}`);

// Print out the user's age
console.log(`you are ${age} years old`);

// Print out the daily wage that was calculated
console.log(`you make ${dailyWages} dollars a day`);

// Print out the weekly wage that was calculated
console.log(dailyWages);
console.log("Wooo")

// Using an IF statement to print out whether the users were satisfied
if (satisfied === true){
    console.log('You are satisified with your wages')
}

else if (satisified === false){
    console.log('memes')
}