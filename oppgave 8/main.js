if (!(25 % 5 == 1) === false) {
    console.log(false);
} else {
    console.log(true);
}

if ((true || !(false)) === false) {
    console.log(false);
} else {
    console.log(true);
}

if ((26 <= 17) === false) {
    console.log(false);
} else {
    console.log(true);
}

if ((false || !(false || true)) === false) {
    console.log(false);
} else {
    console.log(true);
}