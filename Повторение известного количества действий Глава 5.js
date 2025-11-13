// 5.1
for (let i = 0; i < 10; i++) {
    process.stdout.write("20 ");
}
console.log();

// 5.2
const number = 5;
const count = 8;
for (let i = 0; i < count; i++) {
    process.stdout.write(number + " ");
}
console.log();

// 5.3 а
for (let i = 20; i <= 35; i++) {
    console.log(i);
}

// 5.3 б
const a = 40;
for (let i = a; i <= 50; i++) {
    console.log(i * i);
}

// 5.3 в
const b = 15;
for (let i = 10; i <= b; i++) {
    console.log(i * i * i);
}

// 5.3 г
const a2 = 10;
const b2 = 15;
for (let i = a2; i <= b2; i++) {
    console.log(i);
}

// 5.4 а
for (let i = 10; i <= 25; i++) {
    console.log(i + " " + (i + 0.4));
}

// 5.4 б
for (let i = 25; i <= 35; i++) {
    console.log(i + " " + (i + 0.5) + " " + (i - 0.2));
}

// 5.5 а
for (let i = 21; i >= 10; i--) {
    console.log(i + " " + (i - 1.8));
}

// 5.5 б
for (let i = 45; i >= 25; i--) {
    console.log(i + " " + (i - 0.5) + " " + (i - 0.8));
}

// 5.6 а
for (let i = 21; i <= 35; i++) {
    console.log(i + " " + (i - 0.6));
}

// 5.6 б
for (let i = 16; i <= 24; i++) {
    console.log(i + " " + (i - 0.5) + " " + (i + 0.8));
}

// 5.7
const pricePerUnit = 20.4;
console.log("Количество | Стоимость");
for (let i = 2; i <= 20; i++) {
    console.log(i + " | " + (i * pricePerUnit).toFixed(2));
}

// 5.8
console.log("Фунты | Кг");
for (let pounds = 1; pounds <= 10; pounds++) {
    const kg = pounds * 0.453;
    console.log(pounds + " | " + kg.toFixed(3));
}

// 5.9
console.log("Дюймы | Сантиметры");
for (let inches = 10; inches <= 22; inches++) {
    const cm = inches * 2.54;
    console.log(inches + " | " + cm.toFixed(1));
}

// 5.10
const exchangeRate = 75.5;
console.log("Доллары | Рубли");
for (let dollars = 1; dollars <= 20; dollars++) {
    console.log(dollars + " | " + (dollars * exchangeRate).toFixed(2));
}

// 5.11
const R = 6350;
console.log("Высота (км) | Расстояние до горизонта (км)");
for (let h = 1; h <= 10; h++) {
    const distance = Math.sqrt((R + h) * (R + h) - R * R);
    console.log(h + " | " + distance.toFixed(2));
}

// 5.12
const p0 = 1.29;
const z = 0.000125;
console.log("Высота (м) | Плотность (кг/м³)");
for (let h = 0; h <= 1000; h += 100) {
    const p = p0 * Math.exp(-h * z);
    console.log(h + " | " + p.toFixed(4));
}

// 5.13
for (let i = 1; i <= 9; i++) {
    console.log(i + " x 7 = " + (i * 7));
}

// 5.14
for (let i = 1; i <= 9; i++) {
    console.log("9 x " + i + " = " + (9 * i));
}

// 5.15
const n = 6;
for (let i = 1; i <= 9; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}

// 5.16
for (let i = 2; i <= 15; i++) {
    console.log(Math.sin(i).toFixed(4));
}

// 5.17
for (let x = 4; x <= 28; x++) {
    const t = x + 3;
    const y = 3 * t * t + 4.87 * t - 3;
    console.log("x = " + x + ", y = " + y.toFixed(2));
}

// 5.18
for (let a = 2; a <= 17; a++) {
    const t = 3 * a;
    const z = 4.3 * t * t - 8 * t + 13;
    console.log("a = " + a + ", z = " + z.toFixed(2));
}

// 5.19
for (let x = 0.1; x <= 1.5; x += 0.1) {
    console.log(Math.sin(x).toFixed(4));
}

// 5.20
for (let i = 1; i <= 9; i++) {
    console.log((i / 10).toFixed(1));
}

