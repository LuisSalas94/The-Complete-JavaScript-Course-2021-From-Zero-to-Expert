'use strict';

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

/* 
Closure Definitions

- A closure is the local variables for a function - kept alive after the function
has returned.

- Closure is when a function is able ti remember and access its lexical scope even 
when that function is executing outside its lexical scope.

- A closure is a function having access to the parent scope, even after the parent
function has closed.


*/
