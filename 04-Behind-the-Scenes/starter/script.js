'use strict';
/* 
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = 'Luis';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'NEW OUTPUT';
    }

    output;
  }

  printAge();

  return age;
}

const firstName = 'Fernando';

console.log(calcAge(1987));
 */

//variables
//console.log(me);
/* console.log(job);
console.log(year);
 */

/* var me = 'Luis';
let job = 'teacher';
const year = 1987; */

//functions
//console.log(addDecl(2, 3));
/* console.log(addExpr(2, 3));
console.log(addArrow(2, 3)); */

/* function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b; */

//Example
/* console.log(numProducts);
if (!numProducts) deleteShoopingCart();

var numProducts = 10;

function deleteShoopingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3; */

/* console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1987);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const fernando = {
  year: 1987,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
fernando.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = fernando.calcAge;
matilda.calcAge();

const f = fernando.calcAge; */

/* var firstName = 'Fernando'; */

/* const fernando = {
  firstName: 'Luis',
  year: 1987,
  calcAge: function () {
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};
fernando.greet();
fernando.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  return a + b;
};

addArrow(2, 5, 8);
 */

//Primitives and Objects
let age = 30;
let oldAge = age;
age = 31;
age;
oldAge;

const me = {
  name: 'Fernando',
  age: 34,
};

const friend = me;
friend.age = 27;

console.log('Friend', friend);
console.log('Me', me);
