'use strict';

const airline = 'TAP Air Portugal';
const plane = 'AE320';
console.log(plane[0]);
console.log('B737'[1]);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

//slice
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

/* const checkMiddelSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
}; */

/* checkMiddelSeat('11B');
checkMiddelSeat('23C');
checkMiddelSeat('3E'); */
console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnAS';
const fist = passenger[0].toUpperCase();
const result = fist + passenger.slice(1).toLowerCase();

//Comparing Email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io\n';

const loginEmailCorrect = loginEmail.toLowerCase().trim();
console.log(loginEmailCorrect === email);

//replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace(',', '.').replace('£', '$');
const annoucement =
  'All passengers come to boarding door 23. Boarding door 23!';
const correctAnnoucement = annoucement
  .replace('door', 'gate')
  .replace('door', 'gate');
correctAnnoucement;

//using regular expresion
console.log(annoucement.replace(/door/g, 'gate'));

//Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Airb'));

if (plane2.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

//Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    return console.log('Not Allowed');
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Sock and Camera');
checkBaggage('Got some snacks and a gun for protection');
