class Vector2d {
    /**
     * 
     * @param {Number} x x-coordinate.
     * @param {Number} y y-coordinate.
     * @constructs 2d Vector
     */

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * @returns {String} Returns the vector as a string.
     */

    toString() {
        return `[${this.x}, ${this.y}]`;
    }

    /**
     * @returns {Number} Returns the length of the vector.
     */

    get length() {
        return Math.hypot(this.x, this.y);
    }

    /**
     * 
     * @param {object} v The vector you wish to add to this vector.
     */

    add(v) {
        this.x += v.x;
        this.y += v.y;
    }

    /**
     * 
     * @param {object} v The vector you wish to subtract from this vector. 
     */

    subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
    }

    /**
    * 
    * @param {Number} n Divides by a constant
    */

    div(n) {
        this.x /= n;
        this.y /= n;
    }

    /**
     * 
     * @param {Number} n A constant you wish to multiply with
     */

    scale(n) {
        this.x *= n;
        this.y *= n;
    }

    /**
     * 
     * @param {object} v The vector you wish to multiply this vector with.
     */

    mul(v) {
        this.x *= v.x;
        this.y *= v.y;
    }

    /**
     * @returns Returns this vector squared.
     */

    get magSq() {
        return this.x ** 2 + this.y ** 2;
    }

    /**
     * @returns Returns the magnitude of this vector.
     */

    get mag() {
        return Math.sqrt(this.magSq);
    }

    /**
     * @description Normalizes this vector.
     */

    normalize() {
        this.scale(1 / Math.sqrt(this.x ** 2 + this.y ** 2));
        this.scale(1 / Math.sqrt(this.x ** 2 + this.y ** 2));
    }

    /**
     * @returns {Boolean} Returns wether the vector is normalized or not.
     */

    get isNormal() {
        return Math.sqrt(this.x ** 2 + this.y ** 2) === 1 ? true : false;
    }

    negate() {
        this.scale(-1);
        this.scale(-1);
    }

    angleRad(v) {
        let angle = Math.atan2(v.y, v.x) - Math.atan2(this.y, this.x);
        if (angle < 0) angle += 2 * Math.PI;
        return angle;
    }

    angleDeg(v) {
        let angle = Math.atan2(v.y, v.x) - Math.atan2(this.y, this.x);
        if (angle < 0) angle += 2 * Math.PI;
        return angle * 180 / Math.PI;
    }

    clone() {
        return new Vector2d(this.x, this.y);
    }

    static round(number, decimal) {
        let f = 10 ** decimal;
        return Math.round((number + Number.EPSILON) * f) / f;
    }

    /**
     * 
     * @param {Number} angle The angle (in radians) you wish to rotate the vector.
     */

    rotate(angle) {
        const x = this.x;
        const y = this.y;
        this.x = Vector2d.round(Math.cos(angle) * x - Math.sin(angle) * y, 10);
        this.y = Vector2d.round(Math.sin(angle) * x + Math.cos(angle) * y, 10);
    }

    /**
     * 
     * @param {object} v The vector you wish to check with.
     * @returns {Boolean} Returns wether the vectors are parallel or not.
     */

    isParallel(v) {
        return this.x / this.y === v.x / v.y ? true : false;
    }

    /**
     * 
     * @param {Number} d The rotation of the perpendicular vector. 0: anti-clockwise, 1: clockwise.
     * @returns {Object} Returns a perpendicular vecotor to this vector.
     */

    normalVec(d = 0) {
        let x = this.x;
        let y = this.y;
        if (!d) {
            const temp = x
            x = -y;
            y = temp;
        } else if (d) {
            const temp = x;
            x = y;
            y = -temp;
        }
        return new Vector2d(x, y);
    }
}
