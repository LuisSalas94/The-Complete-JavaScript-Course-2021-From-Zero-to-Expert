'use strict';
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;
    //protected property
    this._movements = [];
    //this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }

  //Use ._ to "make" it private

  //Public interface
  //getter
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
    return this;
  }

  witdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan was approved`);
      return this;
    }
  }

  //static method will only be available in this class
  static helper() {
    console.log('Helper');
  }
}

const acc1 = new Account('Fernando', 'EUR', 1111);
acc1.deposit(300).deposit(500).witdraw(35).requestLoan(25000).witdraw(4000);
console.log(acc1.getMovements());
