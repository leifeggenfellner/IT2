let str = "";

for (let i = -3; i <= 3; i++) {
    for (let j = Math.abs(i) + 1; j < 4; j++) {
        str += "-";
    }
    for (let k = Math.abs(i); k < 4; k++) {
        str += "#";
    }
    if (i < 3) {
        str += "\n";
    }
}

console.log(str);