// 5.21
const cheesePricePerKg = 800;
console.log("Вес (г) | Стоимость (руб)");
for (let weight = 50; weight <= 1000; weight += 50) {
    const price = (weight / 1000) * cheesePricePerKg;
    console.log(weight + " | " + price.toFixed(2));
}

// 5.22
const candyPricePerKg = 500;
console.log("Вес (г) | Стоимость (руб)");
for (let weight = 100; weight <= 2000; weight += 100) {
    const price = (weight / 1000) * candyPricePerKg;
    console.log(weight + " | " + price.toFixed(2));
}

// 5.23
for (let i = 21; i <= 28; i++) {
    console.log((i / 10).toFixed(1));
}

// 5.24
for (let i = 32; i <= 39; i++) {
    console.log((i / 10).toFixed(1));
}

// 5.25
for (let i = 22; i <= 42; i += 2) {
    console.log((i / 10).toFixed(1));
}

// 5.26
for (let i = 44; i <= 64; i += 2) {
    console.log((i / 10).toFixed(1));
}

// 5.27 а
let sum27a = 0;
for (let i = 200; i <= 600; i++) {
    sum27a += i;
}
console.log("Сумма от 200 до 600: " + sum27a);

// 5.27 б
const a27 = 300;
let sum27b = 0;
for (let i = a27; i <= 400; i++) {
    sum27b += i;
}
console.log("Сумма от " + a27 + " до 400: " + sum27b);

// 5.27 в
const b27 = 10;
let sum27c = 0;
for (let i = -15; i <= b27; i++) {
    sum27c += i;
}
console.log("Сумма от -15 до " + b27 + ": " + sum27c);

// 5.27 г
const a27_2 = 10;
const b27_2 = 20;
let sum27d = 0;
for (let i = a27_2; i <= b27_2; i++) {
    sum27d += i;
}
console.log("Сумма от " + a27_2 + " до " + b27_2 + ": " + sum27d);

// 5.28 а
let product28a = 1;
for (let i = 7; i <= 14; i++) {
    product28a *= i;
}
console.log("Произведение от 7 до 14: " + product28a);

// 5.28 б
const a28 = 10;
let product28b = 1;
for (let i = a28; i <= 15; i++) {
    product28b *= i;
}
console.log("Произведение от " + a28 + " до 15: " + product28b);

// 5.28 в
const b28 = 8;
let product28c = 1;
for (let i = 1; i <= b28; i++) {
    product28c *= i;
}
console.log("Произведение от 1 до " + b28 + ": " + product28c);

// 5.28 г
const a28_2 = 3;
const b28_2 = 6;
let product28d = 1;
for (let i = a28_2; i <= b28_2; i++) {
    product28d *= i;
}
console.log("Произведение от " + a28_2 + " до " + b28_2 + ": " + product28d);

// 5.29 а
let sum29a = 0;
let count29a = 0;
for (let i = 1; i <= 750; i++) {
    sum29a += i;
    count29a++;
}
console.log("Среднее от 1 до 750: " + (sum29a / count29a).toFixed(2));

// 5.29 б
const b29 = 200;
let sum29b = 0;
let count29b = 0;
for (let i = 150; i <= b29; i++) {
    sum29b += i;
    count29b++;
}
console.log("Среднее от 150 до " + b29 + ": " + (sum29b / count29b).toFixed(2));

// 5.29 в
const a29 = 100;
let sum29c = 0;
let count29c = 0;
for (let i = a29; i <= 200; i++) {
    sum29c += i;
    count29c++;
}
console.log("Среднее от " + a29 + " до 200: " + (sum29c / count29c).toFixed(2));

// 5.29 г
const a29_2 = 20;
const b29_2 = 30;
let sum29d = 0;
let count29d = 0;
for (let i = a29_2; i <= b29_2; i++) {
    sum29d += i;
    count29d++;
}
console.log("Среднее от " + a29_2 + " до " + b29_2 + ": " + (sum29d / count29d).toFixed(2));

// 5.30 а
let sum30a = 0;
for (let i = 25; i <= 40; i++) {
    sum30a += i * i * i;
}
console.log("Сумма кубов от 25 до 40: " + sum30a);

// 5.30 б
const a30 = 40;
let sum30b = 0;
for (let i = a30; i <= 50; i++) {
    sum30b += i * i;
}
console.log("Сумма квадратов от " + a30 + " до 50: " + sum30b);

