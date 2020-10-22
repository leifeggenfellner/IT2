/**
 * 
 * @param {number} a First number 
 * @param {number} b Second number
 * @return {number} 
 */

const gcd = function (a, b) {
    return (!b ? a : gcd(b, a % b));
}

/**
 * 
 * @param {number} m 
 * @param {number} n 
 * @return {string}
 */

const findSquare = function (m, n) {
    return (m === n ? `Size: ${m}x${n}` : `Size: ${gcd(m, n)}x${gcd(m, n)}`);
}