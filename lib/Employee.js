class Employee {
  constructor(name, email) {
    this.name = name;
    this.id = Math.floor(Math.random() * 9 + 1);
    this.email = email;
    this.role = "Employee";
  }

  getName = function () {
    return `Hi my name is ${this.name}!`;
  };

  getId = function () {
    return `${this.name}'s id is ${this.id}`;
  };

  getEmail = function () {
    return `${this.name}'s email: ${this.email}`;
  };

  getRole = function () {
    return this.role;
  };
}

module.exports = Employee;
