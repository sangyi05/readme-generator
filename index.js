// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./develop/utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title.'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe installation instructions.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Include usage information.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Include contribution guidelines.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Include test instructions.'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license for your application.',
            choices: ['MIT', 'Apache License 2.0', 'GNU General Public License v3.0']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your github username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ]  


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err => {
        if (err) throw err;
        
        console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers)
        writeToFile('README.md', generateMarkdown({...answers}))
    })
}
// Function call to initialize app
init();

