let list1 = [];
let list2 = [];
let list3 = [];

for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        let digit1 = i.toString();
        let digit2 = j.toString();

        let num = digit1 + digit2;
        list1.push(parseInt(num));
    }
}

for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            let digit1 = i.toString();
            let digit2 = j.toString();
            let digit3 = k.toString();

            let num = digit1 + digit2 + digit3;
            list2.push(parseInt(num));
        }
    }
}

for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            if (i + j + k === i * j * k) {
                let digit1 = i.toString();
                let digit2 = j.toString();
                let digit3 = k.toString();

                let num = digit1 + digit2 + digit3;
                list3.push(parseInt(num));
            }
        }
    }
}