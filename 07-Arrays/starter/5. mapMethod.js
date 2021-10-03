const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//map
const USDmovements = movements.map(eu => (eu * 1.1).toFixed());

//for of
let movementUSD = [];
for (const mov of movements) {
  movementUSD.push(mov * (1.1).toFixed());
}

const movementsDescriptions = movements.map((mov, index) => {
  return mov > 0
    ? `Movement ${index + 1}: You deposited ${mov}`
    : `Movement ${index + 1}: You withdrew ${Math.abs(mov)}`;
});

console.log(movementsDescriptions);
