let str = "";

for (var i = 1; i <= 15; i++) {
    for (var j = 1; j <= 15; j++) {
        if (j % i == 0) {
            str += j + " ";
        }
    }
    str += "\n";
}

for (var i = 1; i <= 15; i++) {
    for (var j = 1; j <= 15; j++) {
        if (j % i == 0) {
            var k = "";
            if (j < 10) {
                k = " ";
            }
            str += k + j + " ";
        }
    }
    str += "\n";
}