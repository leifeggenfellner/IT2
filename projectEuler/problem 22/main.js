const fs = require('fs');
const letters = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13,
    N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
};
    
const letterValue = letter => {
    return letters[letter];
}

 const names = fileName => {
    let content = fs.readFileSync(fileName, { encoding: 'ascii' });
    return content.substring(1, content.length - 1).split("\",\"").sort();
};

const nameScore = (val, i) => {
    return (i + 1) * val.split("").map(letterValue).reduce((a, b) => Number(a) + Number(b), 0);
}

const sumNames = () => {
    return names("projectEuler/problem 22/names.txt").map(nameScore).reduce((a, b) => Number(a) + Number(b), 0);
}

console.log(sumNames());



