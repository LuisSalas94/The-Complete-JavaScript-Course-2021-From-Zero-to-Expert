const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const movements = account1.movements;
//filter
const deposits = movements.filter(mov => mov > 0);
deposits;

//for of
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) depositsFor.push(mov);
}

//filter
const withdrawals = movements.filter(mov => mov < 0);
