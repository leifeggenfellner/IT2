class Receipt {
    constructor(veiachle, price) {
        this.veiachle = veiachle;
        this.price = price;
        this.date = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`;
        this.time = `${new Date().getHours()}.${new Date().getMinutes().toString().padStart(2, 0)}`;
    }
}

const total = arr => {
    let personbiler = 0;
    let motorsykler = 0;
    let lastebiler = 0;
    let total = 0;

    for (e in arr) {
        if (arr[e].veiachle === "Personbil") personbiler++;
        else if (arr[e].veiachle === "Motorsykkel") motorsykler++;
        else if (arr[e].veiachle === "Lastebil") lastebiler++;
        total += arr[e].price;
    }

    return `Personbiler: ${personbiler}\nMotorsykler: ${motorsykler}\nLastebiler: ${lastebiler}\n\nTotalt beløp: ${total}`;
}

const printReciept = arr => {
    return `Ferjeselskapet AS\n${arr[arr.length - 1].date} ${arr[arr.length - 1].time}\n#${arr.length.toString().padStart(7, 0)}\n\n\n1 x ${arr[arr.length - 1].veiachle} ${arr[arr.length - 1].price},-\nInkl. mva. (8%): ${((arr[arr.length - 1].price) / 108 * 8).toFixed(2)}`;
}

const output = document.getElementById("output");
const personbil = document.getElementById("personbil");
const motorsykkel = document.getElementById("motorsykkel");
const lastebil = document.getElementById("lastebil");
const daily = document.getElementById("dagsoppgjør");

const sales = new Array();

personbil.onclick = () => {
    sales.push(new Receipt("Personbil", 150));
    output.innerText = printReciept(sales);
}

motorsykkel.onclick = () => {
    sales.push(new Receipt("Motorsykkel", 100));
    output.innerText = printReciept(sales);

}

lastebil.onclick = () => {
    sales.push(new Receipt("Lastebil", 375));
    output.innerText = printReciept(sales);
}

daily.onclick = () => {
    output.innerText = total(sales);
}

