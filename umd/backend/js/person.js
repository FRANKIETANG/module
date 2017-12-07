(function (gl) {
    class Person {
        constructor(name) {
            this.name = name
        }
        sayHi() {
            console.log(`hello I'm ${this.name}`)
        }
    }

    if (gl.hasOwnProperty('define')) {
        define(function () {
            return Person
        })
    } else if (module != null && typeof module.exports === 'object') {
        module.exports = Person
    } else {
        gl.Person = Person
    }
})(this)