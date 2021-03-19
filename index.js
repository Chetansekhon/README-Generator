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
        name: 'Description',
        message: 'Enter the description for your project',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Please Enter Installation Instructions',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Please Enter Usage Information',
      },
      {
        type: 'input',
        name: 'Contribution',
        message: 'Please Enter Contribution Guidelines',
      },
      {
        type: 'input',
        name: 'Test',
        message: 'Please Enter Testing Information',
      },
      {
        type: 'input',
        name: 'Technology',
        message: 'Please Enter Technologies Used',
      },
      {
        type: 'list',
        name: 'License',
        message:"Please select a License ",
        choices:[
        "MIT",
        "Mozilla Public License 2.0",
        "Apache license 2.0"
        ]
      },
      {
        type: 'input',
        name: 'Repository',
        message: 'Please input your repository link',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'Please input your email',
      },
      {
        type: 'input',
        name: 'File',
        message: 'Please input your image file link',
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
