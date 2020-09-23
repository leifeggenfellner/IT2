let str = "";

for (let i = 3; i < 10; i++) {
    let j = Math.abs((i % 6) - 3);
    str += "-".repeat(j);
    str += "#".repeat(j + 1);
    str += "\n";
}