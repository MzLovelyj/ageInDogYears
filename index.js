const myAge = 29;
// created a variable for my age.

let earlyYears = 2;
//This variable explains: The first two human years of a dog's life count as 10.5 dog years each.

earlyYears *= 10.5;
//Used the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears 2.

laterYears = myAge - 2;
//Since we already accounted for the first two years, taking myAge variable, and subtract 2 from it.

laterYears *= 4;
//Multiplied the laterYears variable by 4 to calculate the number of dog years accounted for by your laterYears. Use the multiplication assignment operator to multiply and assign in one step.

myAgeInDogYears = earlyYears + laterYears;
//Adding the earlyYears + laterYears and Storing to what myAgeInDogYears is.

myName = 'Jessica';
//storing my name as a string to the variable myName.

myName.toLowerCase();
//Using the toLowerCase() string method to make all letters in your myName lowercase.

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
//Using console.log to display myName and myAgeInDogYears variables in dog years. Used string interpolation to display the values.