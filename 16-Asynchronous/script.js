'use strict';

console.log('-- Building a Simple Promise --');
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter draw is happenning 🔮');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

console.log('Promisifying setTimeout');
const wait = function(seconds) {
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000);
  })
}

wait(2).then(() => {
  console.log('I waited for 2 seconds');
  return wait(1)
}).then(() => {
  console.log('I waited for 1 second');
})

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).then(x => console.error(x));

/*
console.log('-- The event loop in practice --');
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 100000000; i++) {}
  console.log(res);
});
console.log('Test end');

// Test start
// Test end
// Resolved promise 1
// Resolved promise 2
// 0 sec timer
*/
