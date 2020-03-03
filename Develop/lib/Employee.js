class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    console.log(this.name);
    return this.name;
  }
  getId() {
    console.log(this.id);
    return this.id;
  }
  getEmail() {
    console.log(this.email);
    return this.email;
  }
  getRole() {
    console.log("Employee");
    return "Employee";
  }
}

const first = new Employee("jeff", 12, "email@email.com");

module.exports = Employee;

//first.getRole();
//first.getEmail();
