// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please describe your project',
        },
        {
            type: 'input',
            name: 'TableOfContents',
            message: 'Please add your table of contents',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please include any information about the installation of your project',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Please include any information on the usage of your project',
        },
        {
            type: 'list',
            message: 'What type of license would you like to use?',
            name: 'License',
            choices: ['MIT', 'IBM', 'Mozilla'],
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Please enter the resources used or the names of any people who helped',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Please enter any information on testing',
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Please enter your GitHub username for any questions',
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Please enter your email for any questions',
        },

    ]);
};

const createHTML = ({ Title, Description, TableOfContents, Installation, Usage, License, Contributing, Tests, Questions, Questions }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <main>
        <h1 id="username"></h1>
        <h2>I live in </h2>
        <h2>bio</h2>
        <p></p>
    </main>
    <footer>
        <h4><a href="#"></a></h4>
        <h4><a href="#"></a></h4>
    </footer>
</body>
</html>`;
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
