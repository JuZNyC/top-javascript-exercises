const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let sum = 0;
  for (i in a) {
    sum += a[i];
  };
  return sum;
};

const multiply = function(a) {
  let total = 1;
  for (i in a) {
    total *= a[i];
  };
  return total;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let total = 1;
  if (a === 0 || a === 1) {
    return total;
  }
	for (let i = a; i >= 2; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
