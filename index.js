// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = (answers) =>
`# ${answers.name}

# Built by ${answers.githubname}

#Table of Contents:


# Description
 ${answers.description}

# Usage
 ${answers.usage}

# Installation Requirements
 ${answers.installation}

# Contributing
${answers.contributing}

# Tests
${answers.tests}

# License


# Contact Information
Send an email to ${answers.email} to learn more!`;

inquirer([
        {
        type: "input",
        name: "githubname",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "name",
        message: "What is the name of the repository?",
    },
    {
        type: "input",
        name: "email",
        message: "What email can you be contacted by?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the goal of this site?",
    },
    {
        type: "input",
        name: "installation",
        message: "How will other devs download this?",
    },
    {
        type: "input",
        name: "usage",
        message: "How will people use this?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the guidelines for dev contribution?",
    },
    {
        type: "input",
        name: "tests",
        message: "What are the test instructions?",
    },
    ])
      .then((answers) => {
        const readMeContent = generateHTML(answers);

        fs.writeFile("ReadMe", readMeContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created a good ReadMe!")
        );
      });