// 5.30 в
const n30 = 10;
let sum30c = 0;
for (let i = 1; i <= n30; i++) {
    sum30c += i * i;
}
console.log("Сумма квадратов от 1 до " + n30 + ": " + sum30c);

// 5.30 г
const a30_2 = 5;
const b30_2 = 10;
let sum30d = 0;
for (let i = a30_2; i <= b30_2; i++) {
    sum30d += i * i;
}
console.log("Сумма квадратов от " + a30_2 + " до " + b30_2 + ": " + sum30d);

// 5.31
const n31 = 5;
let sum31 = 0;
for (let i = 0; i <= n31; i++) {
    sum31 += Math.pow(n31 + i, 2);
}
console.log("Сумма от n² до (2n)² при n=" + n31 + ": " + sum31);

// 5.32
let sum32 = 0;
for (let i = 1; i <= 10; i++) {
    sum32 += i / (i + 1);
}
console.log("Сумма 5.32: " + sum32.toFixed(4));

// 5.33
let sum33 = 0;
for (let i = 1; i <= 8; i++) {
    sum33 += i / Math.pow(3, i);
}
console.log("Сумма 5.33: " + sum33.toFixed(4));

// 5.34
const n34 = 10;
let sum34 = 0;
for (let i = 1; i <= n34; i++) {
    sum34 += i * i;
}
console.log("Сумма квадратов от 1 до " + n34 + ": " + sum34);

// 5.35
const n35 = 5;
let sum35 = 0;
for (let i = 1; i <= n35 - 1; i++) {
    sum35 += i * (i + 1);
}
console.log("Сумма произведений при n=" + n35 + ": " + sum35);

// 5.36
let sum36 = 0;
let term = 1;
for (let i = 1; i <= 10; i++) {
    term *= 2;
    sum36 += term;
}
console.log("Сумма 5.36: " + sum36);

// 5.37
let sum37 = 0;
let sign = -1;
for (let i = 1; i <= 10; i++) {
    sign = -sign;
    sum37 += sign * i * i;
}
console.log("Сумма 5.37: " + sum37);

// 5.38
const x38 = 2;
let sum38 = 0;
let factorial38 = 1;
for (let i = 1; i <= 10; i++) {
    factorial38 *= i;
    sum38 += Math.pow(x38, i) / factorial38;
}
console.log("Сумма 5.38 при x=2: " + sum38.toFixed(4));

// 5.39
const x39 = 2;
let sum39 = 1;
let factorial39 = 1;
let power39 = 1;
for (let i = 1; i <= 10; i++) {
    factorial39 *= i;
    power39 *= x39;
    sum39 += power39 / factorial39;
}
console.log("Сумма 5.39 при x=2: " + sum39.toFixed(4));

// 5.40
const nineDigitNumber = 123456789;
let sum40 = 0;
let temp40 = nineDigitNumber;
while (temp40 > 0) {
    sum40 += temp40 % 10;
    temp40 = Math.floor(temp40 / 10);
}
console.log("Сумма цифр 9-значного числа: " + sum40);

// 5.41
const number41 = 123456;
const n41 = 3;
let product41 = 1;
let sum41 = 0;
let temp41 = number41;
let digits41 = 0;
while (temp41 > 0 && digits41 < n41) {
    const digit = temp41 % 10;
    product41 *= digit;
    sum41 += digit;
    temp41 = Math.floor(temp41 / 10);
    digits41++;
}
console.log("Произведение последних " + n41 + " цифр: " + product41);
console.log("Сумма последних " + n41 + " цифр: " + sum41);

// 5.42 а
let position = 0;
let direction = 1;
for (let i = 1; i <= 100; i++) {
    position += direction * (1 / i);
    direction = -direction;
}
console.log("Положение после 100 этапов: " + position.toFixed(4));

// 5.42 б
let totalDistance = 0;
for (let i = 1; i <= 100; i++) {
    totalDistance += 1 / i;
}
console.log("Общий путь после 100 этапов: " + totalDistance.toFixed(4));

// 5.43
const n43 = 5;
let a = 1;
console.log("a0 = " + a);
for (let k = 1; k <= n43; k++) {
    a = k * a + 1 / k;
    console.log("a" + k + " = " + a.toFixed(4));
}

