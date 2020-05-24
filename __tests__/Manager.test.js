const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test ("creates new Manager", () => {
    const newMan = new Manager();
    expect(typeof(newMan)).toBe("object");
});

test ("creates new Manager name", () => {
    const name = "Lolly";
    const newMan = new Manager(name);
    expect(newMan.name).toBe(name);
});

test ("creates new Manager id", () => {
    const id = 789;
    const newMan = new Manager("Lolly", id);
    expect(newMan.id).toBe(id);
});

test ("creates new Manager email", () => {
    const email = "Lollypop@yahoo.com";
    const newMan = new Manager("Lolly", 789, email);
    expect(newMan.email).toBe(email);
});

test ("creates new Manager office number", () => {
    const officeNumber = "8018880000";
    const newMan = new Manager("Lolly", 789, "Lollypop@yahoo.com", officeNumber);
    expect(newMan.officeNumber).toBe(officeNumber);
});

test ("creates name getName()", () => {
    const name = "Lolly";
    const newMan = new Manager(name);
    expect(newMan.getName).toBe(name);
});

test ("creates id getID()", () => {
    const id = 789;
    const newMan = new Manager("Lolly", id);
    expect(newMan.getId).toBe(id);
});

test ("creates email getEmail()", () => {
    const email = "Lollypop@yahoo.com";
    const newMan = new Manager("Lolly", 789, email);
    expect(newMan.getEmail).toBe(email);
});

test ("creates new Manager getofficeNumber()", () => {
    const officeNumber = 8018880000;
    const newMan = new Manager("Lolly", 789, "Lollypop@yahoo.com", officeNumber);
    expect(newMan.getOfficeNumber).toBe(officeNumber);
});

test ("creates getRole()", () => {
    const role = "Manager";
    const newMan = new Manager("Lolly", 789, "Lollypop@yahoo.com", 8018880000);
    expect(newMan.getRole).toBe(role);
});