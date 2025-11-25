// 6.1 а
const a = 17;
const b = 3;
let quotient = 0;
let tempA = a;
while (tempA >= b) {
    tempA -= b;
    quotient++;
}
console.log("6.1 а) Целочисленное деление " + a + " на " + b + " = " + quotient);

// 6.1 б
let remainder = a;
while (remainder >= b) {
    remainder -= b;
}
console.log("6.1 б) Остаток от деления " + a + " на " + b + " = " + remainder);

// 6.2
const n2 = 20;
let i2 = 1;
console.log("6.2 Натуральные числа до " + n2 + ":");
while (i2 <= n2) {
    console.log(i2);
    i2++;
}

// 6.3
let i3 = 10;
console.log("6.3 Нечетные числа от 10 до 100:");
while (i3 <= 100) {
    if (i3 % 2 !== 0) {
        console.log(i3);
    }
    i3++;
}

// 6.4
let num4 = 191;
while (num4 % 17 !== 0) {
    num4++;
}
console.log("6.4 Минимальное число >190, кратное 17: " + num4);

// 6.5
let num5 = 5000;
while (num5 % 139 !== 0) {
    num5--;
}
console.log("6.5 Максимальное число ≤5000, кратное 139: " + num5);

// 6.6
const factorial = 120;
let num6 = 1;
let fact = 1;
while (fact < factorial) {
    num6++;
    fact *= num6;
}
console.log("6.6 Число для факториала " + factorial + " = " + num6);

// 6.7
const n7 = 50;
let i7 = 1;
console.log("6.7 Числа, квадрат которых ≤ " + n7 + ":");
while (i7 * i7 <= n7) {
    console.log(i7);
    i7++;
}

// 6.8
const n8 = 80;
let i8 = 1;
while (i8 * i8 <= n8 && i8 <= 100) {
    i8++;
}
console.log("6.8 Первое число, квадрат которого >" + n8 + ": " + i8);

// 6.9
console.log("6.9 Введите четное число:");
let input9 = 5; // для примера нечетное
while (input9 % 2 !== 0) {
    console.log("Ошибка! Число должно быть четным.");
    input9 = 8; // исправляем на четное
}
console.log("Спасибо! Вы ввели: " + input9);

// 6.10
const password = 1234;
let input10 = 1111;
let attempts = 0;
console.log("6.10 Введите пароль:");
while (input10 !== password && attempts < 3) {
    console.log("Неверный пароль! Попробуйте еще раз.");
    input10 = 1234; // правильный пароль
    attempts++;
}
if (input10 === password) {
    console.log("Добро пожаловать!");
} else {
    console.log("Превышено количество попыток!");
}

// 6.11
console.log("6.11 Введите 10 чисел (0 для остановки):");
let count11 = 0;
let input11 = 5;
while (count11 < 10 && input11 !== 0) {
    console.log("Введено число: " + input11);
    count11++;
    if (count11 === 5) input11 = 0; // симулируем ввод 0
}

// 6.12
console.log("6.12 Ввод чисел (0 для остановки):");
let input12 = 5;
while (input12 !== 0) {
    console.log("Вы ввели число: " + input12);
    input12 = 0; // заканчиваем цикл
}

// 6.13 а
console.log("6.13 а) Числа от 10 до 30 (цикл while):");
let j13 = 10;
while (j13 <= 30) {
    console.log(j13);
    j13++;
}

// 6.13 б
console.log("6.13 б) Числа от 10 до 30 (цикл do-while):");
let k13 = 10;
do {
    console.log(k13);
    k13++;
} while (k13 <= 30);

// 6.14
console.log("6.14 Числа от 100 до 80 (цикл while):");
let num14 = 100;
while (num14 >= 80) {
    console.log(num14);
    num14--;
}

// 6.15
console.log("6.15 2*n для n от 21 до 151 с шагом 10:");
for (let n = 21; n <= 151; n += 10) {
    console.log(2 * n);
}

// 6.16
console.log("6.16 Числа от 2 до 12 с шагом 0.5:");
for (let n = 2; n <= 12; n += 0.5) {
    console.log(n);
}

// 6.17
console.log("6.17 Числа от 1.0 до 13.5 с шагом 0.5:");
let num17 = 1.0;
while (num17 <= 13.5) {
    console.log(num17.toFixed(1));
    num17 += 0.5;
}

// 6.18 а
const a18 = 10;
const b18 = 20;
console.log("6.18 а) Корни чисел от " + a18 + " до " + b18 + " (цикл while):");
let i18 = a18;
while (i18 <= b18) {
    console.log(Math.sqrt(i18).toFixed(2));
    i18++;
}

// 6.18 б
console.log("6.18 б) Корни чисел от " + a18 + " до " + b18 + " (цикл do-while):");
let j18 = a18;
do {
    console.log(Math.sqrt(j18).toFixed(2));
    j18++;
} while (j18 <= b18);

// 6.19
const num19 = 12345;
console.log("6.19 Цифры числа " + num19 + " столбиком:");
let temp19 = num19;
while (temp19 > 0) {
    console.log(temp19 % 10);
    temp19 = Math.floor(temp19 / 10);
}

// 6.20 а
const num20 = 12345;
let sumDigits = 0;
let temp20 = num20;
while (temp20 > 0) {
    sumDigits += temp20 % 10;
    temp20 = Math.floor(temp20 / 10);
}
console.log("6.20 а) Сумма цифр " + num20 + " = " + sumDigits);

// 6.20 б
temp20 = num20;
let countDigits = 0;
while (temp20 > 0) {
    countDigits++;
    temp20 = Math.floor(temp20 / 10);
}
console.log("6.20 б) Количество цифр " + num20 + " = " + countDigits);

// 6.20 в
temp20 = num20;
let productDigits = 1;
while (temp20 > 0) {
    productDigits *= temp20 % 10;
    temp20 = Math.floor(temp20 / 10);
}
console.log("6.20 в) Произведение цифр " + num20 + " = " + productDigits);