// 5.44 а
const n44 = 10;
let fib1 = 1;
let fib2 = 1;
let fibN = 0;
if (n44 === 1 || n44 === 2) {
    fibN = 1;
} else {
    for (let i = 3; i <= n44; i++) {
        fibN = fib1 + fib2;
        fib1 = fib2;
        fib2 = fibN;
    }
}
console.log(n44 + "-й член Фибоначчи: " + fibN);

// 5.44 б
console.log("Первые " + n44 + " членов Фибоначчи:");
let f1 = 1;
let f2 = 1;
console.log("1: " + f1);
if (n44 >= 2) console.log("2: " + f2);
for (let i = 3; i <= n44; i++) {
    const f3 = f1 + f2;
    console.log(i + ": " + f3);
    f1 = f2;
    f2 = f3;
}

// 5.45
console.log("3-10 члены Фибоначчи:");
let fib45_1 = 1;
let fib45_2 = 1;
for (let i = 3; i <= 10; i++) {
    const fib = fib45_1 + fib45_2;
    console.log(i + "-й: " + fib);
    fib45_1 = fib45_2;
    fib45_2 = fib;
}

// 5.46 а
const k46 = 6;
let numerator1 = 1;
let denominator1 = 1;
let numerator2 = 2;
let denominator2 = 1;
if (k46 === 1) {
    console.log("1-й член: " + numerator1 + "/" + denominator1);
} else if (k46 === 2) {
    console.log("2-й член: " + numerator2 + "/" + denominator2);
} else {
    for (let i = 3; i <= k46; i++) {
        const num = numerator1 + numerator2;
        const den = denominator1 + denominator2;
        numerator1 = numerator2;
        denominator1 = denominator2;
        numerator2 = num;
        denominator2 = den;
    }
    console.log(k46 + "-й член: " + numerator2 + "/" + denominator2);
}

// 5.46 б
const n46 = 7;
console.log("Первые " + n46 + " членов последовательности:");
let num1 = 1;
let den1 = 1;
let num2 = 2;
let den2 = 1;
console.log("1: " + num1 + "/" + den1);
if (n46 >= 2) console.log("2: " + num2 + "/" + den2);
for (let i = 3; i <= n46; i++) {
    const num = num1 + num2;
    const den = den1 + den2;
    console.log(i + ": " + num + "/" + den);
    num1 = num2;
    den1 = den2;
    num2 = num;
    den2 = den;
}

// 5.47
const n47 = 6;
let v1 = 0;
let v2 = 0;
let v3 = 1.5;
let vn = 0;
if (n47 === 1 || n47 === 2) {
    vn = 0;
} else if (n47 === 3) {
    vn = 1.5;
} else {
    for (let i = 4; i <= n47; i++) {
        vn = (i + 1) / (i * i + 1) * v3 - v2 * v1;
        v1 = v2;
        v2 = v3;
        v3 = vn;
    }
}
console.log("v" + n47 + " = " + vn.toFixed(4));

// 5.48
console.log("Количество амеб:");
let amoebaCount = 1;
for (let hours = 3; hours <= 24; hours += 3) {
    amoebaCount *= 2;
    console.log("Через " + hours + " часов: " + amoebaCount + " клеток");
}

// 5.49 а
let deposit = 1000;
console.log("Прирост вклада:");
for (let month = 1; month <= 10; month++) {
    const increase = deposit * 0.02;
    deposit += increase;
    console.log(month + "-й месяц: +" + increase.toFixed(2) + " руб");
}

// 5.49 б
deposit = 1000;
console.log("Сумма вклада:");
for (let month = 3; month <= 12; month++) {
    deposit *= 1.02;
    if (month >= 3) {
        console.log("Через " + month + " месяцев: " + deposit.toFixed(2) + " руб");
    }
}

// 5.50 а
let distance = 10;
console.log("Пробег по дням:");
for (let day = 2; day <= 10; day++) {
    distance *= 1.1;
    console.log(day + "-й день: " + distance.toFixed(2) + " км");
}

// 5.50 б
distance = 10;
let totalDistance = 10;
for (let day = 2; day <= 7; day++) {
    distance *= 1.1;
    totalDistance += distance;
}
console.log("Суммарный путь за 7 дней: " + totalDistance.toFixed(2) + " км");

// 5.51 а
let area = 100;
let yield = 20;
console.log("Урожайность по годам:");
for (let year = 2; year <= 8; year++) {

    console.log(year + "-й год: " + yield.toFixed(2) + " ц/га");
}

