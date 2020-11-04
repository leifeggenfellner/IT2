/**
 * 
 * @author Leif Eggenfellner
 * @param {Number} n The limit
 * @returns {Number} Returns the number with the longest chain
 */

const chainLength = (l = 1000000) => {
    let num = 0;
    let longest = 0;

    for (let i = 1; i < l; i++) {
        let n = i;
        let arr = [n]
        while (true) {
            if (n % 2 === 0) {
                n = n / 2;
                arr.push(n);
            }
            else {
                n = (3 * n) + 1;
                arr.push(n);
            }

            if (n === 1) break;
        }

        if (arr.length > longest) {
            num = i;
            longest = arr.length;
        }
    }

    return num;
}
