const btnAdd = document.getElementById("add");
const btnShow = document.getElementById("show");
const txt = document.getElementById("txt");
const contacts = new Array();

btnAdd.onclick = () => {
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const mail = document.getElementById("email").value

    const contact = { name: name, number: number, mail: mail };
    contacts.push(contact);
}

btnShow.onclick = () => {
    let output = new String();

    for (let i = 0; i < contacts.length; i++) {
        // const content = Object.values(contacts[i]);
        output += `${contacts[i].name}, ${contacts[i].number}, ${contacts[i].mail}\n`;
    }

    txt.innerText = output;
} 