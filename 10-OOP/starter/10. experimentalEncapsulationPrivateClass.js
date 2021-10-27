//1) Public Fields
//2) Private Fields
//3) Public Methods
//4) Private Methods

class Account {
  //1) Public Fields (instances)
  locale = navigator.language;

  //2) Private Fields
  #movements = [];

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected Property
    this._pin = pin;
    //this._movements = [];
    //this.locale = navigator.language;
    console.log(`Thanks for opening an account ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
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
acc1.deposit(250);
acc1.witdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
