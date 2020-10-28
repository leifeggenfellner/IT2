/**
 * 
 * @param {number} a First number 
 * @param {number} b Second number
 * @return {number} Returns greatest common divisor
 */

const gcd = function (a, b) {
    return (!b ? a : gcd(b, a % b));
}

/**
 * 
 * @param {number} m Width of rectangle
 * @param {number} n Height of rectangle
 * @return {string} Returns the dimensions of the biggest integer sided square, that can be used to fill the rectangle
 */

const findSquare = function (m, n) {
    return (m === n ? `Size: ${m}x${n}` : `Size: ${gcd(m, n)}x${gcd(m, n)}`);
}