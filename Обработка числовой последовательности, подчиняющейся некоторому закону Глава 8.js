// 8.1
function task8_1(n) {
    let i = 1;
    while (i * i <= n) {
        console.log(i * i);
        i++;
    }
}

// 8.2
function task8_2_v1(n) {
    let i = 1;
    while (i * i <= n) {
        i++;
    }
    return i * i;
}

// 8.2
function task8_2_v2(n) {
    let i = 1;
    do {
        i++;
    } while (i * i <= n);
    return i * i;
}

// 8.3
function task8_3_v1(a) {
    let znam = 1;
    while (1 / znam >= a) {
        console.log(1 / znam);
        znam++;
    }
}

function task8_3_v2(a) {
    for (let znam = 1; 1 / znam >= a; znam++) {
        console.log(1 / znam);
    }
}

// 8.4
function task8_4(a) {
    let znam = 1;
    while (1 / znam >= a) {
        znam++;
    }
    return 1 / znam;
}

// 8.5 разные варианты
function task8_5_v1(a) {
    let n = 2;
    while (1 + 1/n >= a) {
        console.log(1 + 1/n);
        n++;
    }
}

function task8_5_v2(a) {
    for (let n = 2; 1 + 1/n >= a; n++) {
        console.log(1 + 1/n);
    }
}

// 8.6
function task8_6(a) {
    let n = 2;
    while (1 + 1/n >= a) {
        console.log(1 + 1/n);
        n++;
    }
}

// 8.7
function task8_7(a) {
    let n = 2;
    while (1 + 1/n >= a) {
        n++;
    }
    return 1 + 1/n;
}

// 8.8
function task8_8(a) {
    let n = 2;
    while (1 + 1/n >= a) {
        console.log(`n = ${n}`);
        n++;
    }
}

// 8.9
function task8_9(a) {
    let n = 2;
    while (1 + 1/n >= a) {
        n++;
    }
    return n;
}

// 8.10
function task8_10(a) {
    let n = 1;
    let sum = 1;
    console.log(1);

    while (sum < a) {
        sum += 1/n;
        if (sum < a) {
            console.log(sum);
        }
        n++;
    }
}

// 8.11
function task8_11(n) {
    let sum = 0;
    let k = 1;
    while (sum <= n) {
        sum += 1/k;
        k++;
    }
    return sum;
}

// 8.12
function task8_12(a) {
    let n = 1;
    let sum = 1;
    while (sum <= a) {
        console.log(`n = ${n}, сумма = ${sum}`);
        n++;
        sum += 1/n;
    }
}

// 8.13
function task8_13(a) {
    let n = 1;
    let sum = 1;
    while (sum <= a) {
        n++;
        sum += 1/n;
    }
    return n;
}

// 8.14
function task8_14_v1(a) {
    let znam = 1;
    while (1 / znam >= a) {
        znam++;
    }
    return 1 / znam;
}

function task8_14_v2(a) {
    let znam = 1;
    let current = 1;
    while (current >= a) {
        znam++;
        current = 1 / znam;
    }
    return current;
}

// 8.15
function task8_15_v1(m) {
    for (let x = 1; x <= 100; x++) {
        const y = 1 / Math.sqrt(x);
        if (y < m) {
            console.log(y);
        }
    }
}

function task8_15_v2(m) {
    let x = 1;
    while (x <= 100) {
        const y = 1 / Math.sqrt(x);
        if (y < m) {
            console.log(y);
        }
        x++;
    }
}

// 8.16
function task8_16_v1(m) {
    for (let n = 2; ; n++) {
        const value = 1 - 1/(n*n);
        if (value >= m) {
            console.log(value);
        } else {
            break;
        }
    }
}

function task8_16_v2(m) {
    let n = 2;
    let value = 1 - 1/(n*n);
    while (value >= m) {
        console.log(value);
        n++;
        value = 1 - 1/(n*n);
    }
}

// 8.17
function task8_17() {
    let num1 = 1, den1 = 1;
    let num2 = 2, den2 = 1;
    let num3, den3;
    let diff = Infinity;

    while (diff > 0.001) {
        num3 = num1 + num2;
        den3 = den1 + den2;
        diff = Math.abs(num3/den3 - num2/den2);

        num1 = num2;
        den1 = den2;
        num2 = num3;
        den2 = den3;
    }

    return {numerator: num3, denominator: den3, value: num3/den3};
}

// 8.18
function task8_18(a, x, epsilon) {
    let yPrev = x;
    let yCurr = (yPrev + a / yPrev) / 2;
    let diff = Math.abs(yCurr*yCurr - yPrev*yPrev);

    while (diff >= epsilon) {
        yPrev = yCurr;
        yCurr = (yPrev + a / yPrev) / 2;
        diff = Math.abs(yCurr*yCurr - yPrev*yPrev);
    }

    return yCurr;
}

// 8.19 а)
function task8_19_a() {
    let fib1 = 1, fib2 = 1;
    let sum = 2;
    let fibNext;

    while (true) {
        fibNext = fib1 + fib2;
        if (fibNext > 1000) break;
        sum += fibNext;
        fib1 = fib2;
        fib2 = fibNext;
    }

    return sum;
}

// 8.19 б)
function task8_19_b(n) {
    let fib1 = 1, fib2 = 1;
    let fibNext;

    while (true) {
        if (fib2 > n) return fib2;
        fibNext = fib1 + fib2;
        fib1 = fib2;
        fib2 = fibNext;
    }
}