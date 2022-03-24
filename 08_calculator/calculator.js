const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length
     ? array.reduce((first, second) => first*second) : 0;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(n) {
	return n === 0 ? 1 : n*factorial (n-1); 
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
