const myEmployees = require("../index");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const generateManager = (employeesArr) => {
  let managers = employeesArr
    .filter((manager) => manager.managerName)
    .map((manager) => {
      let { managerName, managerEmail, managerId, managerOffice } = manager;
      managerName = new Manager(
        managerName,
        managerEmail,
        managerId,
        managerOffice
      );
      return managerName;
    });
  return console.log(managers);
};

const generateEngineer = (employeesArr) => {
  let engineers = employeesArr
    .filter((engineer) => engineer.engineerName)
    .map((engineer) => {
      let { engineerName, engineerEmail, engineerId, github } = engineer;
      engineerName = new Engineer(
        engineerName,
        engineerEmail,
        engineerId,
        github
      );
      return engineerName;
    });
  return console.log(engineers);
};

const generateIntern = (employeesArr) => {
  let interns = employeesArr
    .filter((intern) => intern.internName)
    .map((intern) => {
      let { internName, internEmail, internId, school } = intern;
      internName = new Intern(internName, internEmail, internId, school);
      return internName;
    });
  return console.log(interns);
};

// generateManager(myEmployees);
// generateEngineer(myEmployees);
generateIntern(myEmployees);
