const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
const movements = account1.movements;

const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => Number((mov * 1.1).toFixed()))
  .reduce((acc, curr) => acc + curr, 0);

totalDepositUSD;
