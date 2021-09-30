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
/* Call Method */
const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

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
