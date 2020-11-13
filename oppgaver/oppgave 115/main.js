class Pair {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `{${this.x}, ${this.y}}`;
    }
}

class Point extends Pair {


    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class Vector extends Pair {


    toString() {
        return `[${this.x}, ${this.y}]`;
    }
}