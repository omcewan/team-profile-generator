const Manager = require("../lib/Manager");

describe("test if inherited properties and methods still function as they should", () => {
  test("check if class is inheriting from parent class Employee", () => {
    const manager = new Manager("Orlando");

    expect(manager.name).toBe("Orlando");
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
  });

  test("get the name of the manager", () => {
    const manager = new Manager("Orlando");

    expect(manager.getName()).toEqual(
      expect.stringContaining(manager.name.toString())
    );
  });

  test("get the id of the manager", () => {
    const manager = new Manager("Orlando");

    expect(manager.getId()).toEqual(
      expect.stringContaining(manager.id.toString())
    );
  });

  test("get the email of the manager", () => {
    const manager = new Manager("Orlando");

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
