
const fs = require('fs');
const inquirer = require('inquirer');
const questions = []



inquirer
    .prompt([
        {
            type: "input",
            name: "repoTitle",
            message: 'What is the name of your Repository?'
        },
        {
            type: "input",
            name: "description",
            message: 'Please enter a description of your project'
        },
        {
            type: "input",
            name: "install",
            message: 'Please provide installation instructions'
        },
        {
            type: "input",
            name: "usage",
            message: 'Please provide Usage information'
        },
        {
            type: "input",
            name: "contributors",
            message: 'Who contributed to your project?'
        },
        {
            type: "list",
            name: "license",
            message: 'Please choose the correct license for your project'
        },
        {
            type: "input",
            name: "tests",
            message: 'What tests did you run?'
        },
        {
            type: "input",
            name: "Github",
            message: 'What is your Github profile name?'
        },
        {
            type: "input",
            name: "Email",
            message: 'What is your Email address?'
        }

    ])
    .then((answers) => {
        console.log(answers);
    })


















