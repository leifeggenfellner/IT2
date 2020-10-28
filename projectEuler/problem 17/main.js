let first = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8];
let second = [0, 0, 6, 6, 5, 5, 5, 7, 6, 6];
let hundred = 7;
let and = 3;
let letters = 11;

for (let x = 0; ++x < 1000;) {
    let temp = (x % 100);
    if (temp < 20) letters += first[temp];
    else {
        let temp2 = temp % 10;
        temp = Math.floor(temp / 10);
        letters += first[temp2];
        letters += second[temp];
    }
    if (x > 99) {
        temp = Math.floor(x / 100);
        if (x % 100 === 0) letters -= and;
        letters += and + hundred + first[temp];
    }
}

console.log(letters);