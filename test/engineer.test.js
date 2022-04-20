const Engineer = require('../lib/engineer');
const engineer = new Engineer("Json", "Statham", "12345","Json.Statham@codeEveryDay.com");

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.firstName).toBe("Json");
    expect(engineer.id).toBe('12345');
    expect(engineer.email).toBe('Json.Statham@codeEveryDay.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Json Statham');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('12345');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('Json.Statham@codeEveryDay.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('engineer');
});