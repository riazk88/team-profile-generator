const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test ("creates new Intern", () => {
    const newIn = new Intern();
    expect(typeof(newIn)).toBe("object");
});

test ("creates new Intern name", () => {
    const name = "May";
    const newIn = new Intern(name);
    expect(newIn.name).toBe(name);
});

test ("creates new Intern id", () => {
    const id = 1288;
    const newIn = new Intern("May", id);
    expect(newIn.id).toBe(id);
});

test ("creates new Intern email", () => {
    const email = "maya@yahoo.com";
    const newIn = new Intern("May", 1288, email);
    expect(newIn.email).toBe(email);
});

test ("creates new Intern school", () => {
    const school = "Yale";
    const newIn = new Intern("May", 1288, "maya@yahoo.com", school);
    expect(newIn.school).toBe(school);
});

test ("creates name getName()", () => {
    const name = "May";
    const newIn = new Intern(name);
    expect(newIn.getName).toBe(name);
});

test ("creates id getID()", () => {
    const id = 1288;
    const newIn = new Intern("May", id);
    expect(newIn.getId).toBe(id);
});

test ("creates email getEmail()", () => {
    const email = "maya@yahoo.com";
    const newIn = new Intern("May", 1288, email);
    expect(newIn.getEmail).toBe(email);
});

test ("creates new Engineer getSchool()", () => {
    const school = "Yale";
    const newIn = new Intern("May", 1288, "maya@yahoo.com", school);
    expect(newIn.getSchool).toBe(school);
});

test ("creates getRole()", () => {;
    const role = "Intern";
    const newIn = new Intern("May", 1288, "maya@yahoo.com", "Yale")
    expect(newIn.getRole).toBe(role);
});