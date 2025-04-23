const sumAll = function(numOne, numTwo) {
    if (Number.isInteger(numOne + numTwo) && numOne * numTwo >= 0) {
        let start;
        let end;
        if (numOne > numTwo) {
            start = numTwo;
            end = numOne;
        }
        else {
            start = numOne;
            end = numTwo;
        }
        result = 0;
        for (let i = start; i <= end; i++) {
            result += i;
        }
        return result;
    }
    else {
        return "ERROR"
    }

}


// Do not edit below this line
module.exports = sumAll;
