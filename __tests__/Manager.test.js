const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test ("creates new Manager", () => {
    const newMan = new Manager();
    expect(typeof(newMan)).toBe("object");
});

test ("creates new Manager name", () => {
    const newMan = new Manager(name);
    const name = "Lolly";
    expect(newMan.name).toBe(name);
});

test ("creates new Manager id", () => {
    const newMan = new Manager("Lolly", id);
    const id = 789;
    expect(newMan.id).toBe(id);
});

test ("creates new Manager email", () => {
    const newMan = new Manager("Lolly", 789, email);
    const email = "Lollypop@yahoo.com";
    expect(newMan.email).toBe(email);
});

test ("creates new Manager office number", () => {
    const newMan = new Manager("Lolly", 789, "Lollypop@yahoo.com", officeNumber);
    const officeNumber = "8018880000";
    expect(newMan.officeNumber).toBe(officeNumber);
});

test ("creates name getName()", () => {
    const newMan = new Manager(name);
    const name = "Lolly";
    expect(newMan.getName).toBe(name);
});

test ("creates id getID()", () => {
    const newMan = new Manager("Lolly", id);
    const id = 789;
    expect(newMan.getId).toBe(id);
});

test ("creates email getEmail()", () => {
    const newMan = new Manager("Lolly", 789, email);
    const email = "Lollypop@yahoo.com";
    expect(newMan.getEmail).toBe(email);
});

test ("creates new Manager getofficeNumber()", () => {
    const newMan = new Manager("Lolly", 789, "Lollypop@yahoo.com", officeNumber);
    const officeNumber = 8018880000;
    expect(newMan.getOfficeNumber).toBe(officeNumber);
});

test ("creates getRole()", () => {
    const newMan = new Manager("Lolly", 789, "Lollypop@yahoo.com", 8018880000);
    const role = "Manager";
    expect(newMan.getRole).toBe(role);
});