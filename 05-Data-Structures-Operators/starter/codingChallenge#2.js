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

/* Fernandos Way */
//1.
//Use Object.entries() with arrays
for (const item of [...game.scored].entries()) {
  console.log(`Goal ${item[0] + 1}: ${item[1]}`);
}

//other way
for (const [index, players] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${players}`);
}

//2.
//Use Object.entries(object) with objects
let average = 0;
let length = 0;
for (const [, value] of Object.entries(game.odds)) {
  average += value;
  length++;
}
console.log(`The average of the odds is ${(average / length).toFixed(2)}`);

//other way
const odds = Object.values(game.odds);
let average2 = 0;
for (const odd of odds) {
  average2 += odd;
}

average2 /= odds.length;
console.log(average2);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
