const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name, email) {
    super(name, email);
    this.officeNumber = 1;
    this.role = "Manager";
  }
}

module.exports = Manager;
