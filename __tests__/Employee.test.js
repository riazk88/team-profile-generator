const Employee = require("../lib/Employee")

test ("creates new employee", () => {
    const ne = new Employee();
    expect(typeof(ne)).toBe("object");
})

test ("creates new employee name", () => {
    const ne = new Employee(name);
    const name = "Kiran";
    expect(ne.name).toBe(name);
})

test ("creates new employee id", () => {
    const ne = new Employee("Kiran", testValue);
    const testValue = 12345;
    expect(ne.id).toBe(testValue);
})

test ("creates new employee email", () => {
    const ne = new Employee("Kiran", 12345, testValue);
    const testValue = "riazk88@yahoo.com";
    expect(ne.email).toBe(testValue);
})

test ("creates name getName()", () => {
    const ne = new Employee(testValue);
    const testValue = "Kiran";
    expect(ne.getName).toBe(testValue);
})

test ("creates id getID()", () => {
    const ne = new Employee("Kiran", testValue);
    const testValue = 12345;
    expect(ne.getID).toBe(testValue);
})

test ("creates email getEmail()", () => {
    const ne = new Employee("Kiran", 12345, testValue);
    const testValue = "riazk88@yahoo.com";
    expect(ne.getEmail).toBe(testValue);
})

test ("creates getRole()", () => {
    const ne = new Employee("Kiran", 12345, "riazk88@yahoo.com");
    const name = "Employee";
    expect(ne.getRole).toBe(testValue);
})