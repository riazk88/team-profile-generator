const inquirer = require("inquirer");
const fs = require("fs");
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

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

function promptAdd () {
  return inquirer.prompt([
      {
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "addMember",
      choices: ["Engineer", "Intern", "I am finished building my team"]
      .then(function (data) {
        if (data.addMember === "Engineer") {
          return promptEngineer;
        } else if (data.addMember === "Intern") {
          return promptIntern;
        } else {
          return 
        }
      })
      }
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

function renderHTML() {
    const template = render(employees);

    fs.writeFile('./output/team.html', template, function (err) {
      if (err) throw new Error(err);

      console.log('Team Profile Created! Check out team.html in the Output folder to see it!');
    });
}