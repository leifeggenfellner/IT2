let array = new Array();
const addNums = (n) => {
    for (let i = 1; i <= n; i++) array.push(i);
}
addNums(6);
const fact = n => n ? n * fact(n - 1) : 1;
let result = array.map(fact)[array.length - 1];