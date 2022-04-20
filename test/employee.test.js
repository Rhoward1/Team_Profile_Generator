const Employee = require("../lib/employee");


const employee = new Employee("Json", "Statham", "12345","Json.Statham@codeEveryDay.com");

test('test to get constructor values for the object', () => {
    expect(employee.getName()).toBe("Json Statham");
    expect(employee.getId()).toBe("12345");
    expect(employee.getEmail()).toBe("Json.Statham@codeEveryDay.com");
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Json Statham');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('12345');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('Json.Statham@codeEveryDay.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('employee');
});