let arr = new Array();

function palindrome(arr) {
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

const palindromes = palindrome(arr);
const maxPalindrome = Math.max(...palindromes);