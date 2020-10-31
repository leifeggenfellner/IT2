const fs = require('fs');

fs.readFile('projectEuler/problem 67/triangle.txt', (err, data) => {
    if (err) throw err;

    let str = data.toString();
    let arr = new Array();
    let pyramid = new Array();
    let vals = str.split("\n");
    vals.forEach(e => {
        arr.push(e.split(" "));
    });

    for (let i = 0; i < arr.length; i++) {
        let temp = new Array();
        arr[i].forEach(e => {
            temp.push(parseInt(e));
        });
        pyramid.push(temp);
    }

    const maxTotal = triangle => {
        let dp = triangle[triangle.length - 1].slice();

        for (let i = triangle.length - 2; i > -1; i--) {
            for (let j = 0; j < i + 1; j++) {
                dp[j] = triangle[i][j] + Math.max(dp[j], dp[j + 1]);
            }
        }
        return dp[0];
    }
});
