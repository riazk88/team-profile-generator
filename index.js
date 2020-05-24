const inquirer = require("inquirer");
const fs = require("fs");
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderHTML = require("./dist/generateHTML");
const employees = [];

function promptUser () {
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
    .then(data => {
      const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
      employees.push(manager)
      promptAdd()
    })
};

function promptAdd () {
  return inquirer.prompt([
      {
      type: "list",
      message: "Which type of team member would you like to add?",
      name: "addEmployee",
      choices: ["Engineer", "Intern", "I am finished building my team"]
      }
  ])
      .then(function (data) {
        if (data.addEmployee === "Engineer") {
          promptEngineer();
        } else if (data.addEmployee === "Intern") {
          promptIntern();
        } else {
          promptFinish();
        }
      });
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
    .then(function(data) {
      const engineer = new Engineer(data.name, data.id, data.email, data.github)
      employees.push(engineer)
      promptAdd()
    })
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
    .then(function(data) {
      const intern = new Intern(data.name, data.id, data.email, data.school)
      employees.push(intern)
      promptAdd()
    })
};

function promptFinish() {
  console.log("Team Profile Created! Check out team.html in the Output folder to see it!")
}

promptUser();

// promptUser()
//   .then(data => {
//   fs.writeFile("./output/team.html", renderHTML(data), (error) => {
//   console.log("Team Profile Created! Check out team.html in the output folder to see it!");
//   });
// });