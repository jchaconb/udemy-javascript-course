
//  --- Values and Variables ---
let js = 'amazing';

console.log(js)
console.log(40 + 8 + 23 - 10);
console.log(23);

// Declare a variable using camelCase for consistency
let firstName = "Matilda";
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(firstName);
//  --- Values and Variables ---

//  --- Data Types ---
/* 
  We can add
  really long
  comments
*/

let age = 23;
let secondName = 'Jonas';
let fullAge = true;
let children;

console.log(typeof fullAge); // boolean
console.log(typeof age); // number
console.log(typeof secondName); // string
console.log(typeof children); // undefined
console.log(typeof null); // object
//  --- Data Types ---

//  --- let, const and var ---
// Declare a mutable variable with 'let'
let year = 2000; 
year = 2020;

// Declare an immutable variable with 'const' (requires an initial value)
const birthYear = 1991;

// Declare a variable with 'var' (function-scoped and can be reassigned)
var job = "programmer";
job = "teacher";
//  --- let, const and var ---

// --- Basic Operators ---
// Math operators
const now = 2037;
const ageJonas = now - 1991; // 46
const ageSarah = now - 2018; // 19
console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstNameP1 = 'Jonas';
const lastNameP1 = 'Schmedtmann';
console.log(firstNameP1 + ' ' + lastNameP1)

// Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // <, >, <=, >=
console.log(ageSarah >= 18);

const isFullAge =  ageSarah >= 18;

console.log(now - 1991 > now - 2018); // (now - 1991) > (now - 2018)
// --- Basic Operators ---
