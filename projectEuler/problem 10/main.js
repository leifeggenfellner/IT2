/**
 * 
 * @param {Number} l The limit
 * @returns {Number} Returns the sum of all primes below l
 */

const sumSieve = l => {
    let arr = new Array();
    let output = new Array();
    let max = Math.sqrt(l);
    for (let i = 0; i < l; i++) {
        arr.push(true);
    }

    for (let i = 2; i <= max; i++) {
        if (arr[i]) {
            for (let j = i * i; j < l; j += i) {
                arr[j] = false;
            }
        }
    }

    for (let i = 2; i < l; i++) {
        if (arr[i]) {
            output.push(i);
        }
    }

    return output.reduce((a, b) => a + b, 0);
}