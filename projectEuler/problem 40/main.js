/**
 * @returns {Number} Returns the product of the numbers in decimal places 1, 10, 100, 1000, 10000, 100000, 1000000.
 */

const findNum = () => {
    let str = "";
    let i = 0;

    while (str.length <= 1000000) {
        str += i;
        i++;
    }

    const nums = new Array(str[1], str[10], str[100], str[1000], str[10000], str[100000], str[1000000]);

    return nums.reduce((a, b) => a * b, 1);
}
