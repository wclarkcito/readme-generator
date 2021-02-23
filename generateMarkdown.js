// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
## Table of Contents
## 1.[Installation](#installation)
## 2.[Usage](#usage)
## 3.[License](#license)
## 4.[Contributing](#contributing)
## 5.[Tests](#tests)
## 6.[Questions](#questions)
## 7.[Description](#description)
    
<a name="installation"></a>
# Installation
${data.install}

<a name="usage"></a>
# Usage
${data.usage}

<a name="license"></a>
# License
${data.badge}

<a name="contributing"></a>
# Contributing
${data.contributors}

<a name="tests"></a>
# Tests
${data.tests}

<a name="questions"></a>
# Questions
* ${data.Email}
* https://github.com/${data.Github}

<a name="description"></a>
# Description
${data.description}

`
}

module.exports = generateMarkdown;