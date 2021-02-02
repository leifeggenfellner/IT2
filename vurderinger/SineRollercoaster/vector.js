class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `[${this.x}, ${this.y}]`;
    }

    get length() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }
    add(vector) {
        this.x += vector.x;
        this.y += vector.y;
    }
    subtract(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
    }
    multiply(scalar) {
        this.x *= scalar;
        this.y *= scalar;
    }
    normalize() {
        this.x /= this.length;
        this.y /= this.length;
    }
    copy() {
        return new Vector(this.x, this.y);
    }
    rotate(angle) {
        let copyX = this.x;
        let copyY = this.y;

        this.x = (this.x * Math.cos(angle)) - (Math.sin(angle) * this.y);
        this.y = (copyX * Math.sin(angle)) + (Math.cos(angle) * copyY);
    }
    static multiply(vector, vector2) {
        return vector.x * vector2.x + vector.y * vector2.y;
    }
}