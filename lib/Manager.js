const Employee = require("../lib/Employee");

class Manager extends Employee {
  constructor(name = "", email = "", id = 0, officeNumber = 0) {
    super(name, email, id);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
}

module.exports = Manager;
