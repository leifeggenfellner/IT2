let no = document.getElementById("no");
let yes = document.getElementById("yes");
let txt = document.getElementById("txt");


no.onclick = () => {
    txt.innerHTML = "No"
}

yes.onclick = () => {
    txt.innerHTML = "Yes"
}