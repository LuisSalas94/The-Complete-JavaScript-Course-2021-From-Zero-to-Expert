'use strict';

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//Fernandos Way|
//1.
let events = new Set();
for (const [key, value] of gameEvents) {
  events.add(value);
}
events = Array(...events);
console.log(events);

//Other way
const events2 = Array(...new Set(gameEvents.values()));

//2.
gameEvents.delete(64);

//3.
const time = [...gameEvents.keys()][gameEvents.size - 1];
console.log(
  `An event happended, on average, every ${(time / gameEvents.size).toFixed(
    2
  )} minutes`
);

//4.
for (const [time, event] of gameEvents) {
  console.log(`[${time < 45 ? 'FIRST' : 'SECOND'} HALF] ${time} : ${event}`);
}
