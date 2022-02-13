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
    let idArr = [];
    idArr.push(this.id);

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
