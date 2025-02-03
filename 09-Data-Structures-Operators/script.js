'use strict';

const restaurantA = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring Arrays
const arrA = [2, 3, 4];
// const a = arrA[0];
// const b = arrA[1];
// const c = arrA[2];

const [x, y, z] = arrA;

console.log(x, y, z); // 2 3 4
console.log(arrA); // [2, 3, 4]

const [first, second] = restaurantA.categories;
console.log(first, second); // Italian Pizzeria

let [main, secondary] = restaurantA.categories;
console.log(main, secondary); // Italian Pizzeria

[main, secondary] = [secondary, main];
console.log(main, secondary); // Pizzeria Italian

const [starter, mainCourse] = restaurantA.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuting
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j); // (2) [5, 6]

const [q, , [w, e]] = nested;
console.log(q, w, e); // 2 5 6

const [m, n, l] = [8, 9];
console.log(m, n, l); // 8 9 undefined

const [k = 1, h = 1, g = 1] = [8, 9];
console.log(k, h, g); // 8 9 1

// Destructuring Objects
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(starterIndex, time, mainIndex, address);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(name, openingHours, categories);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// This does not work without the parenthesis
({ a, b } = obj);

// Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close); // 11 23

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// The Spread Operator (...)
const arr = [6, 7, 8];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // [1, 2, 6, 7, 8]

const newArr = [1, 2, ...arr];
console.log(newArr); // [1, 2, 6, 7, 8]

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 Arrays
const allMenus = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(allMenus);

// Iterables: Arrays, maps, strings, sets. NOT Objects
const str = 'Alberto';
const letters = [...str, '', 'Ch.'];
console.log(letters);

// console.log(`${...str} Ch.`); //  Unexpected token '...'

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

// Rest Pattern and Parameters

// Spread, because on RIGHT side of =
const array = [1, 2, ...[3, 4]];
console.log(array); // [1, 2, 3, 4]
// REST, because on LEFT side of =
const [n1, n2, ...others] = [1, 2, 3, 4, 5];
console.log(n1, n2, others); // 1 2 [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays); // {open: 0, close: 24} {thu: {…}, fri: {…}}

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

add(2, 3); // [2, 3]
add(5, 3, 7, 2); // [5, 3, 7, 2]
add(8, 2, 5, 3, 2, 1, 4); // [8, 2, 5, 3, 7, 1, 4]

const x1 = [23, 5, 7];
add(...x1); // 35

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// Short Circuiting (&& and ||)

// ------ || ------
// Use ANY data type, return ANY data type;
console.log(3 || 'Jonas'); // 3
console.log('' || 'Jonas'); // Jonas
console.log(true || 0); // true
console.log(undefined || null); // null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

restaurant.numGuests = 23;
let guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // 23
let guests2 = restaurant.numGuests || 10;
console.log(guests2); // 23

restaurant.numGuests = 0;
guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

// ------ && ------
console.log('------ && ------');
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas (it returns the latest value)

console.log('Hello' && 23 && null && 'Jonas'); // null

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinac'); // mushrooms ['spinac']
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinac'); // mushrooms ['spinac']