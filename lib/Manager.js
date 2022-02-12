const Employee = require("../lib/Employee");

let genOffNum = 0;

class Manager extends Employee {
  constructor(name, email) {
    super(name, email);
    this.officeNumber = this.officeNumGenerator().next().value;
    this.role = "Manager";
  }
  officeNumGenerator = function* () {
    while (true) {
      yield ++genOffNum;
    }
  };
}

module.exports = Manager;
