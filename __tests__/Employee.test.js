const Employee = require("../lib/Employee");

test ("creates new employee", () => {
    const newEmp = new Employee();
    expect(typeof(newEmp)).toBe("object");
});

test ("creates new employee name", () => {
    const name = "Kiran";
    const newEmp = new Employee(name);
    expect(newEmp.name).toBe(name);
});

test ("creates new employee id", () => {
    const id = 12345;
    const newEmp = new Employee("Kiran", id);
    expect(newEmp.id).toBe(id);
});

test ("creates new employee email", () => {
    const email = "riazk88@yahoo.com";
    const newEmp = new Employee("Kiran", 12345, email);
    expect(newEmp.email).toBe(email);
});

test ("creates name getName()", () => {
    const name = "Kiran";
    const newEmp = new Employee(name);
    expect(newEmp.getName).toBe(name);
});

test ("creates id getID()", () => {
    const id = 12345;
    const newEmp = new Employee("Kiran", id);
    expect(newEmp.getId).toBe(id);
});

test ("creates email getEmail()", () => {
    const email = "riazk88@yahoo.com";
    const newEmp = new Employee("Kiran", 12345, email);
    expect(newEmp.getEmail).toBe(email);
});

test ("creates getRole()", () => {
    const role = "Employee";
    const newEmp = new Employee("Kiran", 12345, "riazk88@yahoo.com");
    expect(newEmp.getRole).toBe(role);
});