// 5.51 б
area = 100;
for (let year = 1; year <= 7; year++) {
    if (year >= 4) {
        console.log(year + "-й год, площадь: " + area.toFixed(2) + " га");
    }
    area *= 1.05;
}

// 5.51 в
area = 100;
yield = 20;
let totalHarvest = 0;
for (let year = 1; year <= 6; year++) {
    totalHarvest += area * yield;
    area *= 1.05;

}
console.log("Урожай за 6 лет: " + totalHarvest.toFixed(2) + " ц");

// 5.52
let totalVolume = 0;
let diameter = 10;
for (let i = 1; i <= 12; i++) {
    const radius = diameter / 2;
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    totalVolume += volume;
    diameter += 1;
}
console.log("Суммарный объем шаров: " + (totalVolume / 1000).toFixed(2) + " литров");

// 5.53
let sum53 = 0;
let power53 = 4;
for (let i = 2; i <= 10; i++) {
    sum53 += power53;
    power53 *= 2;
}
console.log("Сумма 2²+2³+...+2¹⁰: " + sum53);

// 5.54
const a54 = 2;
const n54 = 5;
let result54 = a54;
console.log("Степени числа " + a54 + ":");
for (let i = 1; i <= n54; i++) {
    console.log(a54 + "^" + i + " = " + result54);
    result54 *= a54;
}

// 5.55
let sum55 = 0;
for (let i = 1; i <= 10; i++) {
    sum55 += Math.pow(-1, i) * i * i;
}
console.log("Сумма -1²+2²-3²+...+10²: " + sum55);

// 5.56
const steps = 1000;
const stepSize = Math.PI / steps;
let area56 = 0;
for (let i = 0; i < steps; i++) {
    const x = i * stepSize;
    area56 += Math.sin(x) * stepSize;
}
console.log("Площадь арки синусоиды: " + area56.toFixed(4));

// 5.57
let area57 = 0;
const step57 = 0.001;
for (let x = 2; x <= 4; x += step57) {
    const y = 0.3 * Math.pow(x - 1, 2) + 3;
    if (y >= 2 && y <= 4) {
        area57 += step57 * (y - 2);
    }
}
console.log("Площадь фигуры 5.57: " + area57.toFixed(4));

// 5.58
let area58 = 0;
const step58 = 0.001;
for (let x = 0; x <= 2; x += step58) {
    const y = 0.4 * Math.pow(x + 2, 2) + 1;
    if (y <= 2) {
        area58 += step58 * y;
    }
}
console.log("Площадь фигуры 5.58: " + area58.toFixed(4));

// 5.59
const n59 = 6;
let factorial59 = 1;
for (let i = 1; i <= n59; i++) {
    factorial59 *= i;
}
console.log(n59 + "! = " + factorial59);

// 5.60
const n60 = 5;
const a60 = 3.5;
let product60 = 0;
for (let i = 0; i < Math.abs(n60); i++) {
    product60 += a60;
}
if (n60 < 0) {
    product60 = -product60;
}
console.log(n60 + " * " + a60 + " = " + product60);

// 5.61 Способ 1
const x61 = 5;
const y61 = 4;
let product61_1 = 0;
for (let i = 0; i < y61; i++) {
    product61_1 += x61;
}
console.log("Способ 1: " + x61 + " * " + y61 + " = " + product61_1);

// 5.61 Способ 2
let product61_2 = 0;
let temp61 = Math.abs(y61);
while (temp61 > 0) {
    product61_2 += Math.abs(x61);
    temp61--;
}
if ((x61 < 0 && y61 > 0) || (x61 > 0 && y61 < 0)) {
    product61_2 = -product61_2;
}
console.log("Способ 2: " + x61 + " * " + y61 + " = " + product61_2);

// 5.62
const a62 = 2;
const n62 = 5;
let power62 = 1;
for (let i = 0; i < Math.abs(n62); i++) {
    power62 *= a62;
}
if (n62 < 0) {
    power62 = 1 / power62;
}
console.log(a62 + "^" + n62 + " = " + power62);

// 5.63
const m63 = 3;
const n63 = 5;
let sum63 = 0;
for (let i = m63; i <= n63; i++) {
    sum63 += i * i * i;
}
console.log("Сумма кубов от " + m63 + " до " + n63 + ": " + sum63);

