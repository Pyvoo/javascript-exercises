const sumAll = function(a, b) {
    if (typeof(a) !== "number" || typeof(b) !== "number") // ensure number type
        return "ERROR";
    if (a !== Math.floor(a) || b !== Math.floor(b)) // ensure integer values
        return "ERROR";
    if (a < 0 || b < 0) // ensure positive integers
        return "ERROR";
    
    const start = a <= b ? a : b;
    const end = a > b ? a : b;
    
    let sum = 0;
    for (let i = start; i <= end; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
