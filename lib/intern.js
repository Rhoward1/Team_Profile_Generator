const employee = require('./employee');

class intern extends employee {
    constructor(firstName, lastName, id, school) {

        super(firstName, lastName, id);

        this.school = school;
        this.role = 'intern';
        this.icon = '<i class="fa-solid fa-user-graduate"></i>';
    };

    getSchool() {
        return `School Attended: ${this.school}`;
    };


}

module.exports = intern;