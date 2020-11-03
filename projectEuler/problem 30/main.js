/**
 * @author Leif Eggenfellner
 * @returns Returns the sum of the numbers that can be written as the sum of fifth powers of their digits
*/

const sumFifthPower = () => {
    let nums = new Array();
    
    for (let i = 10; i <= Math.pow(10, 6); i++) {
        let str = i.toString();
        let sum = 0;

        for (let j = 0; j < str.length; j++) {
            sum += Math.pow(str[j], 5);
        }

        if (sum == str) nums.push(sum);
    }

    return nums.reduce((a, b) => Number(a) + Number(b), 0);
}
