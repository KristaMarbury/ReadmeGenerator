//packages required below
const inquirer = require("inquirer");
const fs = require("fs");

//generateReadMe 
const generateReadMe = (answers) =>
  `*${answers.licenseBadge}
  
# ${answers.name}

#Table of Contents:
<a href="">Description<a>
<a href="">Usage<a>
<a href="">Installation<a>
<a href="">Contributing<a>
<a href="">Tests<a>
<a href="">Questions<a>

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
${answers.licenseLink}
${answers.licenseSection}

# Questions
Built by ${answers.github}
Send an email to ${answers.email} to learn more!`;

//using inquirer to prompt user
inquirer
    .prompt([
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
        //taking the input and pushing it to the document
        const readMeContent = generateReadMe(answers);

        fs.writeFile("ReadMe.MD", readMeContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created a good ReadMe!")
        );
      });
