const Manager = require('../lib/manager');
const manager = new Manager("Json", "Statham", "12345",);

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.firstName).toBe('Json');
    expect(manager.id).toBe('12345');
    expect(manager.email).toBe('Json.Statham@codeEveryDay.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Json Statham');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('12345');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('Json.Statham@codeEveryDay.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('manager');
});