const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    console.log(this.officeNumber);
    return this.officeNumber;
  }
  getRole() {
    console.log("Manager");
    return "Manager";
  }
}

//const man = new Manager("jeff", 1, "email", 8565775648);

module.exports = Manager;
