class Employee {
  constructor(name = "", email = "", id = 0) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Employee";
  }

  getName = function () {
    return `Name: ${this.name}!`;
  };

  getId = function () {
    let idArr = [];
    idArr.push(this.id);
    console.log(idArr);

    return `ID: ${this.id}`;
  };

  getEmail = function () {
    return `Email: ${this.email}`;
  };

  getRole = function () {
    return this.role;
  };
}

const orlando = new Employee("orlando", "gmail", 1);
console.log(orlando.getId());
module.exports = Employee;
