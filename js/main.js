class Person {
    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log(`hello I'm ${this.name}`)
    }
}

class Employee extends Person {
    constructor(name, salary) {
        super(name)
        this.salary = salary
    }
    work() {
        console.log(`I'm working, My salary is ${formatSalary(this.salary)}`)
    }
}

function formatSalary(salary) {
    return salary + ' RMB'
}

let frankie = new Employee('frankie', 5000)
frankie.sayHi() // hello I'm frankie
frankie.work() // I'm working, My salary is 5000 RMB





// function Person(name) {
//     this.name = name
// }

// Person.prototype.sayHi = function () {
//     console.log(`hello I'm ${this.name}`)
// }

// function Employee(name, salary) {
//     Person.call(this, name)
//     this.salary = salary
// }

// Employee.prototype = Object.create(Person.prototype)
// Employee.prototype.constructor = Employee
// Employee.prototype.work - function () {
//     console.log(`I'm working, My salary is ${formatSalary(this.salary)}`)
// }

// function formatSalary(salary) {
//     return salary + ' RMB'
// }