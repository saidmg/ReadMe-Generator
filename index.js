// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown')
// An array of questions for user input
const questions = ['What is your project title?', 'Please enter a description of your project.', 'What are the installation instructions for this project?',
    'How would you like your application to be used?', 'Please choose your License', 'Who contributed on this project?',
    'What are the Test Instruction?', 'What is your github username?', 'what is your email address?'
];


// Create a function to initialize app
 function promptUser() {

    return inquirer.prompt([
        {
            type: 'input',
            message: `${questions[0]}`,
            name: 'title'
        },
        {
            type: 'input',
            message: `${questions[1]}`,
            name: 'description'
        },
        {
            type: 'input',
            message: `${questions[2]}`,
            name: 'installation'
        },
        {
            type: 'input',
            message: `${questions[3]}`,
            name: 'usage'
        },
        {
            type: 'list',
            message: `${questions[4]}`,
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "None"
            ],
            name: "license"
        },
        {
            type: 'input',
            message: `${questions[5]}`,
            name: 'contribution'
        },
        {
            type: 'input',
            message: `${questions[6]}`,
            name: 'test'
        },
        {
            type: 'input',
            message: `${questions[7]}`,
            name: 'github'
        },
        {
            type: 'input',
            message: `${questions[8]}`,
            name: 'email'
        }

    ]
    )
}

//  Create a function to write README file

  async function init(){
      try{
          const response = await promptUser();  
          const readMe = generateMarkdown(response);
          await writeFileAsync("Generated-README.md",readMe)
          console.log("Success!")
      }
      catch(err){
          console.log(err)
      }
  }
// Function call to initialize app
init();
