// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);

// console.log(shippingCost); // Uncaught ReferenceError: shippingCost is not defined

import * as ShoppingCart from './shoppingCart.js';

// console.log('Importing module');

// ShoppingCart.addToCart('bread', 5); // 5 bread added to cart
// console.log(ShoppingCart.totalPrice, ShoppingCart.tq);

import add from './shoppingCart.js';
add('milk', 1); // 1 milk added to cart
