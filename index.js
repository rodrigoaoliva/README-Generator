const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
      type: 'input',
      message: 'Enter the project title:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Provide a short description explaining the what, why, and how of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Provide the steps required to install your project?:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use. Include screenshots as needed:',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Enter the license of your project to let other developers know what they can and cannot do with your project:',
      name: 'license',
    },
    {
      type: 'input',
      message: 'List your collaborators, if any, with links to their GitHub profiles:',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Write tests for your application and provide examples on how to run them here:',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Provide information on how others can get in touch with you if they have questions or need further clarification about the project',
      name: 'questions',
    },
  ];

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log(`${fileName} successfully created!`)
    );
  }

  function init() {
    inquirer.prompt(questions).then((answers) => {
        const READMEContent = generateREADME(answers);
        writeToFile('README.md', READMEContent);
    });
  }