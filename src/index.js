const inquirer = require("inquirer");
const fs = require("fs");
const cra = require("./scripts/react");
const vue = require("./scripts/vue");

const existingConfig = fs.existsSync("package.json");
let content = "";

if (existingConfig) {
	console.log("You need to be out of your project directory");
} else {
	inquirer
		.prompt([
			{
				type: "list",
				name: "projectType",
				message: "What type of a project are you building?",
				choices: ["React", "Angular", "Vue", "Gatsby", "Next"],
				default: "React",
			},
			{
				type: "list",
				name: "packageManager",
				message: "What package manager do you want to use?",
				choices: ["npm", "yarn"],
				default: "npm",
			},
			{
				type: "input",
				name: "projectName",
				message: "What is the name of your project?",
				default: "app",
			},
		])
		.then((answers) => {
			console.log(answers);
			if (answers.projectType === "React") {
				cra.CreateReactApp(answers.projectName, answers.packageManager);
			} else if (answers.projectType === "Vue") {
				vue.VueCreate(answers.projectName);
			}
		})
		.catch((error) => {
			if (error.isTtyError) {
				// Prompt couldn't be rendered in the current environment
			} else {
				// Something else when wrong
			}
		});
}
