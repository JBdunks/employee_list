const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    console.log(this.school);
    return this.school;
  }
  getRole() {
    console.log("Intern");
    return "Intern";
  }
}
/*
const int = new Intern("guy", 22, "email", "School of Hard Knocks");

int.getRole();
console.log(int);
int.getSchool();
*/

module.exports = Intern;
