/**
 * 
 * @param {number} dnum The denumerator
 * @returns  Returns the length of the recurring cycle
 */

const isRecurring = (dnum) => {
    let res = "";

    let seen = {};
    let rem = 1 % dnum;

    while ((rem !== 0) && !(rem in seen)) {
        seen[rem] = res.length;
        rem *= 10;

        let resPart = Math.floor(rem / dnum);
        res += resPart.toString();

        rem = rem % dnum;
    }

    if (rem === 0) return "".length;
    else return res.slice(seen[rem]).length;
}

/**
 * @returns The number which has the longest recurring cycle
 */

const longestCycle = () => {
    let longest = 0;
    let d = 0;

    for (let i = 0; i < 1000; i++) {
        if (isRecurring(i) > longest) {
            longest = isRecurring(i);
            d = i;
        }
    }

    return d;
}