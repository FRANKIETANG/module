let Person = require('./person.js')
    UTILS = require('./util.js')

class Employee extends Person {
    constructor(name, salary) {
        super(name)
        this.salary = salary
    }
    work() {
        console.log(`I'm working, My salary is ${UTILS.formatSalary(this.salary)}`)
    }
}
module.exports = Employee
