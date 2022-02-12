const Manager = require("../lib/Manager");

describe("test if inherited properties and methods still function as they should", () => {
  test("check if class is inheriting from parent class Employee", () => {
    const manager = new Manager("Orlando");
    manager.email = "gmail.com";

    expect(manager.name).toBe("Orlando");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
  });

  test("get the name of the manager", () => {
    const manager = new Manager("Orlando");

    expect(manager.getName()).toEqual(
      expect.stringContaining(manager.name.toString())
    );
  });

  test("create a generator object", () => {
    const manager = new Manager("Orlando");
    expect(manager.idGenerator()).toEqual(expect.any(Object));
  });

  test("check if generator object contains a property called 'value'", () => {
    const manager = new Manager("Orlando");
    expect(manager.idGenerator().next()).toHaveProperty("value");
  });

  test("get the id of the manager", () => {
    const manager = new Manager("Orlando");
    manager.id = 0;

    expect(manager.getId()).toEqual(
      expect.stringContaining(manager.id.toString())
    );
  });

  test("get the email of the manager", () => {
    const manager = new Manager("Orlando");
    manager.email = "gmail.com";

    expect(manager.getEmail()).toEqual(
      expect.stringContaining(manager.email.toString())
    );
  });
});

describe("check fucntionalitiy of Manager class specific properties and funcitons", () => {
  test("returns 'Manager' ", () => {
    const manager = new Manager("Orlando");

    expect(manager.getRole()).toBe("Manager");
  });

  test("returns managers's office number", () => {
    const manager = new Manager("Orlando");

    expect(manager.officeNumber).toEqual(expect.any(Number));
  });
});
