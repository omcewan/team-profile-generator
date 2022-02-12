const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, email, github) {
    super(name, email)
    this.github = github;
    this.role = "Engineer"
  }

  gitHub = function() {
    return `www.github.com/${this.github}`
  }
}

module.exports = Engineer;
