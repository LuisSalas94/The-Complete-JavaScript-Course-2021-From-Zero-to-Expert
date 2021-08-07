const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.lastIndexOf('r'));
console.log(airline.slice(4));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')));
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('middle seat');
  } else {
    console.log('lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
passengerCorrect;

const email = 'hello@jonas.io';
const loginEmail = '    Hello@Jonas.Io';
const correctEmail = loginEmail.trim().toLowerCase();

//replacing
const priceGB = '288,97euro';
const priceUS = priceGB.replace('euro', '$').replace(',', '.');
priceUS;

//Booleans
const plane2 = 'Airbus A320neo';
console.log(plane2.includes('A320'));

console.log(plane2.startsWith('Air'));

//split
console.log('a+very+nice+string'.split('+'));

const name = 'Fernando Salas'.split(' ');

const [firstName, lastName] = name;
firstName;
lastName;

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
newName;

function capitalizeName(name) {
  const names = name.split(' ');
  let namesUpper = [];

  for (let word of names) {
    namesUpper.push(word[0].toUpperCase() + word.slice(1));
  }

  namesUpper = namesUpper.join(' ');
  return namesUpper;
}

capitalizeName('fernando salas');

//Padding
const message = 'Go to gate 23!';
const name3 = 'Luis Fernando';
console.log(message.padStart(25, '+'));
console.log(name3.padEnd(40, '*'));

//Masking Credit Card
function maskCreditCard(number) {
  const str = number + '';

  let lastFour = str.slice(-4).padStart(str.length, '*');

  lastFour;
  return lastFour;
}

maskCreditCard(211221654646565);
