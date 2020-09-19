let output = new Array();

function f(x) {
    return x * x + 3
}

for (let i = 1; i < 16; i++) {
    output.push(f(i));
}