// external 
const fs = require("fs");
const inquirer = require("inquirer");

// internal
const generateMarkdown = require("./utils/generateMarkdown.js")

// array of questions for user
const questions = [
    {   type: "input",
        name: "title",
        message: "Enter project name.",
    },

    {   type: "input",
        name: "repo",
        message: "Enter GitHub Repo URL.",
    },

    {   type: "input",
        name: "liveURL",
        message: "Enter live URL.",
    },

    {   type: "input",
        name: "description",
        message: "Enter project description.",
    },

    {   type: "input",
        name: "installation",
        message: "Enter project installation instructions.",
    },

    {   type: "input",
        name: "usage",
        message: "Enter project usage.",
    },

    {   type: "input",
        name: "credits",
        message: "Enter any credits for project.",
    },

    {   type: "input",
        name: "license",
        message: "Enter license for project.",
        default: "Copyright (c) 2020 Melanie Bostwick"
    }

];


// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        fs.writeFileSync("generatedREADME.md", generateMarkdown(response) , function (err) {

            if (err) {
                console.log(err)
            }
            else {
                console.log("It works.")
            }
        })
    })
}

// function call to initialize program
init();
