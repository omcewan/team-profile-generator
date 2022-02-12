let genID = 0;

class Employee {
  constructor(name = "", email = "") {
    this.name = name;
    this.id = this.idGenerator().next().value;
    this.email = email;
    this.role = "Employee";
  }

  idGenerator = function* () {
    while (true) {
      yield ++genID;
    }
  };

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
