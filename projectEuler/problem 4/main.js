/**
 * 
 * @param {Array} arr Empty Array
 * @returns {Array.<Number>} Retruns array with all palindromes made from the product of two 3-digit numbers
 */

const palindrome = (arr = new Array()) => {
    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            let num = i * j;
            let reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
            if (num === reversedNum(num)) {
                arr.push(num);
            }
        }
    }
    return arr;
}

/**
 * @returns {Number} Returns the largest palindrome made from the product of two 3-digit numbers
 */

const maxPalindrome = () => {
    const palindromes = palindrome();
    return Math.max(...palindromes);
}
