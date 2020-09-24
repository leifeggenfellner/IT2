/**
 * 
 * @param {number} h 
 * @param {number} w 
 */

let str = "";

const bmi = (h, w) => w / Math.pow(h, 2);

for (let i = 1.4; i <= 2.2; i += 0.1) {
    for (let j = 50; j <= 120; j += 10) {
        str += `${Math.round(bmi(i, j))} `;
    }
    if (i < 2.1) {
        str += "\n";
    }
}

console.log(str);
