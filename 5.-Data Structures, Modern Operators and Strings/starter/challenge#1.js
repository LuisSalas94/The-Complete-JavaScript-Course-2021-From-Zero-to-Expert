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

/* ***********************Fernando's Version************************************ */

//Question 1
const [players1, players2] = game.players;

//Question2
const [gk, ...fielPlayers] = players1;

//Question3
const allPlayers = [...players1, ...players2];

//Question4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

//Question5
/* const { team1 } = game.odds;
const { x: draw } = game.odds;
const { team2 } = game.odds; */
const {
  odds: { team1, x: draw, team2 },
} = game;

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
/* console.log(team1 || team2); */
team1 < team2 && console.log('Team 1 is more likely to win!!!');
