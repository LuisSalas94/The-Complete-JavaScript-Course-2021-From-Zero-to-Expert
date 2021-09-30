'use strict';
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};

lufthansa.book(239, 'Fernando Salas');
lufthansa.book(645, 'Gozde Salas');
console.log(lufthansa);

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function */
const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

/* Call Method */
const book = lufthansa.book;
book.call(eurowings, 23, 'Maria Cueva');
console.log(eurowings);

book.call(lufthansa, 239, 'Paola Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 583, 'Mary Cooper');

/* Apply Method */
const flightData = [585, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
//book.call(swiss, ...flightData);

/* Bind Method */
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(45, 'Carl Sagan');
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Fernando Salas');
bookEW23('Gozde Salas');

//With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

/* document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); */

//Partial applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT(23));
