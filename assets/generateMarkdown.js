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

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

`;
}

module.exports = generateMarkdown;
