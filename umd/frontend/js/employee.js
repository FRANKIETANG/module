define(['./person', './util'], function (Person, UTILS) {
    class Employee extends Person {
        constructor(name, salary) {
            super(name)
            this.salary = salary
        }
        work() {
            console.log(`I'm working, My salary is ${UTILS.formatSalary(this.salary)}`)
        }
    }
    return Employee
})