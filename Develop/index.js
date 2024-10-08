// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

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
            choices: [
                "MIT", 
                "IBM", 
                "Mozilla"
            ],
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
            name: 'Questions2',
            message: 'Please enter your email for any questions',
        },

    ]);
};

const generateHTML = ({ Title, Description, TableOfContents, Installation, Usage, License, Contributing, Tests, Questions, Questions2 }) =>
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
    <title>README</title>
</head>
<body>
    <main>
        <h1>${Title}</h1>
        <h2>Description</h2>
        <p>${Description}</p>
        <h2>Table of Contents</h2>
        <p>${TableOfContents}</p>
        <h2>Installation</h2>
        <p>${Installation}</p>
        <h2>Usage</h2>
        <p>${Usage}</p>
        <h2>License</h2>
        <p>${License}</p>
        <h2>Contributing</h2>
        <p>${Contributing}</p>
        <h2>Tests</h2>
        <p>${Tests}</p>
        <h2>Questions</h2>
        <a href=${Questions}>GitHub Link</a>
        <h2>Questions</h2>
        <p>Please email me for any further questions at ${Questions2}</p>
    </main>
</body>
</html>`;
// TODO: Create a function to write README file


// TODO: Create a function to initialize app
const init = () => { 
    questions()
        .then((answers) => writeFile('index.html', generateHTML(answers)))
        .then(() => console.log('index.html has been created'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
