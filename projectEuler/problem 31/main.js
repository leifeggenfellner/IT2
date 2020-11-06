/**
 * 
 * @param {Number} t Target
 * @param {Array.<Number>} c Coins
 * @returns {Number} Returns how many different ways can £2 be made using any number of coins
 */

const possibilities = (t = 200, c = [1, 2, 5, 10, 20, 50, 100, 200]) => {
    const table = new Uint32Array(t + 1);
    table[0] = 1;
    for (let i = 0; i < c.length; i++) {
        for (let j = c[i]; j <= t; j++) {
            table[j] += table[j - c[i]];
        }
    }

    return table[t];
}
