const palindromes = function (a) {
    let cleaned = a.toString();
    cleaned = cleaned.replace(/[^\w\s]/g, '')
    cleaned = cleaned.replaceAll(" ", "");
    cleaned = cleaned.trim();
    cleaned = cleaned.toLowerCase();
    firstHalf = cleaned.slice(0, cleaned.length / 2);
    secondHalf = cleaned.slice(cleaned.length / 2, cleaned.length).split("").reverse().join("");

    for (let i = 0; i < firstHalf.length; i++) {
        if(firstHalf[i] != secondHalf[i]) {
            return false;
        }
    };
    return true;
};

// Do not edit below this line
module.exports = palindromes;

palindromes('A car, a man, a maraca.');
