const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test ("creates new Intern", () => {
    const newIn = new Intern();
    expect(typeof(newIn)).toBe("object");
});

test ("creates new Intern name", () => {
    const newIn = new Intern(name);
    const name = "May";
    expect(newIn.name).toBe(name);
});

test ("creates new Intern id", () => {
    const newIn = new Intern("May", id);
    const id = 1288;
    expect(newIn.id).toBe(id);
});

test ("creates new Intern email", () => {
    const newIn = new Intern("May", 1288, email);
    const email = "maya@yahoo.com";
    expect(newIn.email).toBe(email);
});

test ("creates new Intern school", () => {
    const newIn = new Intern("May", 1288, "maya@yahoo.com", school);
    const school = "Yale";
    expect(newIn.school).toBe(school);
});

test ("creates name getName()", () => {
    const newIn = new Intern(name);
    const name = "May";
    expect(newIn.getName).toBe(name);
});

test ("creates id getID()", () => {
    const newIn = new Intern("May", id);
    const id = 1288;
    expect(newIn.getId).toBe(id);
});

test ("creates email getEmail()", () => {
    const newIn = new Intern("May", 1288, email);
    const email = "maya@yahoo.com";
    expect(newIn.getEmail).toBe(email);
});

test ("creates new Engineer getSchool()", () => {
    const newIn = new Intern("May", 1288, "maya@yahoo.com", school);
    const school = "Yale";
    expect(newIn.getSchool).toBe(school);
});

test ("creates getRole()", () => {
    const newIn = new Intern("May", 1288, "maya@yahoo.com", "Yale");
    const role = "Intern";
    expect(newIn.getRole).toBe(role);
});