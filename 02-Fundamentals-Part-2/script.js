// // --- Activating Strict Mode ---
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true; // hasDriverLicense is not defined

// const private = 534; // Unexpected strict mode reserved word
// // --- Activating Strict Mode ---

// // --- Functions ---
// function logger () {
//   console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// // --- Functions ---

// // Function Declarations vs. Expressions
// // **Function Declaration**
// // - Defined with the `function` keyword and a name.
// // - Hoisted: Can be called before it is defined.
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // **Function Expression**
// // - A function assigned to a variable (can be anonymous).
// // - Not hoisted: Must be defined before use.
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

// const age2 = calcAge1(1991);
// console.log(age2);
// // Function Declarations vs. Expressions

// // --- Arrow Functions ---
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retries in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1980, "Bob"));
// // --- Arrow Functions ---

// // --- Functions Calling Other Functions ---
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// };

// console.log(fruitProcessor(2, 3));
// // --- Functions Calling Other Functions ---


