const inquirer = require('inquirer');
const fs = require('fs');

const generatePage = require('./lib/mainTemplate');

const allEmployees = [];

const questions = [
    {

        type: 'list',
        name: 'role',
        message: 'What is the Employees role?',

        choices: () => {
            if (allEmployees.some(employee => employee.role === 'manager')) {
                return ['engineer', 'intern']
            } else {
                return ['manager', 'engineer', 'intern']
            }
        }
    },

    {
        type: 'input',
        name: 'firstName',
        message: 'What is the Employees first name?',

    },

    {
        type: 'input',
        name: 'lastName',
        message: 'What is the Employees last name?',
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the Employees id?',
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Managers office number?',
        when: ({ role }) => {
            if (role === 'manager') {
                return true
            } else {
                return false
            }
        }
    },
    
    {
        type: 'input',
        name: 'github',
        message: 'What is the Engineers github username?',
        when: ({ role }) => {
            if (role === 'engineer') {
                return true
            } else {
                return false
            }
        }
    },
    
    {
        type: 'input',
        name: 'school',
        message: 'What is the Interns school?',
        when: ({ role }) => {
            if (role === 'intern') {
                return true
            } else {
                return false
            }
        }
    },

    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Are there any additional employees to add?',
        default: true,
    }

      
]

    const promptUser = () => {

        return inquirer.prompt(questions)
            .then(userResponse => {
                
            allEmployees.push(userResponse);

            if (userResponse.addEmployee) {
                return promptUser()
            } else {            
                return allEmployees
            }

        })
    }

const writePage = (pageContent) => {
    fs.writeFile('./dist/index.html', pageContent, (err) =>{
        if (err) {
            console.log(err)
        } else {
            console.log('Successfully created index.html')
        }
    })
}

promptUser()

    .then(data => generatePage(data))
    .then(generateHtml => writePage(generateHtml))
    .catch(err => console.log(err))




        







    

    
   
