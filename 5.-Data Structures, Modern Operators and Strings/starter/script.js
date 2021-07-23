'use strict';

// Data needed for a later exercise
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'; */

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}  `
    );
  },

  orderPast: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole,21',
  mainIndex: 2,
  starterIndex: 2,
});

//Spread Operator
/* const arr = [7, 8, 9];
const badNewArr = [4, 5, 6, ...arr]; */
//console.log(badNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
//console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
//console.log(menu);

//string
/* const str = 'Fernando';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str); */

/* const ingredients = [
  prompt('Enter ingredient 1'),
  prompt('Enter ingredient 2'),
  prompt('Enter ingredient 3'),
];

console.log(restaurant.orderPast(...ingredients)); */

/* //Object Destructuring
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

const {
  fri: { open, close },
} = openingHours;

console.log(open, close); */

/* let [main, secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables
[main, secondary] = [secondary, main];
console.log(main, secondary);
 */
/* 
console.log(restaurant.order(2, 0)); */

/* const nested = [2, 4, [5, 6]];
const [a, , [b, c]] = nested;
console.log(a, b, c);
 */

/* const [p, q, r = 33] = [8, 9];
console.log(p, q, r);
 */

//spread
/* const arr = [1, 2, ...[3, 4]];
console.log(arr);

//rest
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(otherFood);

const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);
 */

//functions
/* const add = function (...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};

console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));

const x = [23, 5, 7];
console.log(add(...x));

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
 */

/* console.log(3 || 'Luis'); */
/* console.log('' || 'Luis'); */
/* console.log(true || 0); */
/* console.log(undefined || null); */
/* console.log(undefined || 0 || '' || 'hello' || 23 || null); */

/* restaurant.numGuests = 23; */

/* const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(1 && 'Fernando');
console.log(0 && 'Luis');
console.log(7 && 'Luis');
 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//Question 1
const [players1] = game.players;
const [, players2] = game.players;

//Question2
const [gk, ...fielPlayers] = players1;

//Question3
const allPlayers = [...players1, ...players2];

//Question4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//Question5
const { team1 } = game.odds;
const { x: draw } = game.odds;
const { team2 } = game.odds;

//Question6
function printGoals(...playerNames) {
  for (let player of game.scored) {
    console.log(player);
  }

  for (let score of game.score) {
    console.log(score);
  }
}

printGoals(game.scored);

//Question7
console.log(team1 || team2);
