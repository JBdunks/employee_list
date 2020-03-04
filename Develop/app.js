const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employeeList = [];

const starter = [
  {
    type: "list",
    message: "Would you like to form  a team?",
    name: "start",
    choices: ["Yes", "No"]
  }
];
// gets employee type
const nextEmployee = [
  {
    type: "list",
    message: "What kind of employee would you like to enter?",
    name: "empType",
    choices: ["Engineer", "Intern"]
  }
];
const anotherEmp = [
  {
    type: "list",
    message: "Would you like to add another Employee?",
    name: "another",
    choices: ["Yes", "No"]
  }
];
// manager specific questions
const nextManager = [
  {
    type: "input",
    message: "Manager Name:",
    name: "name"
  },
  {
    type: "input",
    message: " Manager ID number:",
    name: "id"
  },
  {
    type: "input",
    message: " Manager Email Address:",
    name: "email"
  },
  {
    type: "input",
    message: " Manager Phone Number:",
    name: "officeNumber"
  }
];

//intern questions
const nextIntern = [
  {
    type: "input",
    message: "Intern Name:",
    name: "name"
  },
  {
    type: "input",
    message: " InternID number:",
    name: "id"
  },
  {
    type: "input",
    message: " Intern Email Address:",
    name: "email"
  },
  {
    type: "input",
    message: "Intern School:",
    name: "school"
  }
];

//engineer questions
const nextEngineer = [
  {
    type: "input",
    message: "Engineer Name:",
    name: "name"
  },
  {
    type: "input",
    message: "Engineer ID number:",
    name: "id"
  },
  {
    type: "input",
    message: "Engineer Email Address:",
    name: "email"
  },
  {
    type: "input",
    message: "Engineer GitHub:",
    name: "github"
  }
];
//make manager
function makeManager() {
  inquirer.prompt(nextManager).then(function(answers) {
    let newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employeeList.push(newManager);
    employeeType();
  });
}
//make engineer
function makeEngineer() {
  inquirer.prompt(nextEngineer).then(function(answers) {
    let newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    employeeList.push(newEngineer);
    another();
  });
}
//make intern
function makeIntern() {
  inquirer.prompt(nextIntern).then(function(answers) {
    let newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.school
    );
    employeeList.push(newIntern);
    another();
  });
}

/// determine type of employee
function employeeType() {
  inquirer.prompt(nextEmployee).then(function(answers) {
    console.log(answers.empType);

    if (answers.empType === "Intern") {
      makeIntern();
    } else {
      makeEngineer();
    }
  });
}
//start it off!!
function start() {
  inquirer.prompt(starter).then(function(answers) {
    if (answers.start === "Yes") {
      makeManager();
    } else {
      console.log("Maybe some other time.");
    }
  });
}
//add another emplyee
function another() {
  inquirer.prompt(anotherEmp).then(function(answers) {
    if (answers.another === "Yes") {
      employeeType();
    } else {
      console.log(employeeList);
    }
  });
}

start();
