class employee {
    constructor (firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;   
        this.id = id;
        this.email = `${firstName}.${lastName}@codeEveryDay.com`;
        this.role = 'employee';
        this.icon = 'fa-regular fa-briefcase';

    };


    getName() {
        return `${this.firstName} ${this.lastName}`;
    };

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
        return `<i class="fa-regular fa-briefcase"></i>${this.icon}`;
    };



}

module.exports = employee;