// 6.20 г
temp20 = num20;
let sumAll = 0;
let countAll = 0;
while (temp20 > 0) {
    sumAll += temp20 % 10;
    countAll++;
    temp20 = Math.floor(temp20 / 10);
}
console.log("6.20 г) Среднее арифметическое цифр " + num20 + " = " + (sumAll / countAll).toFixed(2));

// 6.20 д
temp20 = num20;
let sumSquares = 0;
while (temp20 > 0) {
    const digit = temp20 % 10;
    sumSquares += digit * digit;
    temp20 = Math.floor(temp20 / 10);
}
console.log("6.20 д) Сумма квадратов цифр " + num20 + " = " + sumSquares);

// 6.20 е
temp20 = num20;
let sumCubes = 0;
while (temp20 > 0) {
    const digit = temp20 % 10;
    sumCubes += digit * digit * digit;
    temp20 = Math.floor(temp20 / 10);
}
console.log("6.20 е) Сумма кубов цифр " + num20 + " = " + sumCubes);

// 6.20 ж
temp20 = num20;
while (temp20 >= 10) {
    temp20 = Math.floor(temp20 / 10);
}
console.log("6.20 ж) Первая цифра " + num20 + " = " + temp20);

// 6.20 з
temp20 = num20;
const lastDigit = num20 % 10;
while (temp20 >= 10) {
    temp20 = Math.floor(temp20 / 10);
}
const sumFirstLast = temp20 + lastDigit;
console.log("6.20 з) Сумма первой и последней цифр " + num20 + " = " + sumFirstLast);

// 6.21
const num21 = 12345;
let temp21 = num21;
while (temp21 >= 100) {
    temp21 = Math.floor(temp21 / 10);
}
const secondDigit = temp21 % 10;
console.log("6.21 Вторая цифра " + num21 + " = " + secondDigit);

// 6.22
const num22 = 12345;
let temp22 = num22;
while (temp22 >= 1000) {
    temp22 = Math.floor(temp22 / 10);
}
const thirdDigit = temp22 % 10;
console.log("6.22 Третья цифра " + num22 + " = " + thirdDigit);

// 6.23
const num23 = 12345;
const m = 3;
let sumLastM = 0;
let temp23 = num23;
let count23 = 0;
while (temp23 > 0 && count23 < m) {
    sumLastM += temp23 % 10;
    temp23 = Math.floor(temp23 / 10);
    count23++;
}
console.log("6.23 Сумма последних " + m + " цифр " + num23 + " = " + sumLastM);

// 6.24 а
const num24 = 12345;
let alternatingSum = 0;
let sign = 1;
temp24 = num24;
while (temp24 > 0) {
    alternatingSum += sign * (temp24 % 10);
    sign = -sign;
    temp24 = Math.floor(temp24 / 10);
}
console.log("6.24 а) Знакочередующаяся сумма цифр " + num24 + " = " + alternatingSum);

// 6.24 б
const num24b = 12345;
let alternatingSumReverse = 0;
let temp24b = num24b;
const digits = [];
while (temp24b > 0) {
    digits.unshift(temp24b % 10);
    temp24b = Math.floor(temp24b / 10);
}
sign = 1;
for (let i = 0; i < digits.length; i++) {
    alternatingSumReverse += sign * digits[i];
    sign = -sign;
}
console.log("6.24 б) Знакочередующаяся сумма с конца " + num24b + " = " + alternatingSumReverse);

// 6.25
const num25 = 49;
let divisor = 2;
while (num25 % divisor !== 0) {
    divisor++;
}
console.log("6.25 Наименьший делитель " + num25 + " (кроме 1) = " + divisor);

// 6.26 а
console.log("6.26 а) Числа, кратные 13, <100 (for):");
for (let i = 13; i < 100; i += 13) {
    console.log(i);
}

// 6.26 б
console.log("6.26 б) Числа, кратные 13, <100 (while):");
let i26 = 13;
while (i26 < 100) {
    console.log(i26);
    i26 += 13;
}

// 6.27
console.log("6.27 Первые 15 чисел, кратных 19, начиная с 100:");
let num27 = 100;
let found27 = 0;
while (found27 < 15) {
    if (num27 % 19 === 0) {
        console.log(num27);
        found27++;
    }
    num27++;
}

// 6.28
console.log("6.28 Первые 20 чисел, кратных 13 или 17, начиная с 500:");
let num28 = 500;
let found28 = 0;
while (found28 < 20) {
    if (num28 % 13 === 0 || num28 % 17 === 0) {
        console.log(num28);
        found28++;
    }
    num28++;
}

// 6.29
console.log("6.29 Первые 10 чисел, оканчивающихся на 7, кратных 9, начиная с 100:");
let num29 = 100;
let found29 = 0;
while (found29 < 10) {
    if (num29 % 10 === 7 && num29 % 9 === 0) {
        console.log(num29);
        found29++;
    }
    num29++;
}

// 6.30 а
const a30 = 3;
const b30 = 17;
let quotient30 = 0;
let tempB = Math.abs(b30);
const absA = Math.abs(a30);
while (tempB >= absA) {
    tempB -= absA;
    quotient30++;
}
if ((a30 < 0 && b30 > 0) || (a30 > 0 && b30 < 0)) {
    quotient30 = -quotient30;
}
console.log("6.30 а) " + b30 + " // " + a30 + " = " + quotient30);

// 6.30 б
let remainder30 = Math.abs(b30);
while (remainder30 >= absA) {
    remainder30 -= absA;
}
if (b30 < 0) {
    remainder30 = -remainder30;
}
console.log("6.30 б) " + b30 + " % " + a30 + " = " + remainder30);

// 6.31 а
let deposit31 = 1000;
let month31 = 0;
let foundIncrease = false;
while (!foundIncrease) {
    month31++;
    const increase = deposit31 * 0.02;
    if (increase > 30) {
        console.log("6.31 а) Прирост превысит 30 руб. в месяц " + month31);
        foundIncrease = true;
    }
    deposit31 *= 1.02;
}

// 6.31 б
deposit31 = 1000;
month31 = 0;
while (deposit31 <= 1200) {
    month31++;
    deposit31 *= 1.02;
}
console.log("6.31 б) Вклад превысит 1200 руб. через " + month31 + " месяцев");

