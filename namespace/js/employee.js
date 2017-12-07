(function (global) {

    let namespace = global.MYAPP  // 因为 Person.js 是先引的所以 global.MYAPP
    let Person = namespace.Person  // 引入 Person
    let formatSalary = namespace.UTILS.formatSalary

    class Employee extends Person {
        constructor(name, salary) {
            super(name)
            this.salary = salary
        }
        work() {
            console.log(`I'm working, My salary is ${formatSalary(this.salary)}`)
        }
    }
    
    namespace.Employee = Employee  // 导出 Employee

})(window)