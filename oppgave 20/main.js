function chessboard(size) {
    var output = "";
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            output += i % 2 === j % 2 ? " " : "*";
        }

        i !== (size - 1) ? output += "\n" : "";
    }
    return output;
}

console.log(chessboard(8));