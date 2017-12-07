(function (global) {
    class Person {
        constructor(name) {
            this.name = name
        }
        sayHi() {
            console.log(`hello I'm ${this.name}`)
        }
    }

    let namespace = global.MYAPP = global.MYAPP || {}  // 初始化
    namespace.Person = Person  // 导出 Person

})(window)