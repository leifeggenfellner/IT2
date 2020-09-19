let avg;
let total = 0;

let nums = new Array();

for (let i = 0; i < 20; i++) {
    nums.push(Math.ceil(Math.random() * 100));
}

for (let i = 0; i < nums.length; i++) {
    total += nums[i];
}

avg = average = (array) => array.reduce((a, b) => a + b) / array.length;
min = Math.min(...nums);
max = Math.max(...nums);

console.log(`Values ${nums}`);
console.log(`Avergae: ${avg(nums)}`);
console.log(`Min: ${min}`);
console.log(`Max: ${max}`);