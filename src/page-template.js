const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateManager = (employeesArr) => {
  let managers = employeesArr
    .filter((manager) => manager.managerName)
    .map(({ managerName, managerEmail, managerId, managerOffice }) => {
      const newManager = new Manager(
        managerName,
        managerEmail,
        managerId,
        managerOffice
      );
      return `
      <card class="col-4 align-self-center">
        <h4 class="emplpoyee-name">${newManager.getName()}<br>${newManager.getRole()}</h4>
        <p class="employee-id">${newManager.getId()}</p>
        <p class="employee-email">Email: <a href="mailto:${newManager.getEmail()}">
        ${newManager.name}</a></p>
        <p class="employee-misc">${newManager.officeNumber}</p>
      </card>`;
    })
    .join("");
  return managers;
};

const generateEngineers = (employeesArr) => {
  let engineers = employeesArr
    .filter((engineer) => engineer.engineerName)
    .map((engineer) => {
      let { engineerName, engineerEmail, engineerId, github } = engineer;
      const newEngineer = new Engineer(
        engineerName,
        engineerEmail,
        engineerId,
        github
      );
      return `
      <card class="col-4 align-self-center">
        <h4 class="emplpoyee-name">${newEngineer.getName()}<br>${newEngineer.getRole()}</h4>
        <p class="employee-id">${newEngineer.getId()}</p>
        <p class="employee-email">Email: <a href="mailto:${newEngineer.getEmail()}">
        ${newEngineer.name}</a></p>
        <p class="employee-misc">GitHub: <a href="${newEngineer.gitHub()}" target="_blank">${
        newEngineer.github
      }</a></p>
      </card>`;
    })
    .join("");
  return engineers;
};

const generateInterns = (employeesArr) => {
  let interns = employeesArr
    .filter((intern) => intern.internName)
    .map(({ internName, internEmail, internId, school }) => {
      const newIntern = new Intern(internName, internEmail, internId, school);
      return `
      <card class="col-4 align-self-center">
        <h4 class="emplpoyee-name">${newIntern.getName()}<br>${newIntern.getRole()}</h4>
        <p class="employee-id">${newIntern.getId()}</p>
        <p class="employee-email">Email: <a href="mailto:${newIntern.getEmail()}">
        ${newIntern.name}</a></p>
        <p class="employee-misc">${newIntern.getSchool()}</p>
      </card>`;
    })
    .join("");
  return interns;
};

const generatePage = (employeesArr) => {
  console.log(`
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>My Employees</title>
  </head>
  <body>
    <header>
      <h1>My Employees</h1>
    </header>
    <section>
      <div class="container">
        <section class="row justify-content-center">
        ${generateManager(employeesArr)}
        ${generateEngineers(employeesArr)}
        ${generateInterns(employeesArr)}
        </section>
      </div>
    </section>
  </body>
</html>
  `);
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>My Employees</title>
  </head>
  <body>
    <header>
      <h1>My Employees</h1>
    </header>
    <section>
      <div class="container">
        <section class="row justify-content-center">
        ${generateManager(employeesArr)}
        ${generateEngineers(employeesArr)}
        ${generateInterns(employeesArr)}
        </section>
      </div>
    </section>
  </body>
</html>
  `;
};

module.exports = generatePage;
