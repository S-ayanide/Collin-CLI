#! /usr/bin/env node

const inquirer = require("inquirer");
const fs = require("fs");
const cra = require("./scripts/react");
const vue = require("./scripts/vue");
const gatsby = require("./scripts/gastby");
const github = require("./scripts/github");
const { version } = require("../package.json");

const args = process.argv;
if (args[2] === "--version") {
  console.log(`v${version}`);
}

const existingConfig = fs.existsSync("package.json");

if (args.length === 2) {
  if (existingConfig) {
    console.log("You need to be out of your project directory");
  } else {
    inquirer
      .prompt([
        {
          type: "list",
          name: "projectType",
          message: "What type of a project are you building?",
          choices: ["React", "Gatsby", "Vue"],
          default: "React",
        },
        {
          type: "list",
          name: "packageManager",
          message: "What package manager do you want to use?",
          choices: ["npm", "yarn"],
          when: (answers) => answers.projectType !== "Vue",
          default: "npm",
        },
        {
          type: "input",
          name: "projectName",
          message: "What is the name of your project?",
          default: "app",
        },
        {
          type: "confirm",
          name: "isGithub",
          message: "Would you like to publish you application on GitHub?",
          default: false,
        },
        {
          type: "input",
          name: "githubUsername",
          message: "What is your GitHub Username(For-example: Frozen-Egg)?",
          when: (answers) => answers.isGithub === true,
        },
        {
          type: "input",
          name: "repoName",
          message: "What would you like to name the GitHub repository?",
          when: (answers) => answers.isGithub === true,
          default: (answers) => answers.projectName,
        },
        {
          type: "input",
          name: "projectDescription",
          message: "Describe your project in brief:",
          when: (answers) => answers.isGithub === true,
          default: "A GitHub Project",
        },
      ])
      .then((answers) => {
        if (answers.projectType === "React") {
          cra.CreateReactApp(answers.projectName, answers.packageManager);
        } else if (answers.projectType === "Gatsby") {
          gatsby.GatsbyNew(answers.projectName, answers.packageManager);
        } else if (answers.projectType === "Vue") {
          vue.VueCreate(answers.projectName);
        }
        if (answers.isGithub) {
          github.DeployToGitHub(
            answers.repoName,
            answers.projectName,
            answers.githubUsername,
            answers.projectDescription
          );
        }
      })
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
          console.log(
            "Prompt couldn't be rendered in the current environment: ",
            error
          );
        } else {
          // Something else when wrong
          console.log("Something Went Wrong: ", error);
        }
      });
  }
} else if (args.length > 2 && args[2] !== "--version") {
  console.log("Please only provide defined arguments");
}
