// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown") 
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"Enter Project Title",
        name:"title"
    },
    {
        type:"input",
        message:"Enter ProjectContributor name",
        name:"contributor"
    },
    {
        type:"input",
        message:"Enter Project description",
        name:"description"
    },
    {
        type:"input",
        message:"Enter Project installion",
        name:"installion"
    },
    {
        type:"input",
        message:"Enter Project Testing",
        name:"testing"
    },
    {
        type:"list",
        message:"Enter Project license",
        name:"license",
        choices:["MIT","ISC","GPL","No license","Apache 2.0"]
    },
    {
        type:"input",
        message:"Enter Project GitHub username",
        name:"GitHub"
    },
    {
        type:"input",
        message:"Enter Project Email",
        name:"email"
    },
    {
        type:"input",
        message:"Enter Project Usage",
        name:"usage"
    },
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data),function(err){
        if(err) throw err
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        console.log(response)
        writeToFile("README.md",response)
    })
}

// Function call to initialize app
init();
