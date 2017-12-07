function Person(name) {
    this.name = name
}

Person.prototype.sayHi = function () {
    console.log(`hello I'm ${this.name}`)
}

test.exports = Person