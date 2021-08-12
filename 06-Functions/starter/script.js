'use strict';

/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123', 5); */

/*Passing Arguments */

/* const flight = 'LH234';
const luis = {
  name: 'Luis Salas',
  passport: 44260044,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 44260044) {
    alert('Check In');
  } else {
    alert('Wrong Passport');
  }
}; */

/* checkIn(flight, luis);
console.log(flight);
console.log(luis); */

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
  person.age = 22;
};

/* newPassport(jonas);
checkIn(flight, jonas);
 */

/* First Class and Higher order functions */
//PRACTICE
/* const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const uppperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', uppperFirstWord);

transformer('JavaScript is the best!', oneWord);

const high5 = () => console.log('🙅');

document.body.addEventListener('click', high5); */

/* Functions returning functions */
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('Luis');
greeterHey('Fernando');
greet('Fuck you')('Asshole');

const greet2 = greeting2 => name => {
  console.log(`${greeting2} ${name}`);
};

const greetHey2 = greet2('hey');
greetHey2('Maria');
greet2('hi...')('wanna fuck?');

/* Call and apply methods */
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flithNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flithNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flithNum}`, name });
  },
};

lufthansa.book(239, 'Fernando');
lufthansa.book(645, 'Maria');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

/* Call Method */
const book = lufthansa.book;
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

book.call(lufthansa, 21, 'Gozde');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Paola');

/* Apply method */
const fligthData = [583, 'George Cooper'];
book.apply(swiss, fligthData);
console.log(swiss);

book.call(swiss, ...fligthData);

/* Bind Method */
const bookEW = book.bind(eurowings);
const bookLh = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Gozde');