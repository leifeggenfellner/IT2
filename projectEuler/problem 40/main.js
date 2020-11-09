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

    const nums = new Array();

    for (let i = 0; i <= 6; i++) {
        nums.push(str[10 ** i]);
    }


    return nums.reduce((a, b) => a * b, 1);
}
