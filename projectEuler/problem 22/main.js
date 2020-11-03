/**
 * @author Leif Eggenfellner
 */

const fs = require('fs');
const letters = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13,
    N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
};

/**
 * 
 * @param {String} letter The letter you want the value of
 * @returns {Number} Returns the value of the letter
 */
    
const letterValue = letter => {
    return letters[letter.toLocaleUpperCase()];
}

/**
 * 
 * @param {String} fileName Path to the file you wish to get data from
 * @returns {Array.<string>} Return an array with all the names
 */

const names = fileName => {
    let content = fs.readFileSync(fileName, { encoding: 'ascii' });
    return content.substring(1, content.length - 1).split("\",\"").sort();
};

/**
 * 
 * @param {String} val The name you wish to find the value of
 * @param {Number} i The index of the name you find the value of
 * @returns {Number} Returns the name score
 */

const nameScore = (val, i) => {
    return (i + 1) * val.split("").map(letterValue).reduce((a, b) => Number(a) + Number(b), 0);
}

/**
 * @returns {Number} Returns the sum all the names
 */

const sumNames = () => {
    return names("projectEuler/problem 22/names.txt").map(nameScore).reduce((a, b) => Number(a) + Number(b), 0);
}
