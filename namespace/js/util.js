(function (global) {
    let namespace = global.MYAPP

    namespace.UTILS = {  // 公有方法
        formatSalary: function(salary) {
            return salary + ' RMB'
        }
    }
})(window)