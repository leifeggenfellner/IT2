const caesar = (message, shift) => {
    message = message.toUpperCase();
    let newString = new String();
    for (char in message) {
        if (message.charCodeAt(char) >= 65 && message.charCodeAt(char) <= 90) {
            const newChar = ((message.charCodeAt(char) - 65) + shift) % 26 + 65;
            newString += String.fromCharCode(newChar);
        } else newString += String.fromCharCode(message.charCodeAt(char));
    }
    return newString;
}

const input = document.getElementById("input");
const range = document.getElementById("range");
const shiftOut = document.getElementById("shift");
const output = document.getElementById("output");

input.addEventListener("input", () => {
    input.value = input.value.toUpperCase();
});

range.addEventListener("input", () => {
    const message = input.value;
    const shift = parseInt(range.value);

    shiftOut.innerText = shift;
    output.value = caesar(message, shift);
});