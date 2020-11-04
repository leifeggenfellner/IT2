/**
 * 
 * @param {Number} y1 Start year
 * @param {Number} y2 Last year
 */

// Using Date()
const sundaysDate = (y1, y2) => {
    let sundays = 0;
    for (let y = y1; y <= y2; y++) {
        for (let m = 0; m < 12; m++) {
            if (new Date(y, m, 1).getDay() === 0) {
                sundays++;
            }
        }
    }
    return sundays;
}

/**
 * 
 * @param {Number} y Year
 * @param {Number} m Month
 * @param {Number} q Day in month
 * @returns {Number} Returns the day of the week where Sunday = 2
 */

// Using Zeller's Congruence
const dayOfWeek = (y, m, q) => {
    if (m < 3) {
        m = m + 12;
    }

    let J = Math.floor(y / 100);
    let K = y % 100;

    return (q + Math.floor(13 * (m + 1) / 5) + K + Math.floor(K / 4) + Math.floor(J / 4) - (2 * J)) % 7 + 1;
}

/**
 * @returns {Number} Returns the numbers of Sundays that fell on the first of the month
 */

const sundaysZeller = () => {
    let sundays = 0;
    const days = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    for (let y = 1901; y <= 2000; y++) {
        days[1] = 28 + (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0);

        for (let i = 1; i <= 12; i++) {
            for (let j = 1; j <= days[i - 1]; j++) {
                if (dayOfWeek(y, i, j) === 1 && j === 1) {
                    sundays++;
                }
            }
        }
    }

    return sundays;
}
