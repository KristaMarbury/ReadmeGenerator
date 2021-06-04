// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = (answers) =>
      `<!`;

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
        const htmlPageContent = generateHTML(answers);

        fs.writeFile("index.html", htmlPageContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created index.html!")
        );
      });
