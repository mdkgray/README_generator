// variable for inquirer
const inquirer = require('inquirer');

// variable for fs
const fs = require('fs');

// variable for generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown');

// function to validate user input
function validateUserInput(data) {
    if (data != '') {
        return true;
    } else {
        return 'Please enter a response to the question.';
    }
};

// TODO: Create an array of questions for user input for inquirer prompt
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: validateUserInput,
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a short description of your project.',
            validate: validateUserInput,
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Outline how to install the program or any commands needed to initiate the application.',
            validate: validateUserInput,
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Outline how to use this application.',
            validate: validateUserInput,
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for your application.',
            choices: [
                'Apache 2.0',
                'Boost Software 1.0',
                'Eclipse Public License 1.0',
                'GNU AGPL v3',
                'GNU GPL v3',
                'MIT',
                'Mozilla',
            ],
            validate: validateUserInput,
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can users contribute to your application?',
            validate: validateUserInput,
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter any testing instructions for your application.',
            validate: validateUserInput,
        },
        {
            type: 'input',
            name: 'gitUserName',
            message: 'What is your GitHub username?',
            validate: validateUserInput,
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: function(data) {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
                    return true;
                } else {
                    return 'Not a valid email address. Please enter your email again.';
                }
            },
        },
    ]);
};


// const questions = [
//     {
//         type: 'input',
//         name: 'title',
//         message: 'What is the title of your project?',
//         validate: validateUserInput,
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: 'Enter a short description of your project.',
//         validate: validateUserInput,
//     },
//     {
//         type: 'input',
//         name: 'installation',
//         message: 'Outline how to install the program or any commands needed to initiate the application.',
//         validate: validateUserInput,
//     },
//     {
//         type: 'input',
//         name: 'usage',
//         message: 'Outline how to use this application.',
//         validate: validateUserInput,
//     },
//     {
//         type: 'list',
//         name: 'license',
//         message: 'Select a license for your application.',
//         choices: [
//             'Apache 2.0',
//             'Boost Software 1.0',
//             'Eclipse Public License 1.0',
//             'GNU AGPL v3',
//             'GNU GPL v3',
//             'MIT',
//             'Mozilla',
//         ],
//         validate: validateUserInput,
//     },
//     {
//         type: 'input',
//         name: 'contributing',
//         message: 'How can users contribute to your application?',
//         validate: validateUserInput,
//     },
//     {
//         type: 'input',
//         name: 'tests',
//         message: 'Enter any testing instructions for your application.',
//         validate: validateUserInput,
//     },
//     {
//         type: 'input',
//         name: 'gitUserName',
//         message: 'What is your GitHub username?',
//         validate: validateUserInput,
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email address?',
//         validate: function(value) {
//             if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
//                 return true;
//             } else {
//                 return 'Not a valid email address. Please enter your email again.';
//             }
//         },
//     },
// ];

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


// Function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, generateMarkdown(data), function(err) {
//         if (err) {
//             return console.log(err);
//         }
//     });
// }

// // TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then((data) => {
//         console.log(JSON.stringify(data, null, ''));
//         data.renderLicense = renderLicense(data.license);
//         writeToFile('./example/README_example', data);
//     });
// }

const init = () => {
    promptUser()
    .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully generated README.md file!'))
    .catch((err) => console.log(err));
};

// Function call to initialize app
init();