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

const getLastPost = async function () {
  const postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  const res = await fetch(postsUrl);
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost); // Promise {<pending>}

// Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);




