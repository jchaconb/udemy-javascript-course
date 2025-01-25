
// //  --- Values and Variables ---
// let js = 'amazing';

// console.log(js)
// console.log(40 + 8 + 23 - 10);
// console.log(23);

// // Declare a variable using camelCase for consistency
// let firstName = "Matilda";
// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// console.log(firstName);
// //  --- Values and Variables ---

// //  --- Data Types ---
// /*
//   We can add
//   really long
//   comments
// */

// let age = 23;
// let secondName = 'Jonas';
// let fullAge = true;
// let children;

// console.log(typeof fullAge); // boolean
// console.log(typeof age); // number
// console.log(typeof secondName); // string
// console.log(typeof children); // undefined
// console.log(typeof null); // object
// //  --- Data Types ---

// //  --- let, const and var ---
// // Declare a mutable variable with 'let'
// let year = 2000; 
// year = 2020;

// // Declare an immutable variable with 'const' (requires an initial value)
// const birthYear = 1991;

// // Declare a variable with 'var' (function-scoped and can be reassigned)
// var job = "programmer";
// job = "teacher";
// //  --- let, const and var ---

// // --- Basic Operators ---
// // Math operators
// const now = 2037;
// const ageJonas = now - 1991; // 46
// const ageSarah = now - 2018; // 19
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstNameP1 = 'Jonas';
// const lastNameP1 = 'Schmedtmann';
// console.log(firstNameP1 + ' ' + lastNameP1)

// // Assigment operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah); // <, >, <=, >=
// console.log(ageSarah >= 18);

// const isFullAge =  ageSarah >= 18;

// console.log(now - 1991 > now - 2018); // (now - 1991) > (now - 2018)
// // --- Basic Operators ---

// // --- Operator Precedence ---
// console.log(2037 - 1991 > 2037 - 2018);
// console.log(25 - 10 - 5);

// let w, z;
// w = z = 25 - 10 - 5; // w = z = 10, w = 10
// console.log(w, z);

// let averageAge = ageJonas + ageSarah / 2;
// console.log(ageJonas, ageSarah, averageAge); // 55.5

// averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge); // 32.5
// // --- Operator Precedence ---

// // --- Strings and Template Literals ---
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year =  2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`String with \n\
// multiple \n\
// lines`);

// console.log(`String
// multiple
// lines
// `)
// // --- Strings and Template Literals ---

// // --- Taking Decisions: if / else Statements ---
// const age = 15;
// const isOldEnought = age >= 18;

// if(isOldEnought) {
//   console.log('Sarah can start driving license 🚘');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years 😎`)
// }

// const birthYear = 2012;
// let century;

// if(birthYear <= 2000) {
//   century = 20
// } else {
//   century = 21
// }

// console.log(century);
// // --- Taking Decisions: if / else Statements ---

// // --- Type Conversion and Coercion ---
// // type Conversion 
// let inputYear = '1991';
// console.log(inputYear + 18); // 199118

// inputYear = Number('1991');
// console.log(inputYear + 18); // 2009

// console.log(Number('jonas')); // NaN 
// console.log(String(90 / 9)) // '10'

// // coercion
// console.log('I am ' + 23 + ' years old')
// console.log('I am ' + String(23) + ' years old')
// console.log('23' - '10' - 3) // 10
// console.log('23' + '10' + 3) // 23103
// console.log('23' * '2') // 46
// // --- Type Conversion and Coercion ---

// // --- Truthy and Falsy Values ---
// // 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean('Jonas')); // true
// console.log(Boolean({})); // true
// console.log(Boolean('')); // false

// const money = 0;

// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job");
// }

// let height;

// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }
// // --- Truthy and Falsy Values ---

// // --- Equality Operators: == VS ====
// const age = '18';

// if (age === 18) console.log('You just became an adult :D (strict)') // false
// if (age == 18) console.log('You just became an adult :D (loose)') // true

// const favourite = prompt("What's your favorite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite !== 23) console.log('Why not 23?');
// // --- Equality Operators: == VS ====

// // --- Boolean Logic ---
// const hasDriversLicense = true; // A
// const hasGoodVision = false; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);
// // --- Boolean Logic ---
