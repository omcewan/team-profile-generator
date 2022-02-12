class Employee {
  constructor(name, email) {
    this.name = name;
    this.id = 1;
    this.email = email;
    this.role = "Employee";
  }

  nextId = function() {
    this.id =  this.id + 1;
    return this.id + 1
  }

  getName = function () {
    return `Name: ${this.name}!`;
  };

  getId = function () {
    return `ID: ${this.id}`;
  };

  getEmail = function () {
    return `Email: ${this.email}`;
  };

  getRole = function () {
    return this.role;
  };
}

module.exports = Employee;
