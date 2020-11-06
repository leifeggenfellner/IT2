/**
 * 
 * @param {Number} n Side length in square grid
 * @returns {Number} Returns how many such routes are there through a nxn grid
 */

const paths = (n = 20) => {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = ans * (n + i) / i;
    }
    return ans;
}
