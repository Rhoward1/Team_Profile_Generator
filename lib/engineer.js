const employee = require('./employee');

class engineer extends employee {
    constructor(firstName, lastName, id, github) {

        super(firstName, lastName, id);

        this.github = github;
        this.role = 'engineer';
        this.icon = '<i class="fa-solid fa-glasses"></i>';
    };

    getGithub() {
        return `Github: ${this.github}`;
    };


}

module.exports = engineer;