const paths = n => {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = ans * (n + i) / i;
    }
    return ans;
}

console.log(paths(20));