const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // Convert the number to a string to iterate over its digits
  const digits = String(n).split('').map(Number);

  // Calculate the sum of digits
  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  // If the sum is a one-digit number, return it; otherwise, recurse with the sum
  return sum < 10 ? sum : getSumOfDigits(sum);
}

module.exports = {
  getSumOfDigits
};
