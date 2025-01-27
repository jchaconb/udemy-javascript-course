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

// // --- Introduction Arrays ---
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(years[0]); // 1991
// console.log(years[2]); // 2008
// console.log(years.length); // 4
// console.log(years[years.length -1]); // 2020

// years[2] = 2025;
// console.log(years); // [1991, 1984, 2025, 2020]
// // --- Introduction Arrays ---

// // --- Basic Array Operations ---
// const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');
// console.log(friends); // ['Michael', 'Steven', 'Peter', 'Jay']

// friends.unshift('John');
// console.log(friends); // ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// const popped = friends.pop();
// console.log(popped); // 'Jay'
// console.log(friends); // ['John', 'Michael', 'Steven', 'Peter']

// friends.shift();
// console.log(friends); // ['Michael', 'Steven', 'Peter']

// console.log(friends.indexOf('Steven')); // 1
// console.log(friends.indexOf('Bob')); // -1

// friends.push(23)
// console.log(friends.includes('Steven')); // true
// console.log(friends.includes('Bob')); // false
// console.log(friends.includes(23)); // true

// if (friends.includes('Peter')) {
//   console.log('You have a friend called Steven');
// }
// // --- Basic Array Operations ---

// // --- Introduction of Objects ---
// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ];
// console.log(jonasArray);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonas);
// // --- Introduction of Objects ---

// // --- Dot vs. Bracket Notation
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);
// console.log(jonas.firstName); // Jonas
// console.log(jonas['lastName']); // Schmedtmann

// jonas.location = "Portugal";
// jonas['twitter'] = "@jonasschmedtman";

// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)
// // --- Dot vs. Bracket Notation

// // --- Object Methods ---
// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: false,

//   // // Function Expression
//   // calcAge: function(birthYear) {
//   //   return 2037 - birthYear;
//   // }

//   // calcAge: function() {
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // }

//   calcAge: function() {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : "no"} drive's license`
//   }
// };

// console.log(jonas.calcAge()); // 46
// console.log(jonas.age); // 46
// console.log(jonas.getSummary());
// // --- Object Methods ---
