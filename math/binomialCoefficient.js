const binom = (n, k) => {
    if (n < k || k < 0) return 0;

    k = Math.min(k, n - k);
    n = n - k;

    let ans = 1;
    for (let i = 1; i <= k; i++) {
        ans = ans * (n + i) / i;
    }

    return ans;
}

console.log(binom(34, 7));