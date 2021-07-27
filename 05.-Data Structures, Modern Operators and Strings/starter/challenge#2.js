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

//Fernandos Solution
//Question 1
/* game.scored.forEach((player, index) => {
  let objSoccer = {};
  objSoccer[`goal ${index + 1}`] = player;
  objSoccer;
});

//Question2
const odds = Object.values(game.odds);
const oddLength = odds.length;

let result1 = odds
  .reduce((total, odd) => {
    return total + odd / 3;
  }, 0)
  .toFixed(2);

result1;

//Question3
let objOdds = {};
let oddsValues = Object.values(odds); */

//Jonas Solution
//Question1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//Question2
let average = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  average += odd / odds.length;
}

average;

//Question3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : 'victory';
  console.log(`Odd of ${teamStr} : ${odd}`);
}
