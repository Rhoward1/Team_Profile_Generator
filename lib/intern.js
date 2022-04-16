const employee = require('./employee');

class intern extends employee {
    constructor(firstName, lastName, id, school) {

        super(firstName, lastName, id);

        this.school = school;
        this.role = 'intern';
        this.icon = 'fa-regular fa-user-graduate';
    };

    getSchool() {
        return `${this.school}`;
    };


}

module.exports = intern;