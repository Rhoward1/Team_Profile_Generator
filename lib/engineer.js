const employee = require('./employee');

class engineer extends employee {
    constructor(firstName, lastName, id, github) {

        super(firstName, lastName, id);

        this.github = github;
        this.role = 'engineer';
        this.icon = '<i class="fa-solid fa-glasses"></i>';
    };

    getGithub() {
        return `Github: <a href = "https://github.com/${this.github}" target="_blank">  ${this.github}</a>`;
    };


}

module.exports = engineer;