/**
 * @author Leif Eggenfellner
 * @param {Number} n The number to check if is a pandigital number
 * @returns {Boolean} Returns boolean values based on if the n is a pandigital number 
 */

const isPandigital = n => {
    let m = 0;
    let i = 0;

    while (n > 0) {
        m += 1 << n % 10;
        n = Math.floor(n / 10);        

        i++;
    }

    return 2 + m === 1 << (i + 1);
}

/**
 * 
 * @param {Array.<Number>} arr An array with the limits
 * @returns {Set.<Number>} Returns the products of n and m for the pandigital decimal numbers
 */

const rangeSum = (arr) => {
    const products = new Set();

    for (let m = arr[0]; m <= arr[1]; m++) {
        for (let n = arr[2]; n <= arr[3]; n++) {
            const p = m * n;
            const num = Number("" + m + n + p);
            if (isPandigital(num)) products.add(p);
        }
    }

    return products;
}

/**
 * @returns {Number} Returns the sum of the products
 */

const sumPandigital = () => {
    const nums1 = new Array(1, 9, 1234, 9876);
    const nums2 = new Array(12, 98, 123, 987);

    const products1 = rangeSum(nums1);
    const products2 = rangeSum(nums2);

    const products = new Set([...products1, ...products2]);

    return [...products].reduce((a, b) => a + b, 0);
}
