form.onsubmit = () => {
    let first = document.getElementById("FirstName").value;
    let last = document.getElementById("LastName").value;
    let name = `${first} ${last}`;
    let txt = document.getElementById("txt");
    txt.innerHTML = name;
    return false;
}