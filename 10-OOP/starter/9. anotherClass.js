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
  }

  witdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan was approved`);
    }
  }
}

const acc1 = new Account('Fernando', 'EUR', 1111);
/* acc1.movements.push(250);
acc1.movements.push(-140); */
acc1.deposit(250);
acc1.witdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
