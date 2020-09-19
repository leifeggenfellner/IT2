function square(x) {
    let str = "";
    for (let i = 0; i < x; i++) {
        str += "\n* ";
        for (let j = 0; j < x - 1; j++) {
            str += "* "
        }
    }
    return str;
}

function rectangle(x, y) {
    let str = "";
    for (let i = 0; i < y; i++) {
        str += "\n* ";
        for (let j = 0; j < x - 1; j++) {
            str += "* "
        }
    }
    return str;
}

function triangle(x) {
    let str = "";
    for (let i = 1; i <= x; i++) {
        str += "* ".repeat(i);
        str += "\n";
    }
    return str;
}