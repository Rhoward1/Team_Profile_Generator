const employee = require('./employee');
const manager = require('./manager');
const engineer = require('./engineer');
const intern = require('./intern');

const addEmployee = employeeInfo => {

    let allCards = "";

    employeeInfo.forEach(employee => {
        
        const { firstName, lastName, id, role }= employee;
        let newEmployee = "";
        let moreInfo = "";


        switch (role) {
            case 'manager':
                newEmployee = new manager(firstName, lastName, id, employee.officeNumber);
                moreInfo = newEmployee.getOfficeNumber();
                break;
            case 'engineer':
                newEmployee = new engineer(firstName, lastName, id, employee.github);
                moreInfo = newEmployee.getGithub();
                break;
            case 'intern':
                newEmployee = new intern(firstName, lastName, id, employee.school);
                moreInfo = newEmployee.getSchool();
                break;
        }
    
        allCards += `
        <div class="col-md-12">
            <div class="card mb-4 shadow-lg">
                <div class="card-body">
                    <h5 class="card-title">${newEmployee.getName()}</h5>
                    <p class="card-text">${newEmployee.getIcon()}  ${newEmployee.getRole()}</p><br>
                    <p class="card-text">${moreInfo}</p>
                    <div class="d-flex justify-content-between align-items-center">                   
                    
                </div>
            </div>
            </div>
        </div>
        `;
    });   

    return allCards;

}

const generatePage = templateData => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/23d5ea6585.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    

    <title>Team Profile</title>

</head>

<body>
    <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container font-weight-bold">
              <h1 class="display-4">{codeEveryDay}</h1>
              <p class="lead">{codeEveryDay}  Team Profile</p>
            </div>
          </div>
    </div>

    <div class="container">
        <div class="row">
          <div class="col-md">
            <!-- CARDS GO HERE -->
                ${addEmployee(templateData)}
            </div>
          </div>
        </div>

    // <i class="fa-regular fa-user-graduate"></i>
    // <i class="fa-regular fa-glasses"></i>
    // <i class="fa-regular fa-mug-hot"></i>
    // <i class="fa-regular fa-briefcase"></i> -->

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
    integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
    crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
    integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
    crossorigin="anonymous"></script>
</body>

</html>
    `

    
}

module.exports = generatePage;

