const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, email, id = "", school = "") {
    super(name, email, id);
    this.school = school;
    this.role = "Intern";
  }

  getSchool = function () {
    return `School: ${this.school}`;
  };
}

module.exports = Intern;
