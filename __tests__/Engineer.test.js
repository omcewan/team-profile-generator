const Engineer = require("../lib/Engineer");

describe("test if inherited properties and methods still function as they should", () => {
  test("check if class is inheriting from parent class Employee", () => {
    const engineer = new Engineer("Orlando");

    expect(engineer.name).toBe("Orlando");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
  });

  test("get the name of the engineer", () => {
    const engineer = new Engineer("Orlando");

    expect(engineer.getName()).toEqual(
      expect.stringContaining(engineer.name.toString())
    );
  });

  test("create a generator object", () => {
    const engineer = new Engineer("Orlando");
    expect(engineer.idGenerator()).toEqual(expect.any(Object));
  });

  test("check if generator object contains a property called 'value'", () => {
    const engineer = new Engineer("Orlando");
    expect(engineer.idGenerator().next()).toHaveProperty("value");
  });

  test("get the id of the engineer", () => {
    const engineer = new Engineer("Orlando");

    expect(engineer.getId()).toEqual(
      expect.stringContaining(engineer.id.toString())
    );
  });

  test("get the email of the engineer", () => {
    const engineer = new Engineer("Orlando");

    expect(engineer.getEmail()).toEqual(
      expect.stringContaining(engineer.email.toString())
    );
  });
});

describe("check fucntionalitiy of Engineer class specific properties and funcitons", () => {
  test("return the Engineer's github username", () => {
    const engineer = new Engineer("Orlando");
    expect(engineer.github).toEqual(expect.any(String));
  });

  test("returns 'Engineer' ", () => {
    const engineer = new Engineer("Orlando");

    expect(engineer.getRole()).toBe("Engineer");
  });

  test("get the engineer's github link", () => {
    const engineer = new Engineer("Orlando");

    expect(engineer.gitHub()).toEqual(
      expect.stringContaining(engineer.github.toString())
    );
  });
});
