const repeatString = function(str, nums) {
    let string = "";
    for(let i  = 0; i<nums; i++){
        string = string + str;
    }
    return string;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
