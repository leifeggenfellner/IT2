const inputPwd = document.getElementById("pwd");
const btn = document.getElementById("btn");
const output = document.getElementById("result");

const letterCount = str => {
    const s = str.match(/([a-zA-Z0-9])\1*/g) || [];
    return s.map(item => {
        return [item.charAt(0), item.length];
    });
}

const checkPwd = pwd => {
    const lengthGood = pwd.length > 7 ? true : false;
    const containNum = /\d/.test(pwd);
    let onlyValidChars = true;
    let oneSmall = false;
    let oneBig = false;
    for (char in pwd) {
        if (pwd.charCodeAt(char) < 48 && pwd.charCodeAt(char) > 59 && pwd.charCodeAt(char) < 65 && pwd.charCodeAt(char) > 90 && pwd.charCodeAt(char) < 97 && pwd.charCodeAt(char) > 122) onlyValidChars = false;
        if (pwd.charCodeAt(char) > 96 && pwd.charCodeAt(char) < 123) oneBig = true;
        if (pwd.charCodeAt(char) > 64 && pwd.charCodeAt(char) < 91) oneSmall = true;
    }

    let lessOccurances = true;
    const occurances = letterCount(pwd);
    for (let i = 0; i < occurances.length; i++) if (occurances[i][1] > 2) lessOccurances = false;

    return lengthGood && containNum && onlyValidChars && oneSmall && oneBig && lessOccurances ? true : false;
}

btn.addEventListener("click", () => {
    const pwd = inputPwd.value;
    const passwordChecked = checkPwd(pwd);
    if (passwordChecked) {
        output.style.color = "#0F0";
        output.innerText = `Your password passed the check`;
    } else if (!passwordChecked) {
        output.style.color = "#F00";
        output.innerText = `Your password failed the check`;
    }
});