// 6.32 а
let distance32 = 10;
let day32 = 1;
while (distance32 <= 20) {
    day32++;
    distance32 *= 1.1;
}
console.log("6.32 а) Пробежит >20 км в день " + day32);

// 6.32 б
distance32 = 10;
let totalDistance32 = 10;
day32 = 1;
while (totalDistance32 <= 100) {
    day32++;
    distance32 *= 1.1;
    totalDistance32 += distance32;
}
console.log("6.32 б) Суммарный пробег >100 км в день " + day32);

// 6.33 а
let yield33 = 20;
let year33 = 1;
while (yield33 <= 22) {
    year33++;
    yield33 *= 1.02;
}
console.log("6.33 а) Урожайность превысит 22 ц/га в год " + year33);

// 6.33 б
let area33 = 100;
year33 = 1;
while (area33 <= 120) {
    year33++;
    area33 *= 1.05;
}
console.log("6.33 б) Площадь превысит 120 га в год " + year33);

// 6.33 в
area33 = 100;
yield33 = 20;
let totalYield33 = 0;
year33 = 0;
while (totalYield33 <= 800) {
    year33++;
    totalYield33 += area33 * yield33;
    area33 *= 1.05;
    yield33 *= 1.02;
}
console.log("6.33 в) Общий урожай превысит 800 ц в год " + year33);

// 6.34
const m34 = 3;
const n34 = 5;
let product = m34 * n34;
let i34 = 1;
console.log("6.34 Кратные " + m34 + " и " + n34 + " до " + product + ":");
while (i34 <= product) {
    if (i34 % m34 === 0 && i34 % n34 === 0) {
        console.log(i34);
    }
    i34++;
}

// 6.35 а
const num35 = 133331;
let count3 = 0;
let temp35 = num35;
while (temp35 > 0) {
    if (temp35 % 10 === 3) {
        count3++;
    }
    temp35 = Math.floor(temp35 / 10);
}
console.log("6.35 а) Цифр 3 в числе " + num35 + ": " + count3);

// 6.35 б
temp35 = num35;
const lastDigit35 = num35 % 10;
let countLast = 0;
while (temp35 > 0) {
    if (temp35 % 10 === lastDigit35) {
        countLast++;
    }
    temp35 = Math.floor(temp35 / 10);
}
console.log("6.35 б) Последняя цифра " + lastDigit35 + " встречается: " + countLast);

// 6.35 в
temp35 = num35;
let countEven = 0;
while (temp35 > 0) {
    const digit = temp35 % 10;
    if (digit % 2 === 0) {
        countEven++;
    }
    temp35 = Math.floor(temp35 / 10);
}
console.log("6.35 в) Четных цифр: " + countEven);

// 6.35 г
temp35 = num35;
let sumGreater5 = 0;
while (temp35 > 0) {
    const digit = temp35 % 10;
    if (digit > 5) {
        sumGreater5 += digit;
    }
    temp35 = Math.floor(temp35 / 10);
}
console.log("6.35 г) Сумма цифр >5: " + sumGreater5);

// 6.35 д
temp35 = num35;
let productGreater7 = 1;
while (temp35 > 0) {
    const digit = temp35 % 10;
    if (digit > 7) {
        productGreater7 *= digit;
    }
    temp35 = Math.floor(temp35 / 10);
}
console.log("6.35 д) Произведение цифр >7: " + productGreater7);

// 6.35 е
temp35 = num35;
let count0and5 = 0;
while (temp35 > 0) {
    const digit = temp35 % 10;
    if (digit === 0 || digit === 5) {
        count0and5++;
    }
    temp35 = Math.floor(temp35 / 10);
}
console.log("6.35 е) Цифр 0 и 5: " + count0and5);

// 6.36 а
const num36 = 1233321;
const digitA = 3;
temp36 = num36;
let countA = 0;
while (temp36 > 0) {
    if (temp36 % 10 === digitA) {
        countA++;
    }
    temp36 = Math.floor(temp36 / 10);
}
console.log("6.36 а) Цифра " + digitA + " встречается: " + countA);

// 6.36 б
temp36 = num36;
const a36 = 4;
let sumGreaterA = 0;
while (temp36 > 0) {
    const digit = temp36 % 10;
    if (digit > a36) {
        sumGreaterA += digit;
    }
    temp36 = Math.floor(temp36 / 10);
}
console.log("6.36 б) Сумма цифр >" + a36 + ": " + sumGreaterA);

// 6.36 в
temp36 = num36;
let sumEvenDigits = 0;
while (temp36 > 0) {
    const digit = temp36 % 10;
    if (digit % 2 === 0) {
        sumEvenDigits += digit;
    }
    temp36 = Math.floor(temp36 / 10);
}
console.log("6.36 в) Сумма четных цифр: " + sumEvenDigits);

// 6.36 г
temp36 = num36;
const x = 2;
const y = 3;
let countXandY = 0;
while (temp36 > 0) {
    const digit = temp36 % 10;
    if (digit === x || digit === y) {
        countXandY++;
    }
    temp36 = Math.floor(temp36 / 10);
}
console.log("6.36 г) Цифр " + x + " и " + y + ": " + countXandY);

// 6.37
const num37 = 182838;
let pos37 = 1;
let pos8 = 0;
temp37 = num37;
while (temp37 > 0) {
    if (temp37 % 10 === 8) {
        pos8 = pos37;
    }
    pos37++;
    temp37 = Math.floor(temp37 / 10);
}
console.log("6.37 Номер цифры 8 с конца в " + num37 + ": " + pos8);

// 6.38
const num38 = 133331;
let pos38 = 1;
let pos3 = 0;
temp38 = num38;
while (temp38 > 0) {
    if (temp38 % 10 === 3) {
        pos3 = pos38;
        break; // самая правая
    }
    pos38++;
    temp38 = Math.floor(temp38 / 10);
}
console.log("6.38 Номер цифры 3 с конца в " + num38 + ": " + pos3);

