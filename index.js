const inquirer = require("inquirer");

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Please enter the name of the Manager.(Required)",
    validate: (managerName) => {
      if (managerName) {
        return true;
      } else {
        console.log("Please enter the name of the Manager.(Required)");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "ManagerId",
    message: "Please enter the id of the Manager.(Required)",
    validate: (managerId) => {
      if (managerId) {
        return true;
      } else {
        console.log("Please enter the id of the Manager.(Required)");
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
    message: "Please enter the name of the Engineer.(Required)",
    validate: (engineerName) => {
      if (engineerName) {
        return true;
      } else {
        console.log("Please enter the name of the Engineer.(Required)");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "engineerId",
    message: "Please enter the Id of the Engineer.(Required)",
    validate: (engineerId) => {
      if (engineerId) {
        return true;
      } else {
        console.log("Please enter the Id of the Engineer.(Required)");
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
    message: "Please enter the name of the Intern.(Required)",
    validate: (internName) => {
      if (internName) {
        return true;
      } else {
        console.log("Please enter the name of the Intern.(Required)");
        return false;
      }
    },
  },

  {
    type: "input",
    name: "internId",
    message: "Please enter the Id of the Intern.(Required)",
    validate: (internId) => {
      if (internId) {
        return true;
      } else {
        console.log("Please enter the Id of the Intern.(Required)");
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

const init = () => inquirer.prompt(managerQuestions);

init().then((managerData) => {
  let { addEmployee } = managerData;
  if (addEmployee === "Engineer") {
    inquirer.prompt(engineerQuestions);
  } else if (addEmployee === "Intern") {
    inquirer.prompt(internQuestions);
  } else if (addEmployee === "Finish Building Team") {
    console.log("Your team is complete!");
  }
});
