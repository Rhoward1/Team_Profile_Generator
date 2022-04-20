const Intern = require('../lib/intern');
const intern = new Intern("Json", "Statham", "12345","United Kingdom");

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.firstName).toBe('Json');
    expect(intern.id).toBe('12345');
    expect(intern.email).toBe('Json.Statham@codeEveryDay.com');
    expect(intern.school).toBe('United Kingdom');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Json Statham');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('12345');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('Json.Statham@codeEveryDay.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('intern');
});