/**
 * 
 * @param {Number} n The number of the max p;
 * @returns {Number} Returns the value of p ≤ n, where the number of solutions for right angle triangles with integral length sides, {a,b,c} is maximised.
 */

const maximisedSolutions = (n = 1000) => {
    let longest = 0;
    let biggestP;

    for (let p = 2; p <= n; p += 2) {
        let count = 0;
        for (let a = 2; a < p / 3; a++) {
            if (p * (p - 2 * a) % (2 * (p - a)) === 0) count++;
        }

        if (count > longest) {
            longest = count;
            biggestP = p;
        }
    }

    return biggestP;
}
