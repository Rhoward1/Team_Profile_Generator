class employee {
    constructor (firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;   
        this.id = id;
        this.email = `${firstName}.${lastName}@codeEveryDay.com`;
        this.role = 'employee';
        this.icon = '<i class="fa-solid fa-briefcase-blank"></i>';

    };


    getName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getId() {
        return `${this.id}`; 
    }

    getEmail() {
        return `${this.email}`;
    }

    getRole() {
        return `${this.role}`;
    }

    getIcon() {
        return `${this.icon}`;
    };



}

module.exports = employee;
