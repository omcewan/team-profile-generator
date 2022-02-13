const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, email, id = "", github = "") {
    super(name, email, id);
    this.github = github;
    this.role = "Engineer";
  }

  gitHub = function () {
    return `https://www.github.com/${this.github}`;
  };
}

module.exports = Engineer;
