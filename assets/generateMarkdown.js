// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //Artistic License
   //[![License: Artistic - 2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)
  
  //MIT License
   //[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  
  //Share Alike License
   //[![License: CC BY - SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //Artistic License
  //https://opensource.org/licenses/Artistic-2.0

  //MIT License
  //https://opensource.org/licenses/MIT

  //Share Alike License link
  //https://creativecommons.org/licenses/by-sa/4.0/
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (mitLicense) {
    result = 'positive';
  } else 
  return;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
