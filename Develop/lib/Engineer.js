const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    console.log(this.github);
    return this.github;
  }
  getRole() {
    console.log("Engineer");
    return "Engineer";
  }
}
/*
const eng = new Engineer("jeff", 1, "email", "jeffsGit");
eng.getGithub();

console.log(eng);
*/

module.exports = Engineer;
