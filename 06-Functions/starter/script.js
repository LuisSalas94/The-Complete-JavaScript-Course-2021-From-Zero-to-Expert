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
