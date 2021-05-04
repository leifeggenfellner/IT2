export default class Person {

    position;
    gender;
    age;
    seeking;

    constructor(gender, age, seeking) {
        this.position = {
            x: parseFloat((Math.random() * 800).toFixed(3)),
            y: parseFloat((Math.random() * 800).toFixed(3))
        };
        this.gender = gender;
        this.age = age;
        this.seeking = seeking;
    }
}