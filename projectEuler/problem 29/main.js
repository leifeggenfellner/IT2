/**
 * @author Leif Eggenfellner
 * @returns {Number} Returns the length of the array without duplicates
 */

const distinctPowers = () => {
    let products = new Set();
    for (let a = 2; a <= 100; a++) {
        for (let b = 2; b <= 100; b++) {
            products.add(Math.pow(a, b));
        }
    }

    return products.size;
}
