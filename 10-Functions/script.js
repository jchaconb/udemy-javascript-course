'use strict';

/*
console.log('------ Default Parameters ------');

const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123'); // {flightNum: 'LH123', numPassengers: 1, price: 199}
createBooking('LH123', 2, 800); // {flightNum: 'LH123', numPassengers: 2, price: 800}
createBooking('LH123', undefined, 1000); // {flightNum: 'LH123', numPassengers: 1, price: 1000}


console.log('------ How Passing Arguments Works: Value vs. Reference ------');

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 23456788127,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23456788127) {
    console.log('Checked in');
  } else {
    console.log('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); // LH234
console.log(jonas); // {name: 'Mr. Jonas Schmedtmann', passport: 23456788127}

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);

console.log('------ Functions Accepting Callback Functions ------');

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

console.log('***** Higher-order function *****');
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord); // Transformed string: JAVASCRIPT is the best!
transformer('JavaScript is the best!', oneWord); // javascriptisthebest!

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

console.log('------ Functions Returning Functions ------');

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas'); // Hey Jonas
greeterHey('Steven'); // Hey Steven
greet('Hello')('Albert'); // Hello Albert

console.log('**** Challenge ****');
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Jonas'); // Hi Jonas

*/

console.log('------ The call and apply Methods ------');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'H',
  booking: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Lufthansa flight H239
lufthansa.book(635, 'Jonas Smith'); // Jonas Smith booked a seat on Lufthansa flight H635
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

console.log('**** Call Method ****');
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

console.log('**** Apply Method ****');

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
