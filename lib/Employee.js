class Employee {
  constructor(name = "", email = "", id = "") {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName = function () {
    return `Name: ${this.name}`;
  };

  getId = function () {
    return `ID: ${this.id}`;
  };

  getEmail = function () {
    return `Email: ${this.email}`;
  };

  getRole = function () {
    return `Role: ${this.role}`;
  };
}

module.exports = Employee;
