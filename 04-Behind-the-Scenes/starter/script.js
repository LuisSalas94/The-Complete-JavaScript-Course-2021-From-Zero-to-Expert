'use strict';

/* function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Luis';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      output = 'New Output!';
    }
  }

  printAge();

  return age;
}

const firstName = 'Fernando';

calcAge(1987);
 */

//Hoisting and TDZ

//console.log(me);
//console.log(job);
//console.log(year);

/* var me = 'Luis';
let job = 'porn actor';
const year = 1987;

//Functions
console.log(addDecl(2, 3)); */
//console.log(addExpr(2, 3));
//console.log(addArrow(2, 3));

/* function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//Example
if (!numProducts) deleteShoppingCart();

var numProducts = 0;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;
 */

//This
/* console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1987);
 */

/* var firstName = 'Matilda';

const fernando = {
  firstName: 'Fernando',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`);
  },
};
 */
//fernando.greet();
//fernando.calcAge();

//Arguments keyword
/* const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => a + b; */

/* let age = 30;
let oldAge = age;
age = 31;

console.log('age: ' + age);
console.log('old age: ' + oldAge);

const me = {
  name: 'Fernando',
  age: 34,
};

const friend = me;
friend.age = 44;
me;
 */

/* let lastName = 'Salas';
let oldLastName = lastName;

lastName = 'Gave';

console.log(lastName);
console.log(oldLastName); */

const luis = {
  firstName: 'Luis',
  lastName: 'Salas',
  age: 34,
};

const marriedLuis = luis;
marriedLuis.lastName = 'Gave';

console.log('Before marriage', luis);
console.log('After marriage', marriedLuis);

//Copying objects
const luis2 = {
  firstName: 'Luis',
  lastName: 'Salas',
  age: 34,
  family: ['maria', 'paola'],
};

const luisCoppy = Object.assign({}, luis2);
luisCoppy.lastName = 'Sagan';
console.log('Before marriage', luis2);
console.log('After marriage', luisCoppy);

luisCoppy.family.push('milagros');
luisCoppy.family.push('claudia');

console.log('Before marriage', luis2);
console.log('After marriage', luisCoppy);
