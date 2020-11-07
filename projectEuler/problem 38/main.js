/**
 * 
 * @param {Number} n
 * @returns {Boolean} Returns a boolean value based on whether n is a prime number or not 
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
 * @returns {Number} Returns the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1
 */

const biggestPandigital = () => {
    const pandigitals = new Array();

    for (let i = 9234; i <= 9387; i++) {
        const num = Number("" + i + i * 2);
        if (isPandigital(num)) pandigitals.push(num);
    }

    return Math.max(...pandigitals);
}
