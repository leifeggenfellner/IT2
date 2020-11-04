/**
 * @author Leif Eggenfellner
 */

const fs = require('fs');

fs.readFile('projectEuler/problem 67/triangle.txt', (err, data) => {
    if (err) throw err;
    
    const str = data.toString();
    const arr = new Array();
    const pyramid = new Array();
    const vals = str.split("\n");

    vals.forEach(e => {
        arr.push(e.split(" "));
    });

    for (let i = 0; i < arr.length; i++) {
        const temp = new Array();
        arr[i].forEach(e => {
            temp.push(parseInt(e));
        });
        pyramid.push(temp);
    }

    /**
     * 
     * @param {Array.<Number>} triangle 
     * @returns {Number} Returns the maximum total from top to bottom of the triangle
     */

    const maxTotal = triangle => {
        const dp = triangle[triangle.length - 1].slice();

        for (let i = triangle.length - 2; i > -1; i--) {
            for (let j = 0; j < i + 1; j++) {
                dp[j] = triangle[i][j] + Math.max(dp[j], dp[j + 1]);
            }
        }
        
        return dp[0];
    }
    console.log(maxTotal(pyramid));
});
