const n = 10;
const array = Array.from({
    length: n
}, () => Math.floor(Math.random() * 10 + 1));

let sum = array.reduce((previous, current) => previous + current, 0);