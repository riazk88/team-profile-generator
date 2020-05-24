const Employee = require("../lib/Employee");

test ("creates new employee", () => {
    const newEmp = new Employee();
    expect(typeof(newEmp)).toBe("object");
});

test ("creates new employee name", () => {
    const newEmp = new Employee(name);
    const name = "Kiran";
    expect(newEmp.name).toBe(name);
});

test ("creates new employee id", () => {
    const newEmp = new Employee("Kiran", id);
    const id = 12345;
    expect(newEmp.id).toBe(id);
});

test ("creates new employee email", () => {
    const newEmp = new Employee("Kiran", 12345, email);
    const email = "riazk88@yahoo.com";
    expect(newEmp.email).toBe(email);
});

test ("creates name getName()", () => {
    const newEmp = new Employee(name);
    const name = "Kiran";
    expect(newEmp.getName).toBe(name);
});

test ("creates id getID()", () => {
    const newEmp = new Employee("Kiran", id);
    const id = 12345;
    expect(newEmp.getId).toBe(id);
});

test ("creates email getEmail()", () => {
    const newEmp = new Employee("Kiran", 12345, email);
    const email = "riazk88@yahoo.com";
    expect(newEmp.getEmail).toBe(email);
});

test ("creates getRole()", () => {
    const newEmp = new Employee("Kiran", 12345, "riazk88@yahoo.com");
    const role = "Employee";
    expect(newEmp.getRole).toBe(role);
});