let fs = require('fs')

let modul = (function () {
    let mod = {
        exports: {}
    }
    function myrequire(filePath) {
        let fnInText = fs.readFileSync(filePath, 'utf8')
        let fn = new Function('test', fnInText)
        fn(mod)
    }

    myrequire('./person.js')

    return mod
})()

let Person = modul.exports
let frankie = new Person('frankie')
frankie.sayHi()