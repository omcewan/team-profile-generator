const Employee = require("../lib/Employee");

class Intern extends Employee {
  constructor(name, email,id = 0, school = "") {
    super(name, email, id = 0,);
    this.school = school
    this.role = "Intern";
  }

  getSchool = function() {
    return `School: ${this.school}`
  }
}

module.exports = Intern;
