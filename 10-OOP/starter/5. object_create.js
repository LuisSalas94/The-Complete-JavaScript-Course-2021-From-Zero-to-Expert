const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const maria = Object.create(PersonProto);
maria.name = 'Maria';
maria.birthYear = 1990;
maria.calcAge();

const jenny = Object.create(PersonProto);
jenny.init('Yenny', 1986);
jenny.calcAge();