// 6.39
const num39 = 12345;
console.log("6.39 Цифры числа " + num39 + " с начала:");
const digits39 = [];
temp39 = num39;
while (temp39 > 0) {
    digits39.unshift(temp39 % 10);
    temp39 = Math.floor(temp39 / 10);
}
for (let digit of digits39) {
    console.log(digit);
}

// 6.40
const num40 = 1234123;
let firstDigit40 = num40;
while (firstDigit40 >= 10) {
    firstDigit40 = Math.floor(firstDigit40 / 10);
}
temp40 = num40;
let countFirst = 0;
while (temp40 > 0) {
    if (temp40 % 10 === firstDigit40) {
        countFirst++;
    }
    temp40 = Math.floor(temp40 / 10);
}
console.log("6.40 Первая цифра " + firstDigit40 + " встречается: " + countFirst);

// 6.41 а
const num41 = 1239456;
let maxDigit = 0;
temp41 = num41;
while (temp41 > 0) {
    const digit = temp41 % 10;
    if (digit > maxDigit) {
        maxDigit = digit;
    }
    temp41 = Math.floor(temp41 / 10);
}
console.log("6.41 а) Максимальная цифра " + num41 + ": " + maxDigit);

// 6.41 б
temp41 = num41;
let minDigit = 9;
while (temp41 > 0) {
    const digit = temp41 % 10;
    if (digit < minDigit) {
        minDigit = digit;
    }
    temp41 = Math.floor(temp41 / 10);
}
console.log("6.41 б) Минимальная цифра " + num41 + ": " + minDigit);

// 6.42 а
const num42 = 1239456;
let maxDigit42 = 0;
let minDigit42 = 9;
temp42 = num42;
while (temp42 > 0) {
    const digit = temp42 % 10;
    if (digit > maxDigit42) maxDigit42 = digit;
    if (digit < minDigit42) minDigit42 = digit;
    temp42 = Math.floor(temp42 / 10);
}
console.log("6.42 а) Максимальная: " + maxDigit42 + ", Минимальная: " + minDigit42);

// 6.42 б
const difference = maxDigit42 - minDigit42;
console.log("6.42 б) Макс превышает мин на: " + difference);

// 6.42 в
const sumMaxMin = maxDigit42 + minDigit42;
console.log("6.42 в) Сумма макс и мин: " + sumMaxMin);

// 6.43
const a43 = 3;
const isMultiple = sumMaxMin % a43 === 0;
console.log("6.43 Сумма макс и мин (" + sumMaxMin + ") кратна " + a43 + ": " + isMultiple);

// 6.44
const isEvenDiff = difference % 2 === 0;
console.log("6.44 Разность макс и мин (" + difference + ") четная: " + isEvenDiff);

// 6.45 а
const num45 = 59432;
let maxDigit45 = 0;
let minDigit45 = 9;
let maxPosFromEnd = 0;
let maxPosFromStart = 0;
let minPosFromEnd = 0;
let minPosFromStart = 0;
let pos = 1;
const digits45 = [];
temp45 = num45;
while (temp45 > 0) {
    const digit = temp45 % 10;
    digits45.unshift(digit);
    if (digit > maxDigit45) {
        maxDigit45 = digit;
        maxPosFromEnd = pos;
    }
    if (digit < minDigit45) {
        minDigit45 = digit;
        minPosFromEnd = pos;
    }
    pos++;
    temp45 = Math.floor(temp45 / 10);
}
maxPosFromStart = digits45.length - maxPosFromEnd + 1;
minPosFromStart = digits45.length - minPosFromEnd + 1;
console.log("6.45 а) Максимальная цифра " + maxDigit45 + ": с конца - " + maxPosFromEnd + ", с начала - " + maxPosFromStart);

// 6.45 б
console.log("6.45 б) Минимальная цифра " + minDigit45 + ": с конца - " + minPosFromEnd + ", с начала - " + minPosFromStart);

// 6.46
console.log("6.46 а) С конца: макс - " + maxPosFromEnd + ", мин - " + minPosFromEnd);
console.log("6.46 б) С начала: макс - " + maxPosFromStart + ", мин - " + minPosFromStart);

// 6.47
const whichIsLeft = maxPosFromStart < minPosFromStart ? "максимальная" : "минимальная";
console.log("6.47 Левее: " + whichIsLeft + " цифра");

// 6.48 а
const num48 = 12349678;
let maxOddDigit = 0;
temp48 = num48;
while (temp48 > 0) {
    const digit = temp48 % 10;
    if (digit % 2 !== 0 && digit > maxOddDigit) {
        maxOddDigit = digit;
    }
    temp48 = Math.floor(temp48 / 10);
}
console.log("6.48 а) Максимальная нечетная цифра: " + maxOddDigit);

// 6.48 б
const num48b = 123456;
let minDigit48 = 9;
let minPos48 = 0;
pos = 1;
const digits48 = [];
temp48b = num48b;
while (temp48b > 0) {
    const digit = temp48b % 10;
    digits48.unshift(digit);
    if (digit < minDigit48) {
        minDigit48 = digit;
        minPos48 = digits48.length;
    }
    temp48b = Math.floor(temp48b / 10);
}
console.log("6.48 б) Позиция минимальной цифры слева: " + minPos48);

// 6.49 а
const num49 = 12345;
temp49 = num49;
let sumDigits49 = 0;
while (temp49 > 0) {
    sumDigits49 += temp49 % 10;
    temp49 = Math.floor(temp49 / 10);
}
console.log("6.49 а) Сумма цифр >10: " + (sumDigits49 > 10));

// 6.49 б
temp49 = num49;
let productDigits49 = 1;
while (temp49 > 0) {
    productDigits49 *= temp49 % 10;
    temp49 = Math.floor(temp49 / 10);
}
console.log("6.49 б) Произведение цифр <50: " + (productDigits49 < 50));

// 6.49 в
let countDigits49 = 0;
temp49 = num49;
while (temp49 > 0) {
    countDigits49++;
    temp49 = Math.floor(temp49 / 10);
}
console.log("6.49 в) Количество цифр четное: " + (countDigits49 % 2 === 0));

