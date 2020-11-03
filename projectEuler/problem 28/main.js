/**
 * 
 * @param {Number} n Multiply the final
 */

const sumSpiral = (n = 1001 * 1001) => {
    let side = 1
    let sum = 1;
    let ans = new Array();

    while (side < Math.sqrt(n)) {
        side += 2;
        for (let i = 0; i < 4; i++) {
            sum += (side - 1);
            ans.push(sum);
        }
    }
    
    return ans.reduce((a, b) => Number(a) + Number(b), 1);
}