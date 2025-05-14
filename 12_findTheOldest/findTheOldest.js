const findTheOldest = function(a) {
    let oldestAge = 0;
    let result = {};
    a.forEach(element => {
        let age;
        let yearOfDeath = element.yearOfDeath;
        let yearOfBirth = element.yearOfBirth;

        if (yearOfBirth == undefined) {
            let curDate = new Date;
            yearOfBirth = curDate.getFullYear();
        };

        if (yearOfDeath == undefined) {
            let curDate = new Date;
            yearOfDeath = curDate.getFullYear();

        };

        age = yearOfDeath - yearOfBirth;
        
        if (age > oldestAge) {
            oldestAge = age;
            result = element;
        }
    });
    return result;
};

// Do not edit below this line
module.exports = findTheOldest;