// 6.49 г
console.log("6.49 г) Число четырехзначное: " + (num49 >= 1000 && num49 <= 9999));

// 6.49 д
let firstDigit49 = num49;
while (firstDigit49 >= 10) {
    firstDigit49 = Math.floor(firstDigit49 / 10);
}
console.log("6.49 д) Первая цифра ≤6: " + (firstDigit49 <= 6));

// 6.49 е
const lastDigit49 = num49 % 10;
console.log("6.49 е) Начинается и заканчивается одинаково: " + (firstDigit49 === lastDigit49));

// 6.49 ж
console.log("6.49 ж) Первая цифра больше последней: " + (firstDigit49 > lastDigit49));

// 6.50 а
const a50 = 15;
console.log("6.50 а) Сумма цифр <" + a50 + ": " + (sumDigits49 < a50));

// 6.50 б
const b50 = 50;
console.log("6.50 б) Произведение цифр >" + b50 + ": " + (productDigits49 > b50));

// 6.50 в
const k = 5;
console.log("6.50 в) Число " + k + "-значное: " + (countDigits49 === k));

// 6.50 г
const m50 = 3;
console.log("6.50 г) Первая цифра >" + m50 + ": " + (firstDigit49 > m50));

// 6.51 а
const k51 = 10;
console.log("6.51 а) Сумма >" + k51 + " и число четное: " + (sumDigits49 > k51 && num49 % 2 === 0));

// 6.51 б
const b51 = 20000;
console.log("6.51 б) Четное кол-во цифр и число ≤" + b51 + ": " + (countDigits49 % 2 === 0 && num49 <= b51));

// 6.51 г
const x51 = 1;
const y51 = 5;
console.log("6.51 г) Начинается на " + x51 + " и заканчивается на " + y51 + ": " + (firstDigit49 === x51 && lastDigit49 === y51));

// 6.51 д
const a51 = 200;
const b51d = 5;
console.log("6.51 д) Произведение <" + a51 + " и делится на " + b51d + ": " + (productDigits49 < a51 && num49 % b51d === 0));

// 6.51 е
const m51 = 10;
const n51 = 3;
console.log("6.51 е) Сумма >" + m51 + " и делится на " + n51 + ": " + (sumDigits49 > m51 && num49 % n51 === 0));

// 6.52 а
const num52 = 12345;
let has3 = false;
temp52 = num52;
while (temp52 > 0) {
    if (temp52 % 10 === 3) {
        has3 = true;
        break;
    }
    temp52 = Math.floor(temp52 / 10);
}
console.log("6.52 а) Есть цифра 3: " + has3);

// 6.52 б
temp52 = num52;
let has2 = false;
let has5 = false;
while (temp52 > 0) {
    const digit = temp52 % 10;
    if (digit === 2) has2 = true;
    if (digit === 5) has5 = true;
    temp52 = Math.floor(temp52 / 10);
}
console.log("6.52 б) Есть цифры 2 и 5: " + (has2 && has5));

// 6.53 а
const a53 = 3;
temp53 = num52;
let hasA = false;
while (temp53 > 0) {
    if (temp53 % 10 === a53) {
        hasA = true;
        break;
    }
    temp53 = Math.floor(temp53 / 10);
}
console.log("6.53 а) Есть цифра " + a53 + ": " + hasA);

// 6.53 б
const b53 = 9;
temp53 = num52;
let hasB = false;
while (temp53 > 0) {
    if (temp53 % 10 === b53) {
        hasB = true;
        break;
    }
    temp53 = Math.floor(temp53 / 10);
}
console.log("6.53 б) Нет цифры " + b53 + ": " + !hasB);

// 6.53 в
const k53 = 1;
temp53 = num52;
let countA = 0;
while (temp53 > 0) {
    if (temp53 % 10 === a53) {
        countA++;
    }
    temp53 = Math.floor(temp53 / 10);
}
console.log("6.53 в) Цифра " + a53 + " встречается >" + k53 + " раз: " + (countA > k53));

// 6.53 г
console.log("6.53 г) Есть цифры " + a53 + " и " + b53 + ": " + (hasA && hasB));

// 6.54
const num54 = 1200990;
let count0 = 0;
let count9 = 0;
temp54 = num54;
while (temp54 > 0) {
    const digit = temp54 % 10;
    if (digit === 0) count0++;
    if (digit === 9) count9++;
    temp54 = Math.floor(temp54 / 10);
}
const moreFrequent = count0 > count9 ? "0" : (count9 > count0 ? "9" : "одинаково");
console.log("6.54 Чаще встречается цифра: " + moreFrequent + " (0: " + count0 + ", 9: " + count9 + ")");

// 6.55
const a55 = 2;
const b55 = 3;
temp55 = num54;
let countA55 = 0;
let countB55 = 0;
while (temp55 > 0) {
    const digit = temp55 % 10;
    if (digit === a55) countA55++;
    if (digit === b55) countB55++;
    temp55 = Math.floor(temp55 / 10);
}
console.log("6.55 Цифра " + a55 + " встречается реже чем " + b55 + ": " + (countA55 < countB55));

// 6.56
const num56 = 123452;
let pos2 = -1;
let pos5 = -1;
let posCounter = 1;
temp56 = num56;
const digits56 = [];
while (temp56 > 0) {
    digits56.unshift(temp56 % 10);
    temp56 = Math.floor(temp56 / 10);
}
for (let i = 0; i < digits56.length; i++) {
    if (digits56[i] === 2 && pos2 === -1) {
        pos2 = i + 1;
    }
    if (digits56[i] === 5 && pos5 === -1) {
        pos5 = i + 1;
    }
}
let result56 = "";
if (pos2 !== -1 && pos5 !== -1) {
    result56 = pos2 < pos5 ? "2 левее 5" : "5 левее 2";
} else {
    result56 = "Не найдены обе цифры";
}
console.log("6.56 " + result56 + " (позиции: 2=" + pos2 + ", 5=" + pos5 + ")");

