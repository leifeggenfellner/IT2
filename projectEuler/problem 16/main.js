let num = BigInt(Math.pow(2, 1000));
let str = num.toString();
let sum = 0;

for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
};
