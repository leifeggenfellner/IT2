const output = document.querySelector("h1");

const reversed = str => {
    let string = new String();
    for (let i = str.length - 1; i >= 0; i--) {
        string += str[i];
    }
    return string;
};

let str = window.prompt("Enter text");
if (str.length > 4) {
    let strMid = str.slice(1, -1);
    strMid = reversed(strMid);
    str = `${str[0]}${strMid}${str[str.length - 1]}`;
}

output.innerText = str;