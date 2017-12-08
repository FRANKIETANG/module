import Person from './person.js'
import formatSalary from './util.js'

export default class Employee extends Person {
    constructor(name, salary) {
        super(name)
        this.salary = salary
    }
    work() {
        console.log(`I'm working, My salary is ${formatSalary(this.salary)}`)
    }
}
