const repeatString = function(str, count) {
    if (count < 0) return "ERROR";
    
    let ans = "";
    for (let i = 0; i < count; i++)
        ans += str;
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
