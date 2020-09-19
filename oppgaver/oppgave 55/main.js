let p = parseInt(prompt("Enter amount of protein"));
let f = parseInt(prompt("Enter amount of fat"));
let c = parseInt(prompt("Enter amount of carbs"));

function energy(p, f, c) {
    let e = 17 * p + 38 * f + 17 * c;
    return e
}