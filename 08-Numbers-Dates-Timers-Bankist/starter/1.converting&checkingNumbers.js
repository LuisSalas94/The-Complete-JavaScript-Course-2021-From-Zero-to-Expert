console.log(23 === 23.0);
console.log(0.1 + 0.2);
console.log(typeof Number('23'));
console.log(typeof +'23');

//Parsing
console.log(Number.parseInt('30px'));
console.log(Number.parseInt('e23'));
console.log(Number.parseInt(' 2.5rem'));
console.log(Number.parseFloat('2.5rem'));

//isNAN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20'));

//isFinite
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(Infinity));
