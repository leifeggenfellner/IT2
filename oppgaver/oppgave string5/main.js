const genPass = size => {
    let pwd = new String();
    for (let i = 0; i < size; i++) {
        const num = Math.floor(Math.random() * 2);
        if (num) pwd += Math.floor(Math.random() * 10);
        else if (!num) {
            const big = Math.floor(Math.random() * 2);
            if (big) {
                const charCode = Math.floor((Math.random() * 26) + 65);
                pwd += String.fromCharCode(charCode);
            }
            else if (!big) {
                const charCode = Math.floor((Math.random() * 26) + 97);
                pwd += String.fromCharCode(charCode);
            }
        }
    }
    return pwd;
}

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

const pwdLength = document.getElementById("lengthRange");
const output = document.getElementById("output");
const quality = document.getElementById("quality");

pwdLength.addEventListener("input", () => {
    if (pwdLength.value != 0 || pwdLength.value !== NaN) {
        const size = parseInt(pwdLength.value);
        const password = genPass(size);
        const pwdQuality = checkPwd(password);
        if (pwdQuality) quality.innerText = `This password is strong`;
        else if (!pwdQuality) quality.innerText = `This password is weak`;
        output.innerText = password;
    }
});
