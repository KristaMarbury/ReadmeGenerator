//packages required below
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./assets/generateMarkdown");

//using inquirer to prompt user
inquirer
  .prompt([
    {
      type: "input",
      name: "githubname",
      message: "What is your github username?",
      default: "k-leigh",
    },
    {
      type: "input",
      name: "name",
      message: "What is the name of the repository?",
      default: "readmegenerator",
    },
    {
      type: "input",
      name: "email",
      message: "What email can you be contacted by?",
      default: "laetaiustus@gmail.com",
    },
    {
      type: "input",
      name: "description",
      message: "What is the goal of this site?",
      default: "generate a reliable readme",
    },
    {
      type: "input",
      name: "installation",
      message: "How will other devs download this?",
      default: "fork this and then try it out in the terminal",
    },
    {
      type: "input",
      name: "usage",
      message: "How will people use this?",
      default: "depends on the person",
    },
    {
      type: "input",
      name: "contributing",
      message: "What are the guidelines for dev contribution?",
      default: "think of me kindly devs!",
    },
    {
      type: "input",
      name: "tests",
      message: "What are the test instructions?",
      default: "send good vibes",
    },
    {
      type: "list",
      name: "license",
      message: "What license do you want?",
      choices: ["Artistic%202.0", "MIT", "Apache%202.0", "none"],
    },
  ])
  .then((answers) => {
    //taking the input and pushing it to the document
    const readMeContent = generateMarkdown(answers);

    fs.writeFile("ReadMe.MD", readMeContent, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully created a good ReadMe!")
    );
  });
