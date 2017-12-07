(function (global) {

    let Employee = global.MYAPP.Employee  // 引入 Employee
    let frankie = new Employee('frankie', 5000)
    frankie.sayHi() // hello I'm frankie
    frankie.work() // I'm working, My salary is 5000 RMB

})(window)






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