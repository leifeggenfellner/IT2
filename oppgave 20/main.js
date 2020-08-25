function board(size) {
    var output = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            output += i % 2 === j % 2 ? " " : "*";
        }

        i !== (size - 1) ? output += "\n" : "";
    }
    return output;
}
