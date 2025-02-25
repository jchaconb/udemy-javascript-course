'use strict';

/*
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common || data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0]?.name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0]?.name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
      );
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Problem with geocoding ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(
        `https://restcountries.com/v2/name/${data.countryName.toLowerCase()}`
      );
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Could not find country');
      }
      return response.json();
    })
    .then(data => {
      console.log(data[0]);
      renderCountry(data[0]);
    })
    .catch(error => console.log(error));
};

// btn.addEventListener('click', whereAmI());
*/

// Coding Challenge #2
/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
const imgContainer = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.log(err));


console.log('-- Consuming Promises with Async/Await --');

const getPositionV2 = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmIV2 = async function () {
  try {
    // Get user position
    const position = await getPositionV2();
    const { latitude: lat, longitude: lng } = position.coords;

    // Fetch geographic data
    const geoUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`;
    const geoResponse = await fetch(geoUrl);

    if (!geoResponse.ok) throw new Error('Problem getting location data');

    const geoData = await geoResponse.json();

    // Fetch country data
    const countryUrl = `https://restcountries.com/v2/name/${geoData.countryName}`;
    const countryResponse = await fetch(countryUrl);

    if (!countryResponse.ok) throw new Error('Problem getting country');

    const countryData = await countryResponse.json();

    // Render the country details
    console.log('Rendering where am I (V2)...');
    renderCountry(countryData[0]);
    return `You are in ${geoData.city}, ${geoData.countryName}`;
  } catch (err) {
    console.log(err);
  }
};

console.log('1: Will get location');
// const city = whereAmIV2();
// console.log(city);
// whereAmIV2()
//   .then(city => console.log(city))
//   .catch(err => console.log(`2: ${err} 🧨`))
//   .finally(() => {
//     console.log('3: Finished getting location');
//   });

(async function () {
  try {
    const city = await whereAmIV2();
    console.log(`2: ${city}`);
  } catch (err) {
    console.log(`2: ${err.message} 🧨`);
  }
  console.log('3: Finished getting location');
})();

console.log('-- Running Promises in Parallel --');
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    const country1Url = `https://restcountries.com/v2/name/${c1}`;
    const country2Url = `https://restcountries.com/v2/name/${c2}`;
    const country3Url = `https://restcountries.com/v2/name/${c3}`;

    const [data1] = await getJSON(country1Url);
    const [data2] = await getJSON(country2Url);
    const [data3] = await getJSON(country3Url);

    console.log(data1.capital, data2.capital, data3.capital);

    // Promises in Parallel
    const data = await Promise.all([
      getJSON(country1Url),
      getJSON(country2Url),
      getJSON(country3Url),
    ]);

    console.log(data.map(d => d[0].capital)); // ['Lisbon', 'Ottawa', 'Dodoma']
  } catch (err) {
    console.error(err);
  }
};

get3Countries('portugal', 'canada', 'tanzania');

console.log('-- Other Promise Combinators: race, allSettled and any --');
(async function () {
  const country1Url = `https://restcountries.com/v2/name/italy`;
  const country2Url = `https://restcountries.com/v2/name/egypt`;
  const country3Url = `https://restcountries.com/v2/name/mexico`;

  const res = await Promise.race([
    getJSON(country3Url),
    getJSON(country1Url),
    getJSON(country2Url),
  ]);

  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, sec);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/tanzania`),
  // timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

Promise.allSettled([
  Promise.resolve('Success 🍁'),
  Promise.reject('ERROR ⛔️'),
  Promise.resolve('Another Success 🪴'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.any([
  Promise.resolve('Success 🌱'),
  Promise.reject('ERROR 💥'),
  Promise.resolve('Another Success 🌿'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

*/

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/


const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// 1.
const loadNPause = async function () {
  try {
    // Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    // Load image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {
    console.error(err);
  }
};
// loadNPause();

// 2.
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);


