/**
 * 
 * @param {Number} n 
 * @returns {Number} Returns the smallest positive number that is evenly divisible by all of the numbers from 1 to 20
 */

function smallestNum(n) {
    let incrementer = 2;
    let step = 2;
    let smallest = 2;

    while (smallest <= Number.MAX_SAFE_INTEGER) {
        for (let i = 2; i <= n; i++) {
            const divisible = smallest % i === 0;
            if (!divisible) {
                break;
            }
            if (i === incrementer) {
                step = smallest;
                incrementer++;
            }
            if (i === n) {
                return smallest;
            }
        }
        smallest += step;
    }
    return smallest;
}
