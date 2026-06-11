const reverseString = function(str) {
    let reversedString = str.split("").reverse().join("");
    return reversedString;
};

console.log(reverseString("Hello"));

// Do not edit below this line
module.exports = reverseString;
