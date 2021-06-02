// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

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

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) {}

    // TODO: Create a function to initialize app
    function init() {}

    // Function call to initialize app
    init();

    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created readme!")
    );
  });

//turns out this is not meant to be a question but a functinal nav bar of sorts... 
//    {
//       type: "input",
//       name: "table of contents",
//       message: "What are some bullet points for the content?",
//     },

//when this comes up i chose from a list of liscenses  
//  {
//       type: "input",
//       name: "liscense",
//       message: "How will people use this?",
//     },