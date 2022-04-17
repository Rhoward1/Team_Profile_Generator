const employee = require('./employee');

class manager extends employee {
    constructor(firstName, lastName, id, officeNumber) {

        super(firstName, lastName, id);

        this.officeNumber = officeNumber;
        this.role = 'manager';
        this.icon = '<i class="fa-solid fa-mug-hot"></i>';
    };

    getOfficeNumber() {
        return `Office Number: ${this.officeNumber}`;
    };


}

module.exports = manager;







