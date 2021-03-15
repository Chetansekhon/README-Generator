// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown=require("./utils/generateMarkdown")
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title',
      },

      {
        type: 'input',
        name: 'description',
        message: 'Enter the description for your project',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Please Enter Installation Instructions',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter the description for your project',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter the description for your project',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter the description for your project',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter the description for your project',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter the description for your project',
      },
];

// function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, (err) =>{
         console.log("creating your readme")
         if(err) throw err
     })
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(function(answers){
writeToFile("README.md", generateMarkdown(answers) )
})
}

// function call to initialize program
init();
