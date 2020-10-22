let str = "";

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < i; j++) {
        str += "-";
    }
    for (let k = 0; k <= i; k++) {
        str += "#";
    }

    if (i < 7) {
        str += "\n";
    }
}

console.log(str);