// 6.57
const num57 = 123452;
const a57 = 2;
const b57 = 5;
let posA = -1;
let posB = -1;
posCounter = 1;
temp57 = num57;
while (temp57 > 0) {
    const digit = temp57 % 10;
    if (digit === a57 && posA === -1) {
        posA = posCounter;
    }
    if (digit === b57 && posB === -1) {
        posB = posCounter;
    }
    posCounter++;
    temp57 = Math.floor(temp57 / 10);
}
let result57 = "";
if (posA !== -1 && posB !== -1) {
    result57 = posA < posB ? a57 + " правее " + b57 : b57 + " правее " + a57;
} else {
    result57 = "Не найдены обе цифры";
}
console.log("6.57 " + result57 + " (с конца: " + a57 + "=" + posA + ", " + b57 + "=" + posB + ")");

// 6.58 Способ 1
const num58 = 132233;
let maxDigit58 = 0;
temp58 = num58;
while (temp58 > 0) {
    const digit = temp58 % 10;
    if (digit > maxDigit58) {
        maxDigit58 = digit;
    }
    temp58 = Math.floor(temp58 / 10);
}
temp58 = num58;
let countMax = 0;
while (temp58 > 0) {
    if (temp58 % 10 === maxDigit58) {
        countMax++;
    }
    temp58 = Math.floor(temp58 / 10);
}
console.log("6.58 Способ 1: Максимальная цифра " + maxDigit58 + " встречается " + countMax + " раз");

// 6.58 Способ 2
temp58 = num58;
maxDigit58 = 0;
countMax = 0;
while (temp58 > 0) {
    const digit = temp58 % 10;
    if (digit > maxDigit58) {
        maxDigit58 = digit;
        countMax = 1;
    } else if (digit === maxDigit58) {
        countMax++;
    }
    temp58 = Math.floor(temp58 / 10);
}
console.log("6.58 Способ 2: Максимальная цифра " + maxDigit58 + " встречается " + countMax + " раз");

// 6.59 Способ 1
const num59 = 102200;
let minDigit59 = 9;
temp59 = num59;
while (temp59 > 0) {
    const digit = temp59 % 10;
    if (digit < minDigit59) {
        minDigit59 = digit;
    }
    temp59 = Math.floor(temp59 / 10);
}
temp59 = num59;
let countMin = 0;
while (temp59 > 0) {
    if (temp59 % 10 === minDigit59) {
        countMin++;
    }
    temp59 = Math.floor(temp59 / 10);
}
console.log("6.59 Способ 1: Минимальная цифра " + minDigit59 + " встречается " + countMin + " раз");

// 6.59 Способ 2
temp59 = num59;
minDigit59 = 9;
countMin = 0;
while (temp59 > 0) {
    const digit = temp59 % 10;
    if (digit < minDigit59) {
        minDigit59 = digit;
        countMin = 1;
    } else if (digit === minDigit59) {
        countMin++;
    }
    temp59 = Math.floor(temp59 / 10);
}
console.log("6.59 Способ 2: Минимальная цифра " + minDigit59 + " встречается " + countMin + " раз");

// 6.60 а
const num60 = 59432;
let max1 = 0;
let max2 = 0;
temp60 = num60;
while (temp60 > 0) {
    const digit = temp60 % 10;
    if (digit > max1) {
        max2 = max1;
        max1 = digit;
    } else if (digit > max2 && digit < max1) {
        max2 = digit;
    }
    temp60 = Math.floor(temp60 / 10);
}
console.log("6.60 а) Две максимальные цифры: " + max1 + ", " + max2);

// 6.60 б
temp60 = num60;
let min1 = 9;
let min2 = 9;
while (temp60 > 0) {
    const digit = temp60 % 10;
    if (digit < min1) {
        min2 = min1;
        min1 = digit;
    } else if (digit < min2 && digit > min1) {
        min2 = digit;
    }
    temp60 = Math.floor(temp60 / 10);
}
console.log("6.60 б) Две минимальные цифры: " + min1 + ", " + min2);

// 6.61 а
const num61 = 59432;
max1 = 0;
max2 = 0;
let posMax1End = 0;
let posMax2End = 0;
let posMax1Start = 0;
let posMax2Start = 0;
pos = 1;
const digits61 = [];
temp61 = num61;
while (temp61 > 0) {
    const digit = temp61 % 10;
    digits61.unshift(digit);
    if (digit > max1) {
        max2 = max1;
        posMax2End = posMax1End;
        posMax2Start = posMax1Start;
        max1 = digit;
        posMax1End = pos;
        posMax1Start = digits61.length;
    } else if (digit > max2 && digit < max1) {
        max2 = digit;
        posMax2End = pos;
        posMax2Start = digits61.length;
    }
    pos++;
    temp61 = Math.floor(temp61 / 10);
}
console.log("6.61 а) С конца: макс1 - " + posMax1End + ", макс2 - " + posMax2End);
console.log("      С начала: макс1 - " + posMax1Start + ", макс2 - " + posMax2Start);

// 6.61 б
temp61 = num61;
min1 = 9;
min2 = 9;
let posMin1End = 0;
let posMin2End = 0;
let posMin1Start = 0;
let posMin2Start = 0;
pos = 1;
digits61.length = 0;
while (temp61 > 0) {
    const digit = temp61 % 10;
    digits61.unshift(digit);
    if (digit < min1) {
        min2 = min1;
        posMin2End = posMin1End;
        posMin2Start = posMin1Start;
        min1 = digit;
        posMin1End = pos;
        posMin1Start = digits61.length;
    } else if (digit < min2 && digit > min1) {
        min2 = digit;
        posMin2End = pos;
        posMin2Start = digits61.length;
    }
    pos++;
    temp61 = Math.floor(temp61 / 10);
}
console.log("6.61 б) С конца: мин1 - " + posMin1End + ", мин2 - " + posMin2End);
console.log("      С начала: мин1 - " + posMin1Start + ", мин2 - " + posMin2Start);

// 6.62 а
const num62 = 12345;
let reversed = 0;
temp62 = num62;
while (temp62 > 0) {
    reversed = reversed * 10 + (temp62 % 10);
    temp62 = Math.floor(temp62 / 10);
}
console.log("6.62 а) Обратное число: " + reversed);

