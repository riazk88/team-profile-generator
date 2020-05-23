const inquirer = require("inquirer");
// const Employee = require("./Employee.js");
// const Engineer = require("./Engineer.js");
// const Intern = require("./Intern.js");
// const Manager = require("./Manager.js");

function promptManager () {
    return inquirer.prompt([
      /* Pass your questions in here */
      {
          type: "input",
          message: "What is manager's name?",
          name: "name",
        },{
          type: "input",
          message: "What is manager's ID number?",
          name: "id",
        },{
          type: "input",
          message: "What is manager's email?",
          name: "email",
        },{
          type: "input",
          message: "What is manager's office number?",
          name: "officeNumber",
        },
    ])
};

function promptEngineer () {
    return inquirer.prompt([
      /* Pass your questions in here */
      {
          type: "input",
          message: "What is Engineer's name?",
          name: "name",
        },{
          type: "input",
          message: "What is Engineer's ID number?",
          name: "id",
        },{
          type: "input",
          message: "What is Engineer's email?",
          name: "email",
        },{
          type: "input",
          message: "What is Engineer's GitHub username?",
          name: "github",
        },
    ])
};

function promptIntern () {
    return inquirer.prompt([
      /* Pass your questions in here */
      {
          type: "input",
          message: "What is Intern's name?",
          name: "name",
        },{
          type: "input",
          message: "What is Intern's ID number?",
          name: "id",
        },{
          type: "input",
          message: "What is Intern's email?",
          name: "email",
        },{
          type: "input",
          message: "What is the name of Intern's school?",
          name: "school",
        },
    ])
};

function promptAdd () {
    return inquirer.prompt([
        {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "addMember",
        choices: ["Engineer", "Intern", "I am finished building my team"]
        }
    ])
}


  