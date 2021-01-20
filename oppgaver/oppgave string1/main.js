const reversed = str => {
    let string = new String();
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return string;
};

const str = window.prompt("Enter the string you wish to reverse");
const strReversed = reversed(str)
console.log(strReversed);
const output = document.querySelector("h1");
output.innerText = `${str} reversed is ${strReversed}`;
