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
            type: 'input',
            name: 'License',
            message: 'What licenses are you using for your project?',
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
            message: 'Please enter any questions',
        },

    ]);
};

const createHTML = ({ Title, Description, TableOfContents, Installation, Usage, License, Contributing })
// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
