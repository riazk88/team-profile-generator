const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test ("creates new Engineer", () => {
    const newEng = new Engineer();
    expect(typeof(newEng)).toBe("object");
});

test ("creates new Engineer name", () => {
    const name = "Bob";
    const newEng = new Engineer(name);
    expect(newEng.name).toBe(name);
});

test ("creates new Engineer id", () => {
    const id = 123;
    const newEng = new Engineer("Bob", id);
    expect(newEng.id).toBe(id);
});

test ("creates new Engineer email", () => {
    const email = "bob@yahoo.com";
    const newEng = new Engineer("Bob", 123, email);
    expect(newEng.email).toBe(email);
});

test ("creates new Engineer github", () => {
    const github = "bobo";
    const newEng = new Engineer("Bob", 123, "bob@yahoo.com", github);
    expect(newEng.github).toBe(github);
});

test ("creates name getName()", () => {
    const name = "Bob";
    const newEng = new Engineer(name);
    expect(newEng.getName).toBe(name);
});

test ("creates id getID()", () => {
    const id = 123;
    const newEng = new Engineer("Bob", id);
    expect(newEng.getId).toBe(id);
});

test ("creates email getEmail()", () => {
    const email = "bob@yahoo.com";
    const newEng = new Engineer("Bob", 123, email);
    expect(newEng.getEmail).toBe(email);
});

test ("creates new Engineer getGithub()", () => {
    const github = "bobo";
    const newEng = new Engineer("Bob", 123, "bob@yahoo.com", github);
    expect(newEng.getGithub).toBe(github);
});

test ("creates getRole()", () => {
    const role = "Engineer";
    const newEng = new Engineer("Bob", 123, "bob@yahoo.com", "bobo");
    expect(newEng.getRole).toBe(role);
});