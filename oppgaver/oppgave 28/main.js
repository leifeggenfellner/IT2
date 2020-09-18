let start = Date.now();

function delta() {
    let now = Date.now();
    let timePassed_ms = now - start;
    let timePassed_s = timePassed_ms / 1000;

    console.log(`${timePassed_s} seconds`);
}

setInterval(delta, 250);