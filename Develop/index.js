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
      message: 'Provide instructions and examples for use. :',
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
      message: 'Enter your Github profile and email so others can get in touch with you if they have questions or need further clarification about the project',
      name: 'questions',
    },
  ];

  function writeToFile(data) {
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '');
    const fileName = `README.md`;
  
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`${fileName} successfully created!`);
      }
    });
  }

  function init() {
    inquirer.prompt(questions).then((answers) => {
        const READMEContent = generateREADME(answers);
        writeToFile(READMEContent);
    });
  }

  function generateREADME(answers) {
    return `
  # ${answers.title}
  
  ## Description
  ${answers.description || 'No description provided.'}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation || 'No installation instructions provided.'}
  
  ## Usage
  ${answers.usage || 'No usage information provided.'}
  
  ## License
  ![${answers.license} License](https://img.shields.io/badge/license-${encodeURIComponent(answers.license)}-brightgreen)
  
  ${answers.license === 'None' ? '' : `This project is licensed under the ${answers.license} license.`}
  
  ## Contributing
  ${answers.contributing || 'No contribution guidelines provided.'}
  
  ## Tests
  ${answers.tests || 'No test instructions provided.'}
  
  ## Questions
  For questions about this project, contact [${answers.questions}](https://github.com/${answers.questions}) or email at ${answers.questions || 'No email provided.'}.
  `;
  }

  init();
