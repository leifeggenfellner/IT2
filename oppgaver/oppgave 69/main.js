const N = 10;
const arr = Array.from({
    length: N
}, () => (Math.random() * 10).toFixed(3));

/**
 * 
 * @param {array} arr 
 * @param {number} n
 */

function multiply(arr, n) {
    arr.forEach(function (element, index) {
        arr[index] = (element * n.toFixed(3)).toFixed(3);
    });

    return arr;
}