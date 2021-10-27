'use strict';
//1. CLasses are NOT hoisted
//2. Class are first-class citizens
//3. Classes are executed in strict mode

//Instance Methods
//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //Methods will added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  //getter
  get age() {
    return 2037 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }

  //Static method
  static hey() {
    console.log('hey there 👏 ');
  }
}

const claudia = new PersonCl('Claudia Ramirez', 1995);
const gozde = new PersonCl('Gozde Arias', 1997);

PersonCl.hey();

/* Setters & Getters */
/* const account = {
  owner: 'Fernando',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements); */
