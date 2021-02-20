const axios = require("axios");
const fs = require('fs');
const inquirer = require('inquirer');
//const generateMD = require("./generateMarkdown");
//const questions = []



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
            message: 'Please choose the correct license for your project',
            choices: ['Apache License 2.0', 'GNU General Pubic License v3.0', 'MIT License',
                'BSD 2-Clause "Simplified"License', 'BSD 3-Clause "New" or "Revised" License',
                'Boost Software Licesnse 1.0', 'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0', 'GNU Lesser General Public Licesnse v2.1',
                'Mozilla Public Licesnse 2.0', 'The Unilicense', 'none'],
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
        axios.get(`https://api.github.com/users${response.Github}`).then(function (answers) {

            console.log(answers);
            const md = `
            # ${answers.repoTitle} \n
            
            ###### ${answers.description} \n
    
            
            
            `;

            fs.writeFile("README.md", md, (err) => {
                if (err) {
                    console.log("err: " + err);
                } else {
                    console.log("Succesfully created your README.md!! ya da bomb");
                }
            });

        });


    });


















