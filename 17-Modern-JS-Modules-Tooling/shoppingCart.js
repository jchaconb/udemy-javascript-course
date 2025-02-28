console.log('Exporting module');

// Blocking code
// console.log('Start fetching users');
// const usersUrl = 'https://jsonplaceholder.typicode.com/users';
// await fetch(usersUrl);
// console.log('Finish fetching users');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, cart, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
