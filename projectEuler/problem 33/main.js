/**
 * @author Leif Eggenfellner
 */

/**
 * 
 * @param {Number} n1 
 * @param {Number} n2
 * @returns {Bollean} Returns a boolean beased on if the two number has a common digit 
 */

const checkPair = (n1, n2) => {
    const str1 = n1.toString();
    const str2 = n2.toString();

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) return true;
        }
    }
    return false;
}

/**
 * 
 * @param {Array.<Number>} arr 
 * @param {Number} val
 * @returns {Number} Returns the number of occurrences of val in the array 
 */

const getOccurrence = (arr, val) => {
    return arr.filter((v) => (v === val)).length;
}

const removeCommonDigit = (n1, n2) => {
    const str1 = n1.toString();
    const str2 = n2.toString();
    const str = str1 + str2;
    let nums = str.split("");

    nums = nums.map(e => parseInt(e));

    for (let i = 0; i < 10; i++) {
        if (getOccurrence(nums, i) >= 2)
            return nums.filter(e => e !== i);
    }

    return nums;
}

/**
 * 
 * @param {Number} n1 
 * @param {Number} n2
 * @returns {Number} Returns the greatest common divisor
 */

const gcd = (n1, n2) => {
    while (n1 !== n2) {
        if (n1 > n2) n1 -= n2;
        else n2 -= n1;
    }

    return a;
}

/**
 * @returns {Number} Returns the value of the denom (the product of all denominators for the four fractions) divided by numerator (the greates common divisor for the product of all numberators of the four fractions) and denom
 */

const curiousFractions = () => {
    const correctInstance = new Array();

    for (let i = 10; i < 100; i++) {
        for (let j = 10; j < 100; j++) {
            if (i / j === 1) continue;
            if (i % 10 === 0 || j % 10 === 0) continue;

            if (checkPair(i, j) && !(i >= j)) {
                const expected = i / j;
                const simplified = removeCommonDigit(i, j);
                if (expected === simplified[0] / simplified[1] && simplified[0] / simplified[1] !== 1 && simplified.length !== 1) {
                    correctInstance.push([i, j]);
                }
            }
        }
    }

    let denom = 1;
    let numerator = 1;

    for (let i = 0; i < correctInstance.length; i++) {
        denom *= correctInstance[i][1];
        numerator *= correctInstance[i][0];
    }

    return denom / gcd(numerator, denom);
}