// 5.64
const sevenDigitNumber = 1234567;
let reversedNumber = 0;
let temp64 = sevenDigitNumber;
while (temp64 > 0) {
    reversedNumber = reversedNumber * 10 + (temp64 % 10);
    temp64 = Math.floor(temp64 / 10);
}
console.log("Обратное число: " + reversedNumber);

// 5.65
const n65 = 6;
let square65 = 0;
for (let i = 1; i <= 2 * n65 - 1; i += 2) {
    square65 += i;
}
console.log(n65 + "² = " + square65);

// 5.66
let sum66 = 0;
for (let n = 1; n <= 12; n++) {
    let square = 0;
    for (let i = 1; i <= 2 * n - 1; i += 2) {
        square += i;
    }
    sum66 += square;
}
console.log("Сумма квадратов от 1 до 12: " + sum66);

// 5.67
const n67 = 4;
let cube = 0;
let start = 2 * n67 * (n67 - 1) + 1;
for (let i = 0; i < n67; i++) {
    cube += start + 2 * i;
}
console.log(n67 + "³ = " + cube);

// 5.68
const n68 = 5;
let sum68 = 0;
let fact68 = 1;
for (let i = 1; i <= n68; i++) {
    fact68 *= i;
    sum68 += fact68;
}
console.log("Сумма факториалов до " + n68 + "!: " + sum68);

// 5.69
const n69 = 4;
let sum69 = 0;
let fact69 = 1;
for (let i = 1; i <= n69; i++) {
    fact69 *= i;
    sum69 += 1 / fact69;
}
console.log("Сумма 1/i! до " + n69 + ": " + sum69.toFixed(4));

// 5.70
const n70 = 4;
let sum70 = 0;
let fact70 = 1;
for (let i = 1; i <= n70; i++) {
    fact70 *= i;
    sum70 += Math.pow(2, i) / fact70;
}
console.log("Сумма 2^i/i! до " + n70 + ": " + sum70.toFixed(4));

// 5.71
const x71 = 2;
const n71 = 5;
let sum71 = 0;
let fact71 = 1;
let power71 = 1;
for (let i = 0; i <= n71; i++) {
    if (i > 0) {
        fact71 *= i;
        power71 *= x71;
    }
    sum71 += power71 / fact71;
}
console.log("Сумма x^i/i! до " + n71 + " при x=" + x71 + ": " + sum71.toFixed(4));

// 5.72 а
const n72a = 5;
let sum72a = 0;
for (let i = 1; i <= n72a; i++) {
    sum72a += 1 / i;
}
console.log("Сумма 1/i до " + n72a + ": " + sum72a.toFixed(4));

// 5.72 б
const n72b = 5;
let sum72b = 0;
for (let i = 1; i <= n72b; i++) {
    sum72b += 1 / Math.pow(i, 3);
}
console.log("Сумма 1/i³ до " + n72b + ": " + sum72b.toFixed(4));

// 5.72 в
const n72c = 5;
let sum72c = 0;
for (let i = 1; i <= n72c; i++) {
    sum72c += 1 / Math.pow(i, i);
}
console.log("Сумма 1/i^i до " + n72c + ": " + sum72c.toFixed(4));

// 5.72 г
const n72d = 5;
let sum72d = 0;
let factorial72d = 1;
for (let i = 1; i <= n72d; i++) {
    factorial72d *= i;
    sum72d += 1 / factorial72d;
}
console.log("Сумма 1/i! до " + n72d + ": " + sum72d.toFixed(4));

// 5.73
const length = 4.5;
const distanceFromWall = 3;
console.log("Угол между палкой и полом:");
for (let slide = 0; slide <= distanceFromWall; slide += 0.2) {
    const remaining = distanceFromWall - slide;
    const angle = Math.acos(remaining / length) * (180 / Math.PI);
    console.log("Скольжение " + slide.toFixed(1) + " м: " + angle.toFixed(1) + "°");
}

// 5.74 Способ 1
console.log("Нечетные числа от 10 до 100 (способ 1):");
for (let i = 10; i <= 100; i++) {
    if (i % 2 !== 0) {
        process.stdout.write(i + " ");
    }
}
console.log();

// 5.74 Способ 2
console.log("Нечетные числа от 10 до 100 (способ 2):");
for (let i = 11; i <= 99; i += 2) {
    process.stdout.write(i + " ");
}
console.log();

