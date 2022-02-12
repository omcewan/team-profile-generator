const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, email, school = "") {
    super(name, email);
    this.school = school
    this.role = "Intern";
  }

  getSchool = function() {
    return `School: ${this.school}`
  }
}

module.exports = Intern;
