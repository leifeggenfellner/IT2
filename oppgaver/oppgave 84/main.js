let fibionacci = new Array(0, 1, 1, 2, 3, 5, 8, 13, 21, 34);

let sum;
sum = fibionacci[6] + fibionacci[8];
console.log(sum);
console.log(fibionacci[6], fibionacci[8]);

const n = 10;
const currency = Array.from({
    length: n
}, () => Math.floor(Math.random() * 100 + 1));

let a = currency[currency.length - 3];
let b = currency[currency.length - 2];
let c = currency[currency.length - 1];

let str;
c > a ? str = `${c} er større enn ${a}` : c < a ? str = `${c} er mindre enn ${a}` : str = `${c} er lik ${a}`;
