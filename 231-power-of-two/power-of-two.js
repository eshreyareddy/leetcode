/**
 * @param {number} n
 * @return {boolean}
 */

//1. Define the function using ES6 arrow function style for clarity
var isPowerOfTwo = function(n) {

  //2. Powers of two must be positive; return false for zero and negative numbers
  if (n <= 0) return false;

  //3. Use a bitwise trick:
  //   A power of two has only one bit set in its binary form.
  //   For example: 8 = 1000 and 7 = 0111; (8 & 7) = 0
  //   This check ensures n is a power of two.
  return (n & (n - 1)) === 0;
};

//4. Test cases to verify correctness
console.log(isPowerOfTwo(1));     // true: 2^0
console.log(isPowerOfTwo(16));    // true: 2^4
console.log(isPowerOfTwo(3));     // false: not a power of two
console.log(isPowerOfTwo(0));     // false: edge case
console.log(isPowerOfTwo(-8));    // false: negative numbers not allowed