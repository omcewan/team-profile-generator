const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const writeFile = require("./utils/generate-site");

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Please enter the full name of the Manager.(Required)",
    validate: (managerName) => {
      if (managerName) {
        return true;
      } else {
        console.log("Please enter the full name of the Manager.(Required)");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "managerId",
    message:
      "Please enter the id of the Manager. Your ID is your first initial and last name.(Required)",
    validate: (managerId) => {
      if (managerId) {
        return true;
      } else {
        console.log(
          "Please enter the id of the Manager. Your ID is your first initial and last name.(Required)"
        );
        return false;
      }
    },
  },

  {
    type: "input",
    name: "managerEmail",
    message: "Please enter the email address of the Manager.(Required)",
    validate: (managerEmail) => {
      if (managerEmail) {
        return true;
      } else {
        console.log("Please enter the email address of the Manager.(Required)");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "managerOffice",
    message: "Please enter the office number of the Manager.(Required)",
    validate: (managerOffice) => {
      if (managerOffice) {
        return true;
      } else {
        console.log("Please enter the office number of the Manager.(Required)");
        return false;
      }
    },
  },

  {
    type: "list",
    name: "addEmployee",
    message:
      "Please choose to add a role to your team or finish building your team.(Required)",
    choices: ["Engineer", "Intern", "Finish Building Team"],
    validate: (employeeRole) => {
      if (employeeRole) {
        return true;
      } else {
        console.log("Please choose a role for your employee.(Required)");
        return false;
      }
    },
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "Please enter the full name of the Engineer.(Required)",
    validate: (engineerName) => {
      if (engineerName) {
        return true;
      } else {
        console.log("Please enter full the name of the Engineer.(Required)");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "engineerId",
    message:
      "Please enter the Id of the Engineer. Your ID is your first initial and last name.(Required)",
    validate: (engineerId) => {
      if (engineerId) {
        return true;
      } else {
        console.log(
          "Please enter the Id of the Engineer. Your ID is your first initial and last name.(Required)"
        );
        return false;
      }
    },
  },

  {
    type: "input",
    name: "engineerEmail",
    message: "Please enter the email address of the Engineer.(Required)",
    validate: (engineerEmail) => {
      if (engineerEmail) {
        return true;
      } else {
        console.log(
          "Please enter the email address of the Engineer.(Required)"
        );
        return false;
      }
    },
  },

  {
    type: "input",
    name: "github",
    message: "Please enter the github username of the Engineer.(Required)",
    validate: (engineerGithub) => {
      if (engineerGithub) {
        return true;
      } else {
        console.log(
          "Please enter the github username of the Engineer.(Required)"
        );
        return false;
      }
    },
  },

  {
    type: "list",
    name: "addEmployee",
    message:
      "Please choose to add a role to your team or finish building your team.(Required)",
    choices: ["Engineer", "Intern", "Finish Building Team"],
    validate: (employeeRole) => {
      if (employeeRole) {
        return true;
      } else {
        console.log("Please choose a role for your employee.(Required)");
        return false;
      }
    },
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "Please enter the full name of the Intern.(Required)",
    validate: (internName) => {
      if (internName) {
        return true;
      } else {
        console.log("Please enter the full name of the Intern.(Required)");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "internId",
    message:
      "Please enter the Id of the Intern. Your ID is your first initial and last name.(Required)",
    validate: (internId) => {
      if (internId) {
        return true;
      } else {
        console.log(
          "Please enter the Id of the Intern. Your ID is your first initial and last name.(Required)"
        );
        return false;
      }
    },
  },

  {
    type: "input",
    name: "internEmail",
    message: "Please enter the email address of the Intern.(Required)",
    validate: (internEmail) => {
      if (internEmail) {
        return true;
      } else {
        console.log("Please enter the email address of the Intern.(Required)");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "school",
    message: "Please enter the school of the Intern.(Required)",
    validate: (internSchool) => {
      if (internSchool) {
        return true;
      } else {
        console.log("Please enter the school of the Intern.(Required)");
        return false;
      }
    },
  },

  {
    type: "list",
    name: "addEmployee",
    message:
      "Please choose to add a role to your team or finish building your team.(Required)",
    choices: ["Engineer", "Intern", "Finish Building Team"],
    validate: (employeeRole) => {
      if (employeeRole) {
        return true;
      } else {
        console.log("Please choose a role for your employee.(Required)");
        return false;
      }
    },
  },
];

// this is temp data of what to expect after the input from the app
let myEmployees = [];

const promptEngineer = () => {
  return inquirer.prompt(engineerQuestions).then((engineerData) => {
    myEmployees.push(engineerData);
    let { addEmployee } = engineerData;
    if (addEmployee === "Engineer") {
      return promptEngineer();
    } else if (addEmployee === "Intern") {
      return promptIntern();
    } else if (addEmployee === "Finish Builiding Team") {
      return myEmployees;
    }
  });
};

const promptIntern = () => {
  return inquirer.prompt(internQuestions).then((internData) => {
    myEmployees.push(internData);
    let { addEmployee } = internData;
    if (addEmployee === "Engineer") {
      return promptEngineer();
    } else if (addEmployee === "Intern") {
      return promptIntern();
    } else if (addEmployee === "Finish Builiding Team") {
      return myEmployees;
    }
  });
};

const promptManager = () => {
  return inquirer.prompt(managerQuestions).then((managerData) => {
    myEmployees.push(managerData);
    let { addEmployee } = managerData;
    if (addEmployee === "Engineer") {
      return promptEngineer();
    } else if (addEmployee === "Intern") {
      return promptIntern();
    } else if (addEmployee === "Finish Builiding Team") {
      return myEmployees;
    }
  });
};

const initApp = () => promptManager();

initApp()
  .then(() => {
    return generatePage(myEmployees);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
