/**
 * @author Leif Eggenfellner
 */

const permutations = new Array();

/**
 * @param {Number} n 
 * @param {Array.<Number>} a
 */

const generate = (n, a) => {
    if (n === 1) permutations.push(a.join(''));
    else {
        generate(n - 1, a);

        for (let i = 0; i < n - 1; i++) {
            if (n % 2 === 0) {
                let temp = a[i];
                a[i] = a[n - 1];
                a[n - 1] = temp;
            } else {
                let temp = a[0];
                a[0] = a[n - 1];
                a[n - 1] = temp;
            }
            generate(n - 1, a);
        }
    }
}

/**
 * @returns {Number} Returns the millionth lexiographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9
 */

const solve = () => {
    const nums = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    const N = nums.length;

    generate(N, nums);
    return permutations.sort().slice(999999, 1000000).pop();
}
