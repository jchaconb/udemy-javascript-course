'use strict';

console.log('-------- Working With String --------');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('portugal')); // -1

console.log(airline.slice(4)); // 'Air Portugal'
console.log(airline.slice(4, 7)); // 'Air'

console.log(airline.slice(0, airline.indexOf(' '))); // 'TAP'
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //  'Portugal'

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky!!!');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);


// 1. 
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. 
gameEvents.delete(64);
console.log(gameEvents);

// 3. 
console.log(`An event happened, on average, every ${90 / gameEvents.size } minutes`)

// 4.
for (let [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND'
  console.log(`[${half} HALF] ${min}: ${event}`);
}
*/

/*
console.log('-------- Maps: Iteration --------');

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer:'));
const answer = 3;
console.log('----- . -----');

const correctOption = question.get('correct');
console.log(question.get(answer === correctOption));
console.log('----- . -----');

// Convert map to array;
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/

/*
console.log('-------- Maps: Fundamentals --------');
const rest = new Map();

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest); // Map(3) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open :D

const time = 10;
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // We are closed :(

console.log(rest.has('categories')); // true
rest.delete(2);

console.log(rest); // Map(7) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 'categories' => Array(4), 'open' => 11, 'close' => 23,
console.log(rest.size); // 7

/*
rest.clear();
console.log(rest); // Map(0) {size: 0}
*/

/*
rest.set([1, 2], 'Test');
console.log(rest); // Map(8) {'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 'categories' => Array(4), 'open' => 11, 'close' => 23, …
console.log(rest.get([1, 2])); // undefined

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr)); // Test
*/

// const restaurantA = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// // Destructuring Arrays
// const arrA = [2, 3, 4];
// // const a = arrA[0];
// // const b = arrA[1];
// // const c = arrA[2];

// const [x, y, z] = arrA;

// console.log(x, y, z); // 2 3 4
// console.log(arrA); // [2, 3, 4]

// const [first, second] = restaurantA.categories;
// console.log(first, second); // Italian Pizzeria

// let [main, secondary] = restaurantA.categories;
// console.log(main, secondary); // Italian Pizzeria

// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Pizzeria Italian

// const [starter, mainCourse] = restaurantA.order(2, 0);
// console.log(starter, mainCourse);

// // Nested Destructuting
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // (2) [5, 6]

// const [q, , [w, e]] = nested;
// console.log(q, w, e); // 2 5 6

// const [m, n, l] = [8, 9];
// console.log(m, n, l); // 8 9 undefined

// const [k = 1, h = 1, g = 1] = [8, 9];
// console.log(k, h, g); // 8 9 1

// // Destructuring Objects
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(starterIndex, time, mainIndex, address);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(name, openingHours, categories);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// // This does not work without the parenthesis
// ({ a, b } = obj);

// // Nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close); // 11 23

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // The Spread Operator (...)
// const arr = [6, 7, 8];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); // [1, 2, 6, 7, 8]

// const newArr = [1, 2, ...arr];
// console.log(newArr); // [1, 2, 6, 7, 8]

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 Arrays
// const allMenus = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(allMenus);

// // Iterables: Arrays, maps, strings, sets. NOT Objects
// const str = 'Alberto';
// const letters = [...str, '', 'Ch.'];
// console.log(letters);

// // console.log(`${...str} Ch.`); //  Unexpected token '...'

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };

// // Rest Pattern and Parameters

// // Spread, because on RIGHT side of =
// const array = [1, 2, ...[3, 4]];
// console.log(array); // [1, 2, 3, 4]
// // REST, because on LEFT side of =
// const [n1, n2, ...others] = [1, 2, 3, 4, 5];
// console.log(n1, n2, others); // 1 2 [3, 4, 5]

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); // Pizza Risotto ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays); // {open: 0, close: 24} {thu: {…}, fri: {…}}

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   console.log(sum);
// };

// add(2, 3); // [2, 3]
// add(5, 3, 7, 2); // [5, 3, 7, 2]
// add(8, 2, 5, 3, 2, 1, 4); // [8, 2, 5, 3, 7, 1, 4]

// const x1 = [23, 5, 7];
// add(...x1); // 35

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// // Short Circuiting (&& and ||)

// // ------ || ------
// // Use ANY data type, return ANY data type;
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// restaurant.numGuests = 23;
// let guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); // 23
// let guests2 = restaurant.numGuests || 10;
// console.log(guests2); // 23

// restaurant.numGuests = 0;
// guests2 = restaurant.numGuests || 10;
// console.log(guests2); // 10

// // ------ && ------
// console.log('------ && ------');
// console.log(0 && 'Jonas'); // 0
// console.log(7 && 'Jonas'); // Jonas (it returns the latest value)

// console.log('Hello' && 23 && null && 'Jonas'); // null

// // Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinac'); // mushrooms ['spinac']
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinac'); // mushrooms ['spinac']

// // ----- The Nullish Coalescing Operator (??) -----
// restaurant.numGuests = 0;
// const guests3 = restaurant.numGuests || 10;
// console.log(guests3); // 10

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // 0

// // ----- Logical Assignment Operators -----
// const rest1 = { name: 'Capri', numGuests: 0 };
// const rest2 = { name: 'La Pizza', owner: 'Giovanni Roiss' };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // Or assignment operator
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // console.log(rest1); // {name: 'Capri', numGuests: 10}
// // console.log(rest2); // {name: 'La Pizza', owner: 'Giovanni Roiss', numGuests: 10}

