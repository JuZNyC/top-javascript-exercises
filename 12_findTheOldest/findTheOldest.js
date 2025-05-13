const findTheOldest = function(a) {
    let oldestAge = 0;
    let result = {};
    a.forEach(element => {
        let age = element.yearOfDeath - element.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            result = element;
        }
    });
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
