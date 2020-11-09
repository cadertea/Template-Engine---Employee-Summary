var inquirer = require("inquirer");
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");
var render = require("./htmlRenderer");
const fs = require("fs");



const employees = []

function createTeam() {

    inquirer
        .prompt([

            {
                type: "list",
                name: "memberChoice",
                message: "What type of team member are you?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "No more employees"
                ]
            }

        ]).then(userChoice => {
            // pass in the variable
            switch (userChoice.memberChoice) {
                // in case userChoice
                case "Manager":
                    addManager();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                case "Intern":
                    addIntern();
                    break;

                case "No more employees":
                    pass()
                    break

            }
        })

}


function pass() {
    var output = render(employees);
    console.log(output);
    fs.writeFileSync("./output/index.html", output, function (err) {
    console.log("filegenerator")
    if(err){
        throw err
    }

    })


}

function addManager() {

    inquirer
        .prompt([

            {
                type: "input",
                message: "What is your first name?",
                name: "managerName"
            },

            {
                type: "input",
                message: "What is your employee ID?",
                name: "managerID"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "managerEmail"
            },

            {
                type: "input",
                message: "What is your office number?",
                name: "managerOfficeNumber"
            }

        ]).then(userChoice => {
            console.log(userChoice);

            const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)

            employees.push(manager)

            createTeam();

        })


}


function addEngineer() {
    inquirer
        .prompt([

            {
                type: "input",
                message: "What is your first name?",
                name: "engineerName"
            },

            {
                type: "input",
                message: "What is your employee ID?",
                name: "engineerID"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "engineerEmail"
            },

            {
                type: "input",
                message: "What is your GitHub username?",
                name: "gitHubUsername"
            }
        ]).then(userChoice => {
            console.log(userChoice);

            const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.gitHubUsername)

            employees.push(engineer)

            createTeam();

        })
}




function addIntern() {

    inquirer
        .prompt([

            {
                type: "input",
                message: "What is your first name?",
                name: "internName"
            },

            {
                type: "input",
                message: "What is your employee ID?",
                name: "internID"
            },

            {
                type: "input",
                message: "What is your email?",
                name: "internEmail"
            },

            {
                type: "input",
                message: "What is your school?",
                name: "internSchool"
            }
        ]).then(userChoice => {
            console.log(userChoice);

            const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool)

            employees.push(intern)

            createTeam();
        })
}


module.exports = employees

createTeam();