// // nullish assignment operator (null or undefined)
// // rest1.numGuests ??= 10;
// // rest2.numGuests ??= 10;

// // console.log(rest1); // {name: 'Capri', numGuests: 0}
// // console.log(rest2); // {name: 'La Pizza', owner: 'Giovanni Roiss', numGuests: 10}

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>'; // {name: 'Capri', numGuests: 0, owner: undefined}
// // rest2.owner = rest2.owner && '<ANONYMOUS>'; // {name: 'La Pizza', owner: '<ANONYMOUS>', numGuests: 10}
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1); // {name: 'Capri', numGuests: 0}
// console.log(rest2); // {name: 'La Pizza', owner: '<ANONYMOUS>'}

// ---------------- CHALLENGE ----------------

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// ///////////////////////////////////////
// // Coding Challenge #1

// /* 
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
// */

// // 1. 
// const [players1, players2] = game.players;
// console.log(players1); // ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski']
// console.log(players2); // ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk); // Neuer (REST Syntax)
// console.log(fieldPlayers); // ['Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski']

// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers); // ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Weigl', 'Witsel', 'Hazard', 'Brandt', 'Sancho', 'Gotze']

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final); // ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski', 'Thiago', 'Coutinho', 'Perisic']

// // 5.
// const {odds: { team1, x: draw, team2} } = game;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// -------- Looping arrays: The For-of loop --------
/*
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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log('----- . -----');
console.log(menu);

console.log('----- . -----');
for (const item of menu) console.log(item);
// 1: Focaccia
// 2: Bruschetta
// 3: ...

console.log('----- . -----');
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// Using Destructuring
console.log('----- . -----');
for (const [i, element] of menu.entries()) {
  console.log(`${i + 1}: ${element}`);
}

// -------- Enhanced Object Literals --------
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24,
  },
};

const newRestaurant = {
  name: 'The Steak House',
  // ES6 enhanced object literals
  openingHours,

  orderHamburger: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  // New syntax for methods / functions
  orderSalad(type) {
    return type;
  },
};

console.log('----- . -----');
console.log(newRestaurant);
console.log('----- . -----');
newRestaurant.orderHamburger('bacon', 'raw onion', 'lettuce');
console.log('----- . -----');
newRestaurant.orderSalad('caesar salad');

// -------- Optional Chaining (?.) --------
// console.log(restaurant.openingHours.mon.open); // TypeError: Cannot read properties of undefined (reading 'open')
console.log(restaurant.openingHours.mon?.open); // undefined

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log('----- . -----');
console.log(newRestaurant.orderSalad?.('caesar') ?? 'Method does not exist'); // caesar

console.log('----- . -----');
console.log(newRestaurant.order?.(0, 1) ?? 'Method does not exist'); // Method does not exist

const users = [{ name: 'Jonas', email: 'jonas@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty'); // Jonas

const companies = [];
console.log(companies[0]?.name ?? 'Company array empty'); // Company array empty

// -------- Looping objects: Object keys, values and entries --------

// Property NAMES
const properties = Object.keys(openingHours)
console.log(properties);
console.log('----- . -----');

for (const day of properties) {
  console.log(day);
}
console.log('----- . -----');

// Property VALUES
const values = Object.values(openingHours);
console.log(values);
console.log('----- . -----');

// Entire object
const entries = Object.entries(openingHours);

// [key, value]
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

console.log('----- . -----');

///////////////////////////////////////
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

/*
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}
console.log('----- . -----');

// 2.
const odds = Object.values(game.odds)
let average = 0

for (const odd of odds) {
  average += odd
}
average /= odds.length
console.log(average);

// 3.
for (const [key, value] of Object.entries(game.odds)) {
  const teamStr = key === 'x' ? 'draw' : `victory ${game[key]}`
  console.log(`Odd of ${teamStr}: ${value}`);
}

// -------- Sets --------
const ordersSet = new Set(['Pasta', 'Pizza', 'Risotto', 'Pizza', 'Pasta']);
console.log(ordersSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}

console.log(new Set ('Jonass')); // Set(5) {'J', 'o', 'n', 'a', 's'}

console.log(ordersSet.size); // 3
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
console.log(ordersSet); // Set(4) {'Pasta', 'Pizza', 'Garlic Bread'}
console.log(ordersSet[0]); // undefined

// ordersSet.clear();
// console.log(ordersSet); // Set(0) {size: 0}

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // ['Waiter', 'Chef', 'Manager']
*/

// -------- New Operations to Make Sets Useful --------
/*
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods); // Set(2) {'tomatoes', 'garlic'}
console.log([...commonFoods]); // ['tomatoes', 'garlic']

const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log(italianMexicanFusion); // Set(10) {'pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', …}

console.log([...italianFoods, ...mexicanFoods]); // (12) ['pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil', 'tortillas', 'beans', 'rice', 'tomatoes', 'avocado', 'garlic']
console.log(new Set([...italianFoods, ...mexicanFoods])); // Set(10) {'pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', …}

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods); // Set(4) {'pasta', 'gnocchi', 'olive oil', 'basil'}

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods); // Set(4) {'tortillas', 'beans', 'rice', 'avocado'}

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods); // Set(8) {'pasta', 'gnocchi', 'olive oil', 'basil', 'tortillas', …}

console.log(italianFoods.isDisjointFrom(mexicanFoods));
*/
