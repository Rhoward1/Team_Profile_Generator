const employee = require('./employee');

class engineer extends employee {
    constructor(firstName, lastName, id, github) {

        super(firstName, lastName, id);

        this.github = github;
        this.role = 'engineer';
        this.icon = 'fa-regular fa-glasses';
    };

    getGithub() {
        return `${this.officeNumber}`;
    };


}

module.exports = engineer;