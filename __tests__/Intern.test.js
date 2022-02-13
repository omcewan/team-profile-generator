const Intern = require("../lib/Intern");

describe("test if inherited properties and methods still function as they should", () => {
  test("check if class is inheriting from parent class Employee", () => {
    const interm = new Intern("Orlando");

    expect(interm.name).toBe("Orlando");
    expect(interm.id).toEqual(expect.any(String));
    expect(interm.email).toEqual(expect.any(String));
  });

  test("get the name of the interm", () => {
    const interm = new Intern("Orlando");

    expect(interm.getName()).toEqual(
      expect.stringContaining(interm.name.toString())
    );
  });

  test("get the id of the interm", () => {
    const interm = new Intern("Orlando");

    expect(interm.getId()).toEqual(
      expect.stringContaining(interm.id.toString())
    );
  });

  test("get the email of the interm", () => {
    const interm = new Intern("Orlando");

    expect(interm.getEmail()).toEqual(
      expect.stringContaining(interm.email.toString())
    );
  });
});

describe("check fucntionalitiy of Intern class specific properties and funcitons", () => {
  test("return the Intern's school name", () => {
    const intern = new Intern("Orlando");

    expect(intern.school).toEqual(expect.any(String));
  });

  test("returns 'Intern' ", () => {
    const intern = new Intern("Orlando");

    expect(intern.getRole()).toBe("Intern");
  });

  test("returns the Intern's School", () => {
    const intern = new Intern("Orlando");
    expect(intern.getSchool()).toEqual(
      expect.stringContaining(intern.school.toString())
    );
  });
});
