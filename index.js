
const axios = require("axios");
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require("process");
const generateMarkdown = require("./generateMarkdown");
// const generateMarkdown = require("./generateMarkdown");
//const generateMD = require("./generateMarkdown");
//const questions = []



inquirer
    .prompt([
        {
            type: "input",
            name: "title",
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
            message: 'Please choose the correct license for your project',
            choices: ['Apache License 2.0', 'MIT License',
                'Boost Software Licesnse 1.0',
                'Mozilla Public Licesnse 2.0', 'none'],
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
    .then((response) => {
        let badge = ""
        switch (response.license) {
            case 'Apache License 2.0':
                badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
                break;
            case 'MIT License':
                badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
                break;
            case 'Boost Software Licesnse 1.0':
                badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
                break;
            case 'Mozilla Public Licesnse 2.0':
                badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
                break;

        };





        response = {
            badge: badge,
            ...response
        }
        console.log(response)
        const repo = generateMarkdown(response)



        fs.writeFile("README1.md", repo, (err) => {
            if (err) {
                console.log("err: " + err);
            } else {
                console.log("Succesfully created your README.md!! ya da bomb");
            }
        });
    })






















