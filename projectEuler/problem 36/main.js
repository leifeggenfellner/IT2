/**
 * 
 * @author Leif Eggenfellner
 * @param {Number} n The number to check if is a palindrome
 * @param {Number} base The base of the number
 * @returns {Boolean} Returns a boolean value based on if the number is a palindrome
 */

const isPalindrome = (n, base = 10) => {
    n = n.toString(base);
    if (typeof n === "string") n = parseInt(n);

    const reversedNum = n => parseFloat(n.toString().split('').reverse().join('')) * Math.sign(n)

    if (n !== reversedNum(n)) {
        return false;
    }

    return true;
}

/**
 * 
 * @param {Number} i The number of the palindrome
 * @param {Number} odd Number based on if the length of the binary palindrome is odd or not
 * @returns {Number} Returns the generated palindrome
 */

const generatePalindrome = (i, odd) => {
    let palindrome = i;
    i >>= odd;
    for (i; i > 0; i >>= 1) {
        palindrome = (palindrome << 1) | (i & 1);
    }

    return palindrome;
}

/**
 * 
 * @param {Number} l The limit
 * @returns {Number} Returns the sum of all palindromes that is a palindrome with a base of 2 and 10
 */

const sumPalindromes = (l = 10 ** 6) => {
    let sum = 0;

    for (let i = 0; i <= 1; i++) {

        let palindrome = generatePalindrome(1, i);

        for (let j = 2; palindrome < l; j++) {

            if (isPalindrome(palindrome, 10)) {
                sum += palindrome;
            }

            palindrome = generatePalindrome(j, i);
        }
    }

    return sum;
}
