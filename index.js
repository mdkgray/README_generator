// variable for inquirer
const inquirer = require('inquirer');

// variable for fs
const fs = require('fs');

// variable for generateMarkdown.js file
const generateMarkdown = require('./utils/generateMarkdown');

// function to validate user input
function validateUserInput(value) {
    if (value != '') {
        return true;
    } else {
        return 'Please enter a response to the question.';
    }
}

// function to return license badge and link for README.md file
function renderLicense(value) {
    if (value)
}

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
