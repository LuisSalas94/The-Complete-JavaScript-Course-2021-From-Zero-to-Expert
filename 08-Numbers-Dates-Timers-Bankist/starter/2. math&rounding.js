console.log(Math.trunc(Math.random() * 6) + 1);

//Generate random numbers between min and max
const randomInt = (min, max) => {
  return Math.trunc(Math.random() * max - min + 1) + min;
};
console.log(randomInt(10, 20));

console.log(Math.trunc(23.3));
console.log(Math.round(23.5));

//Roundind Decimals
console.log(typeof +(2.7).toFixed(0));
console.log((2.345).toFixed(2));
console.log(typeof +(2.345).toFixed(2));
