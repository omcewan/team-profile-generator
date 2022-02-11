const Employee = require("../lib/Employee");

test("create an Employee class", () => {
  const employee = new Employee("Orlando");
  employee.email = "orlandomcewan231@gmail.com";

  expect(employee.name).toBe("Orlando");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("get the name of the employee", () => {
  const employee = new Employee("Orlando");

  expect(employee.getName()).toEqual(
    expect.stringContaining(employee.name.toString())
  );
});

test("get the id of the employee", () => {
  const employee = new Employee("Orlando");
  employee.id = 0;

  expect(employee.getId()).toEqual(
    expect.stringContaining(employee.id.toString())
  );
});

test("get the email of the employee", () => {
  const employee = new Employee("Orlando");
  employee.email = "orlandomcewan231@gmail.com";

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

test("returns 'Employee' ", () => {
  const employee = new Employee("Orlando");

  expect(employee.getRole()).toBe("Employee");
});