// 6.62 б
const withTwo = 2 * Math.pow(10, Math.floor(Math.log10(num62) + 1) + 1) + num62 * 10 + 2;
console.log("6.62 б) С двойками в начале и конце: " + withTwo);

// 6.62 в
const digitToRemove = 3;
let withoutDigit = 0;
let multiplier = 1;
temp62 = num62;
while (temp62 > 0) {
    const digit = temp62 % 10;
    if (digit !== digitToRemove) {
        withoutDigit += digit * multiplier;
        multiplier *= 10;
    }
    temp62 = Math.floor(temp62 / 10);
}
console.log("6.62 в) Без цифры " + digitToRemove + ": " + withoutDigit);

// 6.62 г
const firstDigit = Math.floor(num62 / Math.pow(10, Math.floor(Math.log10(num62))));
const lastDigit = num62 % 10;
const middle = Math.floor((num62 % Math.pow(10, Math.floor(Math.log10(num62)))) / 10);
const swapped = lastDigit * Math.pow(10, Math.floor(Math.log10(num62))) + middle * 10 + firstDigit;
console.log("6.62 г) С переставленными первой и последней цифрами: " + swapped);

// 6.62 д
const doubled = num62 * Math.pow(10, Math.floor(Math.log10(num62)) + 1) + num62;
console.log("6.62 д) С приписанным таким же числом: " + doubled);

// 6.63
const num63 = 12321;
let reversed63 = 0;
temp63 = num63;
while (temp63 > 0) {
    reversed63 = reversed63 * 10 + (temp63 % 10);
    temp63 = Math.floor(temp63 / 10);
}
console.log("6.63 Число " + num63 + " палиндром: " + (num63 === reversed63));

// 6.64
const n64 = 127;
const denominations = [64, 32, 16, 8, 4, 2, 1];
let amount = n64;
console.log("6.64 Выплата суммы " + n64 + ":");
for (let denom of denominations) {
    const count = Math.floor(amount / denom);
    if (count > 0) {
        console.log("Купюр номиналом " + denom + ": " + count);
        amount -= count * denom;
    }
}

// 6.65
const a65 = 48;
const b65 = 18;
let x = a65;
let y = b65;
while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
}
console.log("6.65 НОД(" + a65 + ", " + b65 + ") = " + x);

// 6.66
const a66 = 48;
const b66 = 18;
const c66 = 30;
x = a66;
y = b66;
while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
}
let gcdAB = x;
x = gcdAB;
y = c66;
while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
}
console.log("6.66 НОД(" + a66 + ", " + b66 + ", " + c66 + ") = " + x);

// 6.67
const a67 = 12;
const b67 = 18;
x = a67;
y = b67;
const aCopy = a67;
const bCopy = b67;
while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
}
const lcm = (aCopy * bCopy) / x;
console.log("6.67 НОК(" + aCopy + ", " + bCopy + ") = " + lcm);

// 6.68
let numerator = 24;
let denominator = 36;
x = numerator;
y = denominator;
while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
}
const reducedNum = numerator / x;
const reducedDen = denominator / x;
console.log("6.68 Дробь " + numerator + "/" + denominator + " = " + reducedNum + "/" + reducedDen);

// 6.69
let width = 425;
let height = 131;
console.log("6.69 Разрезание прямоугольника " + width + "x" + height + ":");
while (width > 0 && height > 0) {
    if (width > height) {
        const count = Math.floor(width / height);
        console.log("Квадратов " + height + "x" + height + ": " + count);
        width = width % height;
    } else {
        const count = Math.floor(height / width);
        console.log("Квадратов " + width + "x" + width + ": " + count);
        height = height % width;
    }
}

// 6.70
let a70 = 425;
let b70 = 131;
console.log("6.70 Разрезание прямоугольника " + a70 + "x" + b70 + ":");
while (a70 > 0 && b70 > 0) {
    if (a70 > b70) {
        const count = Math.floor(a70 / b70);
        console.log("Квадратов " + b70 + "x" + b70 + ": " + count);
        a70 = a70 % b70;
    } else {
        const count = Math.floor(b70 / a70);
        console.log("Квадратов " + a70 + "x" + a70 + ": " + count);
        b70 = b70 % a70;
    }
}

// 6.71
const num71 = 21;
let fib1 = 1;
let fib2 = 1;
let isFibonacci = false;
if (num71 === 1) {
    isFibonacci = true;
} else {
    while (fib2 < num71) {
        const next = fib1 + fib2;
        fib1 = fib2;
        fib2 = next;
    }
    isFibonacci = fib2 === num71;
}
console.log("6.71 Число " + num71 + " является числом Фибоначчи: " + isFibonacci);

// 6.72
const n72 = 15;
const f = 3;
const s = 4;
const isInAP = (n72 - f) % s === 0 && n72 >= f;
console.log("6.72 Число " + n72 + " в арифметической прогрессии " + f + "+" + s + "n: " + isInAP);

// 6.73
const m73 = 16;
const g = 2;
const z = 2;
let isInGP = false;
if (m73 === g) {
    isInGP = true;
} else if (z !== 0 && g !== 0) {
    let power = g;
    while (power < m73) {
        power *= z;
    }
    isInGP = power === m73;
}
console.log("6.73 Число " + m73 + " в геометрической прогрессии " + g + "*" + z + "^n: " + isInGP);

// 6.74 а
const num74a = 81;
let isPowerOf3 = false;
let power3 = 1;
while (power3 < num74a) {
    power3 *= 3;
}
isPowerOf3 = power3 === num74a;
console.log("6.74 а) Число " + num74a + " степень 3: " + isPowerOf3);

// 6.74 б
const num74b = 125;
let isPowerOf5 = false;
let power5 = 1;
while (power5 < num74b) {
    power5 *= 5;
}
isPowerOf5 = power5 === num74b;
console.log("6.74 б) Число " + num74b + " степень 5: " + isPowerOf5);

