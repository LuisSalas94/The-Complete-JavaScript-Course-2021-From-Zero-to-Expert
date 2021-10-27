'use strict';
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  /* this.calcAge = function () {
    console.log(2037 - this.birthYear);
  }; */
};

const fernando = new Person('Fernando', 1987);
console.log(fernando);
//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatically return {}

const claudia = new Person('Claudia', 1994);
const gozde = new Person('Gozde', 1996);
console.log(claudia, gozde);
