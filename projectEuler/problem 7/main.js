/**
 * 
 * @author Leif Eggenfellner
 * @param {Number} n The number
 * @returns {Number} Returns the next prime number from n
 */

function nextPrime(n) {
    if (n > 2) {
        let i, q;
        do {
            i = 3;
            n += 2;
            q = Math.floor(Math.sqrt(n));
            while (i <= q && n % i) {
                i += 2;
            }
        } while (i <= q);
        return n;
    }
    return n === 2 ? 3 : 2;
}

/**
 * 
 * @param {Number} n The n-th prime number
 * @returns {Number} Returns the n-th prime number
 */

function generatePrime(n) {
    let val = 0,
        result = [];
    for (let i = 0; i < n; i++) {
        val = nextPrime(val);
        result.push(val);
    }
    return result[n - 1];
}
