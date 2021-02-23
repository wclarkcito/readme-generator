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
    return `#${data.title}
    ##Table of Contents
    ##1.[Installation](#installation)
    ##2.[Usage](#usage)
    ##3.[License](#license)
    ##4.[Contributing](#contributing)
    ##5.[Tests](#tests)
    ##6.[Questions](#questions)
    ##7.[Description](#description)
    
    #Installation<a name="installation"></a>
    ${data.install}

    #Usage<a name="usage"></a>
    ${data.usage}
    
    #License<a name="license"></a>
    ${data.badge}
    #Contributing<a name="contributing"></a>
    ${data.contributing}
    #Tests<a name="tests"></a>
    ${data.tests}
    #Questions<a name="questions"></a>
    *${data.Email}
    *https://github.com/${data.Github}
    #Description<a name="description"></a>
    ${data.description}

    `
}

module.exports = generateMarkdown;