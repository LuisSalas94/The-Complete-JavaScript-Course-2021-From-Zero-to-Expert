const flight = 'LH234';
const fernando = {
  name: 'Fernando Salas',
  passport: 234493312,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  passenger.passport === 234493312
    ? console.log('Check in')
    : console.log('Wrong Passport');
};

/* checkIn(flight, fernando);
console.log(flight);
console.log(fernando); */

/* ******************************************************************************* */

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(fernando);
checkIn(flight, fernando);
