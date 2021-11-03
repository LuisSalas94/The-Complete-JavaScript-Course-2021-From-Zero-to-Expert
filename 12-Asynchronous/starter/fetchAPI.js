'use strict';

/* const request = fetch('https://restcountries.com/v3.1/name/peru');
console.log(request); */
const btn = document.querySelector('.btn-country');
const getCountryData2 = function (country) {
  //fetch returns a promise, then method will execute as soon as promise is fullfield
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response =>
      //to use data from 'response' json methos needs to be called, will also reeturn a new promise
      //json should should also be "then"
      response.json()
    )
    .then(data => console.log(data));
};

//getCountryData2('norway');
/* *************************************** */
/* https://restcountries.com/v3.1/name/${country} */
/* const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => console.log(data));
};
 */

//chaining promises

const getCountryData = function (country) {
  //Country1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const neighbour = data[0].borders[0];
      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => console.log(neighbour))
    .catch(err => console.log(err));
};

btn.addEventListener('click', function () {
  getCountryData('germany');
});