// 5.75
console.log("Числа от 100 до 200, кратные 3:");
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        process.stdout.write(i + " ");
    }
}
console.log();

// 5.76
const a76 = 10;
const b76 = 50;
const c76 = 7;
console.log("Числа от " + a76 + " до " + b76 + ", кратные " + c76 + ":");
for (let i = a76; i <= b76; i++) {
    if (i % c76 === 0) {
        process.stdout.write(i + " ");
    }
}
console.log();

// 5.77
console.log("Двузначные нечетные числа, оканчивающиеся на 3 или 7:");
for (let i = 10; i <= 99; i++) {
    if (i % 2 !== 0 && (i % 10 === 3 || i % 10 === 7)) {
        process.stdout.write(i + " ");
    }
}
console.log();

// 5.78
console.log("Трехзначные числа, которые при делении на 47 дают остаток 43, а на 43 - остаток 45:");
for (let i = 100; i <= 999; i++) {
    if (i % 47 === 43 && i % 43 === 45) {
        console.log(i);
    }
}

// 5.79
console.log("Четырехзначные числа, которые при делении на 133 дают остаток 125, а на 134 - остаток 111:");
for (let i = 1000; i <= 9999; i++) {
    if (i % 133 === 125 && i % 134 === 111) {
        console.log(i);
    }
}

// 5.80
const n80 = 3;
console.log("Двузначные числа, которые делятся на " + n80 + " или содержат цифру " + n80 + ":");
for (let i = 10; i <= 99; i++) {
    if (i % n80 === 0 || Math.floor(i / 10) === n80 || i % 10 === n80) {
        process.stdout.write(i + " ");
    }
}
console.log();

// 5.81 а
console.log("Трехзначные числа, квадраты которых оканчиваются на само число:");
for (let i = 100; i <= 999; i++) {
    const square = i * i;
    if (square % 1000 === i) {
        console.log(i + "² = " + square);
    }
}

// 5.81 б
console.log("Трехзначные числа, кратные 7, и сумма цифр также кратна 7:");
for (let i = 100; i <= 999; i++) {
    if (i % 7 === 0) {
        const digit1 = Math.floor(i / 100);
        const digit2 = Math.floor((i % 100) / 10);
        const digit3 = i % 10;
        const sumDigits = digit1 + digit2 + digit3;
        if (sumDigits % 7 === 0) {
            console.log(i + " (сумма цифр: " + sumDigits + ")");
        }
    }
}

// 5.82 а
console.log("Двузначные числа, сумма квадратов цифр которых делится на 13:");
for (let i = 10; i <= 99; i++) {
    const digit1 = Math.floor(i / 10);
    const digit2 = i % 10;
    const sumSquares = digit1 * digit1 + digit2 * digit2;
    if (sumSquares % 13 === 0) {
        console.log(i + " (сумма квадратов цифр: " + sumSquares + ")");
    }
}

// 5.82 б
console.log("Двузначные числа, где (сумма цифр + квадрат суммы цифр) = само число:");
for (let i = 10; i <= 99; i++) {
    const digit1 = Math.floor(i / 10);
    const digit2 = i % 10;
    const sumDigits = digit1 + digit2;
    if (sumDigits + sumDigits * sumDigits === i) {
        console.log(i + " (сумма цифр: " + sumDigits + ")");
    }
}

// 5.83
let sum83 = 0;
for (let i = 1; i < 50; i += 2) {
    sum83 += i;
}
console.log("Сумма положительных нечетных чисел меньше 50: " + sum83);

// 5.84
let sum84 = 0;
for (let i = 100; i <= 998; i += 2) {
    sum84 += i;
}
console.log("Сумма четных трехзначных чисел: " + sum84);

// 5.85
const a85 = 10;
const b85 = 50;
let sum85 = 0;
for (let i = a85; i <= b85; i++) {
    if (i % 4 === 0) {
        sum85 += i;
    }
}
console.log("Сумма чисел от " + a85 + " до " + b85 + ", кратных 4: " + sum85);

// 5.86
let sum86 = 0;
for (let i = 31; i < 100; i++) {
    if (i % 3 === 0 && (i % 10 === 2 || i % 10 === 4 || i % 10 === 8)) {
        sum86 += i;
    }
}
console.log("Сумма чисел от 30 до 100, кратных 3 и оканчивающихся на 2,4,8: " + sum86);

