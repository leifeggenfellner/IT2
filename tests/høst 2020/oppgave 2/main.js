const output = document.getElementById("output");
const personbil = document.getElementById("personbil");
const motorsykkel = document.getElementById("motorsykkel");
const lastebil = document.getElementById("lastebil");
const daily = document.getElementById("dagsoppgjør");

const sales = new Array();

personbil.onclick = () => {
    sales.push({
        veiachle: "Personbil",
        price: 150,
        date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
        time: `${new Date().getHours()}.${new Date().getMinutes().toString().padStart(2, 0)}`
    });

    output.innerText = `Ferjeselskapet AS\n${sales[sales.length - 1].date} 
    ${sales[sales.length - 1].time}\n#${sales.length.toString().padStart(7, 0)}
    \n\n1 x ${sales[sales.length - 1].veiachle} ${sales[sales.length - 1].price},-\n
    Inkl. mva. (8%): ${((sales[sales.length - 1].price) / 108 * 8).toFixed(2)}`;
}

motorsykkel.onclick = () => {
    sales.push({
        veiachle: "Motorsykkel",
        price: 100,
        date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
        time: `${new Date().getHours()}.${new Date().getMinutes().toString().padStart(2, 0)}`
    });

    output.innerText = `Ferjeselskapet AS\n${sales[sales.length - 1].date} 
    ${sales[sales.length - 1].time}\n#${sales.length.toString().padStart(7, 0)}
    \n\n1 x ${sales[sales.length - 1].veiachle} ${sales[sales.length - 1].price},-\n
    Inkl. mva. (8%): ${((sales[sales.length - 1].price) / 108 * 8).toFixed(2)}`;
}

lastebil.onclick = () => {
    sales.push({
        veiachle: "Lastebil",
        price: 375,
        date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
        time: `${new Date().getHours()}.${new Date().getMinutes().toString().padStart(2, 0)}`
    });

    output.innerText = `Ferjeselskapet AS\n${sales[sales.length - 1].date} 
    ${sales[sales.length - 1].time}\n#${sales.length.toString().padStart(7, 0)}
    \n\n1 x ${sales[sales.length - 1].veiachle} ${sales[sales.length - 1].price},-\n
    Inkl. mva. (8%): ${((sales[sales.length - 1].price) / 108 * 8).toFixed(2)}`;
}

daily.onclick = () => {
    let personbiler = 0;
    let motorsykler = 0;
    let lastebiler = 0;
    let total = 0;

    for (e in sales) {
        if (sales[e].veiachle === "Personbil") personbiler++;
        else if (sales[e].veiachle === "Motorsykkel") motorsykler++;
        else if (sales[e].veiachle === "Lastebil") lastebiler++;
        total += sales[e].price;
    }

    output.innerText = `Personbiler: ${personbiler}\nMotorsykler: 
    ${motorsykler}\nLastebiler: ${lastebiler}\n\nTotalt beløp: ${total}`;
}

