const employee = require('./employee');

class manager extends employee {
    constructor(firstName, lastName, id, officeNumber) {

        super(firstName, lastName, id);

        this.officeNumber = officeNumber;
        this.role = 'manager';
        this.icon = 'fa-regular fa-mug-hot';
    };

    getOfficeNumber() {
        return `${this.officeNumber}`;
    };


}

module.exports = manager;