// 5.87
let count87 = 0;
for (let i = 100; i <= 500; i++) {
    const digit1 = Math.floor(i / 100);
    const digit2 = Math.floor((i % 100) / 10);
    const digit3 = i % 10;
    if (digit1 + digit2 + digit3 === 15) {
        count87++;
    }
}
console.log("Количество чисел от 100 до 500 с суммой цифр 15: " + count87);

// 5.88
const s = 15;
let count88 = 0;
for (let i = 100; i <= 999; i++) {
    const digit1 = Math.floor(i / 100);
    const digit2 = Math.floor((i % 100) / 10);
    const digit3 = i % 10;
    if (digit1 + digit2 + digit3 === s) {
        count88++;
    }
}
console.log("Количество трехзначных чисел с суммой цифр " + s + ": " + count88);

// 5.89
let count89 = 0;
for (let i = 100; i <= 999; i++) {
    if (i % 7 === 0) {
        const digit1 = Math.floor(i / 100);
        const digit2 = Math.floor((i % 100) / 10);
        const digit3 = i % 10;
        if ((digit1 + digit2 + digit3) % 7 === 0) {
            count89++;
        }
    }
}
console.log("Количество трехзначных чисел, кратных 7, и сумма цифр также кратна 7: " + count89);

// 5.90
const n90 = 10;
let fib90_1 = 1;
let fib90_2 = 1;
let sumFib = 2;
for (let i = 3; i <= n90; i++) {
    const fib = fib90_1 + fib90_2;
    sumFib += fib;
    fib90_1 = fib90_2;
    fib90_2 = fib;
}
const isEven = sumFib % 2 === 0;
console.log("Сумма первых " + n90 + " чисел Фибоначчи: " + sumFib + " (четная: " + isEven + ")");

// 5.91 а
const num91 = 28;
console.log("Делители числа " + num91 + ":");
for (let i = 1; i <= num91; i++) {
    if (num91 % i === 0) {
        process.stdout.write(i + " ");
    }
}
console.log();

// 5.91 б
let sumDivisors = 0;
for (let i = 1; i <= num91; i++) {
    if (num91 % i === 0) {
        sumDivisors += i;
    }
}
console.log("Сумма делителей: " + sumDivisors);

// 5.91 в
let sumEvenDivisors = 0;
for (let i = 1; i <= num91; i++) {
    if (num91 % i === 0 && i % 2 === 0) {
        sumEvenDivisors += i;
    }
}
console.log("Сумма четных делителей: " + sumEvenDivisors);

// 5.91 г
let countDivisors = 0;
for (let i = 1; i <= num91; i++) {
    if (num91 % i === 0) {
        countDivisors++;
    }
}
console.log("Количество делителей: " + countDivisors);

// 5.91 д
let countOddDivisors = 0;
for (let i = 1; i <= num91; i++) {
    if (num91 % i === 0 && i % 2 !== 0) {
        countOddDivisors++;
    }
}
console.log("Количество нечетных делителей: " + countOddDivisors);

// 5.91 е
let countEvenDivisors = 0;
for (let i = 1; i <= num91; i++) {
    if (num91 % i === 0 && i % 2 === 0) {
        countEvenDivisors++;
    }
}
console.log("Количество четных делителей: " + countEvenDivisors + " из " + countDivisors);

// 5.91 ж
const d91 = 5;
let countGreaterThanD = 0;
for (let i = 1; i <= num91; i++) {
    if (num91 % i === 0 && i > d91) {
        countGreaterThanD++;
    }
}
console.log("Количество делителей, больших " + d91 + ": " + countGreaterThanD);

// 5.92
const num92 = 17;
let isPrime = true;
if (num92 < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num92); i++) {
        if (num92 % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(num92 + " является простым: " + isPrime);

// 5.93
const num93 = 28;
let sumProperDivisors = 0;
for (let i = 1; i < num93; i++) {
    if (num93 % i === 0) {
        sumProperDivisors += i;
    }
}
const isPerfect = sumProperDivisors === num93;
console.log(num93 + " является совершенным: " + isPerfect + " (сумма делителей: " + sumProperDivisors + ")");

// 5.94
const n94 = 50;
console.log("Натуральные числа, квадрат которых не превышает " + n94 + ":");
let i94 = 1;
while (i94 * i94 <= n94) {
    process.stdout.write(i94 + " ");
    i94++;
}
console.log();