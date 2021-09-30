'use strict';
/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
}; */

const greet2 = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet2('Hey');
greeterHey('Fernando');
greeterHey('Claudia');
greet2('Hello')('Maria');
