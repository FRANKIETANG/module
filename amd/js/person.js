define(function () {
    class Person {
        constructor(name) {
            this.name = name
        }
        sayHi() {
            console.log(`hello I'm ${this.name}`)
        }
    }
    return Person
})