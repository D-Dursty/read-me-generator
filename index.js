const inquirer = require('inquirer');
const { title } = require('process');
const generateReadMe = require('./utils/generatereadme');

const { writeFile } = require('fs').promises;

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How should your project be installed?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the intended usage for this project, and how should it be used?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'List all contributors to this project',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select a license from the listed options',
        choices: ["MIT", "Apache-2.0",]
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are your instructions for testing?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
          
    ]);
  };

  const init = () => {
    promptUser()
      .then((answers) => writeFile(`yourNewReadme.md`, generateReadMe.printReadMe(answers)))
      .catch((err) => console.error(err));
  };
  
  init();
