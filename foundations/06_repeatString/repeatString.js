const repeatString = function(str, nums) {
    if(times < 0) return "ERROR";
    let string = "";
    for(let i  = 0; i<nums; i++){
        string = string + str;
    }
    return string;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
