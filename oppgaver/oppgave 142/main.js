// const txtInput = document.getElementById("txt");
// const output = document.getElementById("output");

const letters = [
    "•−", "-•••", "-•-•", "-••", "•", "••-•", "--•", "••••",
    "••", "•---", "-•-", "•-••", "--", "-•", "---", "•--•",
    "--•-", "•-•", "•••", "-", "••-", "•••-", "•--", "-••-",
    "-•--", "--••"
]

const numbers = ["-----", "•----", "••---", "•••--", "••••-", "•••••", "-••••", "--•••", "---••", "----•"];

const toMorseCode = str => {
    let morseCode = new Array();
    for (let char in str) {
        if (str.match(/[A-Za-z]/i)) morseCode.push(letters[parseInt(str[char].toUpperCase().charCodeAt(0)) - 65]);
        else morseCode.push(numbers[parseInt(str[char].charCodeAt(0)) - 48]);
    }
    return morseCode;
}

console.log(toMorseCode("sos0"));

// txtInput.addEventListener("input", () => {
//     const txt = txtInput.value;

// });