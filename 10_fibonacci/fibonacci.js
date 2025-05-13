const fibonacci = function(a) {
    let num = parseInt(a);
    let fib = [1,1];

    if (num === 0) {
        return 0;
    };
    if (num === 1 || num === 2) {
        return 1;
    };

    if (num < 0) {
        return "OOPS";
    }
    
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    };
    return fib[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
