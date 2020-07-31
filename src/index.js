const inquirer = require('inquirer')
inquirer
  .prompt([
    {
      type: 'list',
      name: 'projectType',
      message: 'What type of a project are you building?',
      choices: ['React', 'Angular', 'Vue', 'Gatsby', 'Next'],
      default: 'React',
    },
    {
      type: 'list',
      name: 'packageManager',
      message: 'What package manager do you want to use?',
      choices: ['npm', 'yarn', 'brew'],
      default: 'npm',
    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project?',
      default: 'app',
    },
  ])
  .then((answers) => {
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  })
