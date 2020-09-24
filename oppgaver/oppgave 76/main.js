let str = "";

for (let i = 0; i <= 8; i++) {
    str += "-".repeat(i);
    str += "#".repeat(i + 1);
    str += "\n"
}

console.log(str);
