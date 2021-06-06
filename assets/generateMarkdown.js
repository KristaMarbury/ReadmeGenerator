// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "none") {
     return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } return ""
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "none") {
     return `\n* [License](#license)\n`;
  } return ""
}

function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ${renderLicenseBadge(answers.license)}
  
# ${answers.name}

## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(answers.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
 ${answers.description}

## Usage
 ${answers.usage}

## Installation
 ${answers.installation}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

${renderLicenseSection(answers.license)}
${renderLicenseBadge(answers.license)}

## Questions
Built by ${answers.github}
Send an email to ${answers.email} to learn more!`;
}

module.exports = generateMarkdown;
