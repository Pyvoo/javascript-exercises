const reverseString = function(input) {
    let ans = "";
    for (let i = input.length-1; i >= 0; i--)
        ans += input[i];
    return ans;
};

// Do not edit below this line
module.exports = reverseString;
