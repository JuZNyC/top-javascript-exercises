const repeatString = function(word, num) {
    result = ""
    if (num < 0) {
        result = "ERROR"
    }
    for (let i = 0; i < num; i++){
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
