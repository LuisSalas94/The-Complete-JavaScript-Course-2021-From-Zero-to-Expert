const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

//reduce
const movements = account1.movements;
const balance = movements.reduce((acc, cur) => acc + cur, 0);
balance;

//for of
let balanceFor = 0;
for (const mov of movements) balanceFor += mov;
balanceFor;

//Maximun value
const maxValue = movements.reduce(
  (acc, curr) => (acc > curr ? acc : curr),
  movements[0]
);
maxValue;
