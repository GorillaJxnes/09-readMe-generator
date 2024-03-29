// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README



// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

inquirer 
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectName'
        },        {
            type: 'input',
            message: 'Please describe your product.',
            name: 'projectDesc'
        },        {
            type: 'input',
            message: 'How do we install/view your product?',
            name: 'installInfo'
        },        {
            type: 'input',
            message: 'How do we utilize your product?',
            name: 'utilInfo'
        },        {
            type: 'input',
            message: 'What command do we use to test your project?',
            name: 'commandInfo'
        },        {
            type: 'list',
            message: 'Which License would you like to use?',
            choices: ['MIT', 'GNU', 'Eclipse'],
            name: 'licenseInfo'
        },        {          
            type: 'input',
            message: 'What is your Github account?',
            name: 'gitInfo'
        },       
        ])

.then((userInput) => {
     let userOutput = `
# ${userInput.projectName}
## Description
---
${userInput.projectDesc}
## Install Info
---
${userInput.installInfo}
## Util Info
---
${userInput.utilInfo}
## Command Info
---
${userInput.commandInfo}
## License Info
---
${userInput.licenseInfo}
## Git Hub Account Info.
---
[${userInput.gitInfo}](https://github.com/${userInput.gitInfo})
    `


    fs.writeFile('README.md', userOutput, (err) =>{
        if (err) {
            console.log('File was not created, try again. stoopid')
        }else {
            console.log('You are not stoopid. The file was made.')
        }
    })
})



// TODO: Create a function to write README file



// TODO: Create a function to initialize app

function init() {}

// Function call to initialize app
init();
