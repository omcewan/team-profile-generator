const Manager = require("../lib/Manager");

test("check if class is inheriting from parent class Employee", () => {
  const manager = new Manager("orlando");
  manager.email = "gmail.com";

  expect(manager.name).toBe("orlando");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
});

test("get the name of the manager", () => {
  const manager = new Manager("orlando");

  expect(manager.getName()).toEqual(
    expect.stringContaining(manager.name.toString())
  );
});

test("get the id of the manager", () => {
  const manager = new Manager("orlando");
  manager.id = 0;

  expect(manager.getId()).toEqual(
    expect.stringContaining(manager.id.toString())
  );
});

test("get the email of the manager", () => {
  const manager = new Manager("orlando");
  manager.email = "gmail.com";

  expect(manager.getEmail()).toEqual(
    expect.stringContaining(manager.email.toString())
  );
});

test("returns 'Manager' ", () => {
  const manager = new Manager("orlando");

  expect(manager.getRole()).toBe("Manager");
});

test("returns managers's office number", () => {
  const manager = new Manager("orlando");

  expect(manager.officeNumber).toEqual(expect.any(Number));
});
