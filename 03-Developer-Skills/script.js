// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// --- Exercise #1 ---
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    if (temps[i] === 'error') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }

  return max - min;
};

console.log(calcTempAmplitude(temperatures));
// -------------------
