const output = document.querySelector("h1");

const internationalize = text => {
    for (let i = 0; i < text.length; i++) {
        if (text.includes("Æ")) text = text.replace("Æ", "Ae");
        else if (text.includes("Ø")) text = text.replace("Ø", "Oe");
        else if (text.includes("Å")) text = text.replace("Å", "Aa");
        else if (text.includes("æ")) text = text.replace("æ", "ae");
        else if (text.includes("ø")) text = text.replace("ø", "oe");
        else if (text.includes("å")) text = text.replace("å", "aa");
    }
    return text;
}

let text = window.prompt("Enter text");
output.innerText = `${internationalize(text)}`;
