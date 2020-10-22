<<<<<<< HEAD
let k = 20;
let N = 1;
let i = 1;
let check = true;
const limit = Math.sqrt(k);
while (p <= k) {
    a = 1;
    if (check) {
        if (i <= limit) {
            a_i = Math.floor((Math.log(k) / Math.log(i)));
        } else {
            check = false;
        }
    }
    N = N * i ** a_i;
    i++;
    console.log(i);
}

console.log(N);
=======
/**
 * 
 * @param {number} n 
 */

function smallestNum(n) {
    let inc = 2;
    let step = 2;
    let smallestNum = 2;

    while (smallestNum <= Number.MAX_SAFE_INTEGER) {
        for (let i = 2; i <= n; i++) {
            const divisible = smallestNum % i === 0;
            if (!divisible) {
                break;
            }
            if (i === inc) {
                step = smallestNum;
                inc++;
            }
            if (i === n) {
                return smallestNum;
            }
        }
        smallestNum += step;
    }
    return smallestNum;
}

console.log(smallestNum(20));
>>>>>>> 8451a8e97a98ecda4177bb1f1007c949d2f36650
