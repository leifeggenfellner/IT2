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