// 6.75 а
let left = 0;
let right = 1;
const eps = 0.001;
while (right - left > eps) {
    const mid = (left + right) / 2;
    const fMid = Math.pow(mid, 4) + 2 * Math.pow(mid, 3) - mid - 1;
    const fLeft = Math.pow(left, 4) + 2 * Math.pow(left, 3) - left - 1;
    if (fMid * fLeft <= 0) {
        right = mid;
    } else {
        left = mid;
    }
}
const root75a = (left + right) / 2;
console.log("6.75 а) Корень уравнения на [0,1]: " + root75a.toFixed(4));

// 6.75 б
left = 1;
right = 1.5;
while (right - left > eps) {
    const mid = (left + right) / 2;
    const fMid = Math.pow(mid, 3) - 0.2 * Math.pow(mid, 2) - 0.2 * mid - 1.2;
    const fLeft = Math.pow(left, 3) - 0.2 * Math.pow(left, 2) - 0.2 * left - 1.2;
    if (fMid * fLeft <= 0) {
        right = mid;
    } else {
        left = mid;
    }
}
const root75b = (left + right) / 2;
console.log("6.75 б) Корень уравнения на [1,1.5]: " + root75b.toFixed(4));

// 6.76
const a76_2 = 4;
const b76_2 = 6;
let fenceLength = 0;
let x76 = 1;
let y76 = 1;
let dir = 0; // 0-вправо, 1-вниз, 2-влево, 3-вверх
const visited = Array(a76_2 + 2).fill().map(() => Array(b76_2 + 2).fill(false));
for (let i = 0; i <= a76_2 + 1; i++) {
    visited[i][0] = true;
    visited[i][b76_2 + 1] = true;
}
for (let j = 0; j <= b76_2 + 1; j++) {
    visited[0][j] = true;
    visited[a76_2 + 1][j] = true;
}
while (true) {
    visited[x76][y76] = true;
    let moved = false;
    for (let d = 0; d < 4; d++) {
        const newDir = (dir + d) % 4;
        let newX = x76;
        let newY = y76;
        if (newDir === 0) newY++;
        if (newDir === 1) newX++;
        if (newDir === 2) newY--;
        if (newDir === 3) newX--;

        if (!visited[newX][newY]) {
            fenceLength++;
            x76 = newX;
            y76 = newY;
            dir = (newDir + 3) % 4;
            moved = true;
            break;
        }
    }
    if (!moved) break;
}
console.log("6.76 Длина спиральной дорожки для " + a76_2 + "x" + b76_2 + ": " + fenceLength);

// 6.77 а
const num77a = 666;
let allSame = true;
temp77 = num77a;
const firstDigit77 = temp77 % 10;
while (temp77 > 0) {
    if (temp77 % 10 !== firstDigit77) {
        allSame = false;
        break;
    }
    temp77 = Math.floor(temp77 / 10);
}
console.log("6.77 а) Все цифры одинаковы: " + allSame);

// 6.77 б
const num77b = 35510;
let hasSameAdjacent = false;
temp77 = num77b;
let prevDigit = -1;
while (temp77 > 0) {
    const digit = temp77 % 10;
    if (digit === prevDigit) {
        hasSameAdjacent = true;
        break;
    }
    prevDigit = digit;
    temp77 = Math.floor(temp77 / 10);
}
console.log("6.77 б) Есть одинаковые соседние цифры: " + hasSameAdjacent);

// 6.78
const num78 = 5321;
let increasingFromRight = true;
temp78 = num78;
let prevDigit78 = 10;
while (temp78 > 0) {
    const digit = temp78 % 10;
    if (digit >= prevDigit78) {
        increasingFromRight = false;
        break;
    }
    prevDigit78 = digit;
    temp78 = Math.floor(temp78 / 10);
}
console.log("6.78 Цифры справа налево по возрастанию: " + increasingFromRight);

// 6.79
const num79 = 9663;
let nonDecreasingFromRight = true;
temp79 = num79;
prevDigit79 = 10;
while (temp79 > 0) {
    const digit = temp79 % 10;
    if (digit > prevDigit79) {
        nonDecreasingFromRight = false;
        break;
    }
    prevDigit79 = digit;
    temp79 = Math.floor(temp79 / 10);
}
console.log("6.79 Цифры справа налево по неубыванию: " + nonDecreasingFromRight);

// 6.80
const num80 = 1478;
let increasingFromLeft = true;
const digits80 = [];
temp80 = num80;
while (temp80 > 0) {
    digits80.unshift(temp80 % 10);
    temp80 = Math.floor(temp80 / 10);
}
for (let i = 1; i < digits80.length; i++) {
    if (digits80[i] <= digits80[i - 1]) {
        increasingFromLeft = false;
        break;
    }
}
console.log("6.80 Цифры слева направо по возрастанию: " + increasingFromLeft);

// 6.81
console.log("6.81 Строго возрастающая последовательность: " + increasingFromLeft);

// 6.82
const num82 = 1669;
let nonDecreasingFromLeft = true;
const digits82 = [];
temp82 = num82;
while (temp82 > 0) {
    digits82.unshift(temp82 % 10);
    temp82 = Math.floor(temp82 / 10);
}
for (let i = 1; i < digits82.length; i++) {
    if (digits82[i] < digits82[i - 1]) {
        nonDecreasingFromLeft = false;
        break;
    }
}
console.log("6.82 Цифры слева направо по неубыванию: " + nonDecreasingFromLeft);

// 6.83
const num83 = 76520;
let monotonic = false;
const digits83 = [];
temp83 = num83;
while (temp83 > 0) {
    digits83.unshift(temp83 % 10);
    temp83 = Math.floor(temp83 / 10);
}
let increasing = true;
let decreasing = true;
for (let i = 1; i < digits83.length; i++) {
    if (digits83[i] <= digits83[i - 1]) {
        increasing = false;
    }
    if (digits83[i] >= digits83[i - 1]) {
        decreasing = false;
    }
}
monotonic = increasing || decreasing;
console.log("6.83 Монотонная последовательность (возрастающая или убывающая): " + monotonic);