const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
      },
      {
          type: 'checkbox',
          message: 'What languages do you know?',
          name: 'stack',
          choices: ['HTML', 'CSS', 'Javascript', 'MySQL'],
      },
      {
          type: 'list',
          message: 'What is your preferred method of communication?',
          name: 'contact',
          choices: ['email','phone', 'telekinesis'],
      },
  ])
  .then((response)=>{
      const filename = `${response.name.toLowerCase().split(' ').join('')}.json`;

      fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
      );
  });