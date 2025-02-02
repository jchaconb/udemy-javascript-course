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
const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

const [x, y, z] = arr;

console.log(x, y, z); // 2 3 4
console.log(arr); // [2, 3, 4]

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
