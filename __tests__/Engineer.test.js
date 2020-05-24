const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test ("creates new Engineer", () => {
    const newEng = new Engineer();
    expect(typeof(newEng)).toBe("object");
});

test ("creates new Engineer name", () => {
    const newEng = new Engineer(name);
    const name = "Bob";
    expect(newEng.name).toBe(name);
});

test ("creates new Engineer id", () => {
    const newEng = new Engineer("Bob", id);
    const id = 123;
    expect(newEng.id).toBe(id);
});

test ("creates new Engineer email", () => {
    const newEng = new Engineer("Bob", 123, email);
    const email = "bob@yahoo.com";
    expect(newEng.email).toBe(email);
});

test ("creates new Engineer github", () => {
    const newEng = new Engineer("Bob", 123, "bob@yahoo.com", github);
    const github = "bobo";
    expect(newEng.github).toBe(github);
});

test ("creates name getName()", () => {
    const newEng = new Engineer(name);
    const name = "Bob";
    expect(newEng.getName).toBe(name);
});

test ("creates id getID()", () => {
    const newEng = new Engineer("Bob", id);
    const id = 123;
    expect(newEng.getId).toBe(id);
});

test ("creates email getEmail()", () => {
    const newEng = new Engineer("Bob", 123, email);
    const email = "bob@yahoo.com";
    expect(newEng.getEmail).toBe(email);
});

test ("creates new Engineer getGithub()", () => {
    const newEng = new Engineer("Bob", 123, "bob@yahoo.com", github);
    const github = "bobo";
    expect(newEng.getGithub).toBe(github);
});

test ("creates getRole()", () => {
    const newEng = new Engineer("Bob", 123, "bob@yahoo.com", "bobo");
    const role = "Engineer";
    expect(newEng.getRole).toBe(role);
});