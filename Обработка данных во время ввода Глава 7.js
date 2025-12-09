// 7.1
const numbers71 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum71 = 0;
for (let i = 0; i < numbers71.length; i++) {
    sum71 += numbers71[i];
}
console.log("7.1 Сумма 10 чисел: " + sum71);

// 7.2
const n72 = 10;
const realNumbers72 = [1.5, 2.3, 3.7, 4.1, 5.9, 6.2, 7.8, 8.4, 9.0, 10.1];
let sum72 = 0;
for (let i = 0; i < realNumbers72.length; i++) {
    sum72 += realNumbers72[i];
}
console.log("7.2 Сумма " + n72 + " вещественных чисел: " + sum72.toFixed(2));

// 7.3
const sides73 = [2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 7, 8];
let perimeter73 = 0;
for (let i = 0; i < sides73.length; i++) {
    perimeter73 += sides73[i];
}
console.log("7.3 Периметр 12-угольника: " + perimeter73);

// 7.4
const weights74 = [50, 100, 75, 80, 60, 90];
let totalWeight74 = 0;
for (let i = 0; i < weights74.length; i++) {
    totalWeight74 += weights74[i];
}
console.log("7.4 Общая масса груза: " + totalWeight74 + " кг");

// 7.5
const salaries75 = [25000, 30000, 28000, 32000, 27000];
let totalSalary75 = 0;
for (let i = 0; i < salaries75.length; i++) {
    totalSalary75 += salaries75[i];
}
console.log("7.5 Общая сумма зарплат: " + totalSalary75 + " руб");

// 7.6
const resistances76 = [10, 20, 30, 40];
let totalResistanceSeries = 0;
for (let i = 0; i < resistances76.length; i++) {
    totalResistanceSeries += resistances76[i];
}
console.log("7.6 Общее сопротивление (последовательное): " + totalResistanceSeries + " Ом");

// 7.7
const resistances77 = [10, 20, 30, 40];
let totalResistanceParallel = 0;
for (let i = 0; i < resistances77.length; i++) {
    totalResistanceParallel += 1 / resistances77[i];
}
totalResistanceParallel = 1 / totalResistanceParallel;
console.log("7.7 Общее сопротивление (параллельное): " + totalResistanceParallel.toFixed(2) + " Ом");

// 7.8 а
const sequence78 = [1, 2, 3, 4, 5, 0];
let sum78a = 0;
for (let i = 0; i < sequence78.length && sequence78[i] !== 0; i++) {
    sum78a += sequence78[i];
}
console.log("7.8 а) Сумма чисел до 0: " + sum78a);

// 7.8 б
let count78b = 0;
for (let i = 0; i < sequence78.length && sequence78[i] !== 0; i++) {
    count78b++;
}
console.log("7.8 б) Количество чисел до 0: " + count78b);

// 7.9
const student1Marks = [5, 4, 3, 5];
const student2Marks = [4, 5, 4, 3];
let sumStudent1 = 0;
let sumStudent2 = 0;
for (let i = 0; i < student1Marks.length; i++) {
    sumStudent1 += student1Marks[i];
    sumStudent2 += student2Marks[i];
}
console.log("7.9 Сумма оценок: ученик1=" + sumStudent1 + ", ученик2=" + sumStudent2);

// 7.10
const athlete1Scores = [10, 9, 8, 9, 10];
const athlete2Scores = [9, 10, 9, 8, 10];
let totalAthlete1 = 0;
let totalAthlete2 = 0;
for (let i = 0; i < athlete1Scores.length; i++) {
    totalAthlete1 += athlete1Scores[i];
    totalAthlete2 += athlete2Scores[i];
}
console.log("7.10 Сумма баллов: спортсмен1=" + totalAthlete1 + ", спортсмен2=" + totalAthlete2);

// 7.11
const numbers711 = [1, 2, 3, 4, 5, 6, 7, 8];
let product711 = 1;
for (let i = 0; i < numbers711.length; i++) {
    product711 *= numbers711[i];
}
console.log("7.11 Произведение 8 чисел: " + product711);

// 7.12
const sequence712 = [2, 3, 4, 0];
let partialProduct = 1;
for (let i = 0; i < sequence712.length && sequence712[i] !== 0; i++) {
    partialProduct *= sequence712[i];
    console.log("7.12 Частичное произведение: " + partialProduct);
}

// 7.13
const numbers713 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumSquares713 = 0;
for (let i = 0; i < numbers713.length; i++) {
    sumSquares713 += numbers713[i] * numbers713[i];
}
console.log("7.13 Сумма квадратов: " + sumSquares713);

// 7.14
const n714 = 8;
const realNumbers714 = [1.5, 2.3, 3.7, 4.1, 5.9, 6.2, 7.8, 8.4];
let sumSquares714 = 0;
for (let i = 0; i < realNumbers714.length; i++) {
    sumSquares714 += realNumbers714[i] * realNumbers714[i];
}
console.log("7.14 Сумма квадратов " + n714 + " вещественных чисел: " + sumSquares714.toFixed(2));

// 7.15
const numbers715 = [10.5, 20.3, 30.7, 40.1, 50.9, 60.2, 70.8, 80.4, 90.0, 100.1];
let sum715 = 0;
for (let i = 0; i < numbers715.length; i++) {
    sum715 += numbers715[i];
}
console.log("7.15 Сумма превышает 100.78: " + (sum715 > 100.78));

// 7.16
const p716 = 50;
const numbers716 = [5, 8, 12, 3, 7, 9, 4, 6, 10, 2];
let sum716 = 0;
for (let i = 0; i < numbers716.length; i++) {
    sum716 += numbers716[i];
}
console.log("7.16 Сумма меньше " + p716 + ": " + (sum716 < p716));

// 7.17
const numbers717 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum717 = 0;
for (let i = 0; i < numbers717.length; i++) {
    sum717 += numbers717[i];
}
console.log("7.17 Сумма четная: " + (sum717 % 2 === 0));

// 7.18
const b718 = 3;
const numbers718 = [6, 9, 12, 15, 18, 21];
let sum718 = 0;
for (let i = 0; i < numbers718.length; i++) {
    sum718 += numbers718[i];
}
console.log("7.18 Сумма кратна " + b718 + ": " + (sum718 % b718 === 0));

// 7.19
const lastYearPrecipitation = 100;
const thisYearPrecipitation = [2, 3, 5, 0, 4, 6, 1, 2, 3, 5, 4, 2, 3, 6, 1, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2, 4];
let totalPrecipitation = 0;
for (let i = 0; i < thisYearPrecipitation.length; i++) {
    totalPrecipitation += thisYearPrecipitation[i];
}
console.log("7.19 Осадков больше прошлого года: " + (totalPrecipitation > lastYearPrecipitation));

// 7.20
const capacity720 = 500;
const loads720 = [50, 100, 75, 80, 60, 90, 70];
let totalLoad720 = 0;
for (let i = 0; i < loads720.length; i++) {
    totalLoad720 += loads720[i];
}
console.log("7.20 Грузоподъемность " + capacity720 + " кг превышена: " + (totalLoad720 > capacity720));

// 7.21
const athlete1Scores721 = [10, 9, 8, 9, 10, 9, 8, 9, 10, 9];
const athlete2Scores721 = [9, 10, 9, 8, 10, 9, 10, 8, 9, 10];
let total721_1 = 0;
let total721_2 = 0;
for (let i = 0; i < athlete1Scores721.length; i++) {
    total721_1 += athlete1Scores721[i];
    total721_2 += athlete2Scores721[i];
}
const winner721 = total721_1 > total721_2 ? "первый" : "второй";
console.log("7.21 Лучший результат у " + winner721 + " спортсмена (" + total721_1 + " vs " + total721_2 + ")");

// 7.22
const set1Prices = [100, 200, 150, 80, 120, 90, 60, 180];
const set2Prices = [110, 190, 160, 70, 130, 85, 65, 175];
let sumSet1 = 0;
let sumSet2 = 0;
for (let i = 0; i < set1Prices.length; i++) {
    sumSet1 += set1Prices[i];
    sumSet2 += set2Prices[i];
}
const cheaperSet = sumSet1 < sumSet2 ? "первый" : "второй";
console.log("7.22 Более дешевый набор: " + cheaperSet + " (" + sumSet1 + " vs " + sumSet2 + ")");

// 7.23
const numbers723 = [5, 10, 15, 20, 25, 30, 35, 40];
let product723 = 1;
for (let i = 0; i < numbers723.length; i++) {
    product723 *= numbers723[i];
}
console.log("7.23 Произведение меньше 10000: " + (product723 < 10000));

// 7.24
const s724 = 1000;
const numbers724 = [2.5, 3.7, 4.2, 5.1, 6.3];
let product724 = 1;
for (let i = 0; i < numbers724.length; i++) {
    product724 *= numbers724[i];
}
console.log("7.24 Произведение больше " + s724 + ": " + (product724 > s724));

// 7.25
const numbers725 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum725 = 0;
for (let i = 0; i < numbers725.length; i++) {
    sum725 += numbers725[i];
}
const average725 = sum725 / numbers725.length;
console.log("7.25 Среднее арифметическое: " + average725);

// 7.26
const n726 = 8;
const numbers726 = [1.5, 2.3, 3.7, 4.1, 5.9, 6.2, 7.8, 8.4];
let sum726 = 0;
for (let i = 0; i < numbers726.length; i++) {
    sum726 += numbers726[i];
}
const average726 = sum726 / numbers726.length;
console.log("7.26 Среднее арифметическое " + n726 + " чисел: " + average726.toFixed(2));

// 7.27
const physicsGrades = [5, 4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5, 4];
let sumPhysics = 0;
for (let i = 0; i < physicsGrades.length; i++) {
    sumPhysics += physicsGrades[i];
}
const averagePhysics = sumPhysics / physicsGrades.length;
console.log("7.27 Средняя оценка по физике: " + averagePhysics.toFixed(2));

// 7.28
const studentGrades = [5, 4, 3, 5, 4, 3, 5, 4, 3, 5];
let sumStudent = 0;
for (let i = 0; i < studentGrades.length; i++) {
    sumStudent += studentGrades[i];
}
const averageStudent = sumStudent / studentGrades.length;
console.log("7.28 Средняя оценка ученика: " + averageStudent.toFixed(2));

// 7.29
const algebraGrades = [5, 4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3, 5, 4, 3];
let sumAlgebra = 0;
for (let i = 0; i < algebraGrades.length; i++) {
    sumAlgebra += algebraGrades[i];
}
const averageAlgebra = sumAlgebra / algebraGrades.length;
console.log("7.29 Средняя оценка по алгебре: " + averageAlgebra.toFixed(2));

// 7.30
const weights730 = [50, 100, 75, 80, 60, 90, 70];
let sumWeights = 0;
for (let i = 0; i < weights730.length; i++) {
    sumWeights += weights730[i];
}
const averageWeight = sumWeights / weights730.length;
console.log("7.30 Средняя масса: " + averageWeight.toFixed(2) + " кг");

// 7.31
const sequence731 = [10, 20, 30, 40, 50, -1];
let sum731 = 0;
let count731 = 0;
for (let i = 0; i < sequence731.length && sequence731[i] >= 0; i++) {
    sum731 += sequence731[i];
    count731++;
}
const average731 = count731 > 0 ? sum731 / count731 : 0;
console.log("7.31 Среднее арифметическое (без отрицательного): " + average731.toFixed(2));

// 7.32
const class1Ages = [14.5, 15.0, 14.8, 15.2, 14.7, 15.1, 14.9, 15.0, 14.6, 15.3, 14.8, 15.1, 14.9, 15.0, 14.7, 15.2, 14.8, 15.0, 14.9, 15.1];
const class2Ages = [14.8, 15.1, 14.9, 15.0, 14.7, 15.2, 14.8, 15.0, 14.9, 15.1, 14.7, 15.0, 14.8, 15.2, 14.9, 15.0, 14.8, 15.1, 14.9, 15.0];
let sumClass1 = 0;
let sumClass2 = 0;
for (let i = 0; i < class1Ages.length; i++) {
    sumClass1 += class1Ages[i];
    sumClass2 += class2Ages[i];
}
const averageClass1 = sumClass1 / class1Ages.length;
const averageClass2 = sumClass2 / class2Ages.length;
console.log("7.32 Средний возраст: класс1=" + averageClass1.toFixed(2) + " лет, класс2=" + averageClass2.toFixed(2) + " лет");

// 7.33
const januaryPrecipitation = [2, 3, 5, 0, 4, 6, 1, 2, 3, 5, 4, 2, 3, 6, 1, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2];
const marchPrecipitation = [3, 4, 2, 5, 1, 3, 4, 2, 5, 3, 4, 2, 5, 1, 3, 4, 2, 5, 3, 4, 2, 5, 1, 3, 4, 2, 5, 3, 4, 2, 5];
let sumJan = 0;
let sumMar = 0;
for (let i = 0; i < januaryPrecipitation.length; i++) {
    sumJan += januaryPrecipitation[i];
}
for (let i = 0; i < marchPrecipitation.length; i++) {
    sumMar += marchPrecipitation[i];
}
const averageJan = sumJan / januaryPrecipitation.length;
const averageMar = sumMar / marchPrecipitation.length;
console.log("7.33 Среднедневные осадки: январь=" + averageJan.toFixed(2) + " мм, март=" + averageMar.toFixed(2) + " мм");

// 7.34
const class1Heights = [160, 165, 170, 155, 162, 168, 172, 158, 164, 169];
const class2Heights = [161, 166, 171, 156, 163, 167, 173, 159, 165, 170];
let sumHeight1 = 0;
let sumHeight2 = 0;
for (let i = 0; i < class1Heights.length; i++) {
    sumHeight1 += class1Heights[i];
    sumHeight2 += class2Heights[i];
}
const averageHeight1 = sumHeight1 / class1Heights.length;
const averageHeight2 = sumHeight2 / class2Heights.length;
console.log("7.34 Средний рост: класс1=" + averageHeight1.toFixed(2) + " см, класс2=" + averageHeight2.toFixed(2) + " см");

// 7.35
const class1Physics = [5, 4, 3, 5, 4];
const class2Physics = [4, 5, 4, 3, 5];
let sumPhysics1 = 0;
let sumPhysics2 = 0;
for (let i = 0; i < class1Physics.length; i++) {
    sumPhysics1 += class1Physics[i];
    sumPhysics2 += class2Physics[i];
}
const averagePhysics1 = sumPhysics1 / class1Physics.length;
const averagePhysics2 = sumPhysics2 / class2Physics.length;
console.log("7.35 Средняя оценка по физике: класс1=" + averagePhysics1.toFixed(2) + ", класс2=" + averagePhysics2.toFixed(2));

// 7.36
const areas = [500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400];
const yields = [25, 30, 28, 32, 27, 31, 29, 33, 26, 30];
let totalWheat = 0;
let totalArea = 0;
for (let i = 0; i < areas.length; i++) {
    totalWheat += areas[i] * yields[i];
    totalArea += areas[i];
}
const averageYield = totalWheat / totalArea;
console.log("7.36 Общее количество пшеницы: " + totalWheat + " ц, средняя урожайность: " + averageYield.toFixed(2) + " ц/га");

// 7.37
const populations = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
const districtsAreas = [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320];
let totalPopulation = 0;
let totalRegionArea = 0;
for (let i = 0; i < populations.length; i++) {
    totalPopulation += populations[i];
    totalRegionArea += districtsAreas[i];
}
const averageDensity = totalPopulation / totalRegionArea;
console.log("7.37 Средняя плотность населения: " + averageDensity.toFixed(2) + " тыс.чел/км²");

// 7.38
const populations38 = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160];
const densities = [0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6];
let totalArea38 = 0;
for (let i = 0; i < populations38.length; i++) {
    totalArea38 += populations38[i] / densities[i];
}
console.log("7.38 Общая площадь области: " + totalArea38.toFixed(2) + " км²");

// 7.39 а
const n739 = 5;
const numbers739 = [2, -3, 4, -5, 6];
let sumAbs739 = 0;
for (let i = 0; i < numbers739.length; i++) {
    sumAbs739 += Math.abs(numbers739[i]);
}
console.log("7.39 а) Сумма модулей: " + sumAbs739);

// 7.39 б
let productAbs739 = 1;
for (let i = 0; i < numbers739.length; i++) {
    productAbs739 *= Math.abs(numbers739[i]);
}
console.log("7.39 б) Произведение модулей: " + productAbs739);

// 7.39 в
const sums739 = [];
for (let i = 0; i < numbers739.length - 1; i++) {
    sums739.push(numbers739[i] + numbers739[i + 1]);
}
console.log("7.39 в) Суммы соседних чисел: " + sums739.join(", "));

// 7.39 г
let alternatingSum739 = 0;
let sign739 = 1;
for (let i = 0; i < numbers739.length; i++) {
    alternatingSum739 += sign739 * numbers739[i];
    sign739 = -sign739;
}
console.log("7.39 г) Знакочередующаяся сумма: " + alternatingSum739);

// 7.40
const numbers740 = [10.5, 11.2, 9.8, 12.3, 8.9, 13.1, 10.0, 11.8, 9.5, 12.7, 10.9, 11.5];
let sumGreater1075 = 0;
for (let i = 0; i < numbers740.length; i++) {
    if (numbers740[i] > 10.75) {
        sumGreater1075 += numbers740[i];
    }
}
console.log("7.40 Сумма чисел >10.75: " + sumGreater1075.toFixed(2));

// 7.41
const p741 = 20.5;
const numbers741 = [15.2, 25.7, 18.9, 30.1, 22.3, 19.8, 27.6, 21.4];
let sumGreaterP = 0;
for (let i = 0; i < numbers741.length; i++) {
    if (numbers741[i] > p741) {
        sumGreaterP += numbers741[i];
    }
}
console.log("7.41 Сумма чисел >" + p741 + ": " + sumGreaterP.toFixed(2));

// 7.42
const numbers742 = [2, 5, 8, 10, 12, 15, 18, 20, 22, 25];
let sumEven742 = 0;
for (let i = 0; i < numbers742.length; i++) {
    if (numbers742[i] % 2 === 0) {
        sumEven742 += numbers742[i];
    }
}
console.log("7.42 Сумма четных чисел: " + sumEven742);

// 7.43
const numbers743 = [10, 25, 30, 45, 50, 67, 80, 92, 100, 120];
let sumEndsWith0 = 0;
for (let i = 0; i < numbers743.length; i++) {
    if (numbers743[i] % 10 === 0) {
        sumEndsWith0 += numbers743[i];
    }
}
console.log("7.43 Сумма чисел, оканчивающихся на 0: " + sumEndsWith0);

// 7.44
const numbers744 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let sumEvenPositions = 0;
for (let i = 1; i < numbers744.length; i += 2) {
    sumEvenPositions += numbers744[i];
}
console.log("7.44 Сумма чисел на четных позициях: " + sumEvenPositions);

// 7.45
const numbers745 = [1.5, 2.3, 3.7, 4.1, 5.9, 6.2, 7.8, 8.4, 9.0, 10.1, 11.2, 12.3, 13.4, 14.5, 15.6];
let sumOddPositions = 0;
for (let i = 0; i < numbers745.length; i += 2) {
    sumOddPositions -= numbers745[i];
}
console.log("7.45 Сумма с минусом на нечетных позициях: " + sumOddPositions.toFixed(2));

// 7.46 а
const n746 = 8;
const numbers746 = [10, 20, 30, 40, 50, 60, 70, 80];
const sumFirstLast = numbers746[0] + numbers746[n746 - 1];
console.log("7.46 а) Сумма первого и последнего: " + sumFirstLast);

// 7.46 б
const diffSecondSecondLast = numbers746[1] - numbers746[n746 - 2];
console.log("7.46 б) Разность второго и предпоследнего: " + diffSecondSecondLast);

// 7.47
const prices747 = [800, 1200, 1500, 900, 1800, 1100, 1300, 1600];
let totalExpensive = 0;
for (let i = 0; i < prices747.length; i++) {
    if (prices747[i] > 1000) {
        totalExpensive += prices747[i];
    }
}
console.log("7.47 Общая стоимость товаров >1000 руб: " + totalExpensive + " руб");

// 7.48
const newspapers = [12, 14, 16, 10, 8, 12];
const magazines = [32, 48, 64, 80, 96];
let totalMagazinePages = 0;
for (let i = 0; i < magazines.length; i++) {
    if (magazines[i] > 16) {
        totalMagazinePages += magazines[i];
    }
}
console.log("7.48 Общее число страниц в журналах: " + totalMagazinePages);

// 7.49
const dailyPrecipitation = [2, 3, 5, 0, 4, 6, 1, 2, 3, 5, 4, 2, 3, 6, 1, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2];
let sumEvenDays = 0;
for (let i = 1; i < dailyPrecipitation.length; i += 2) {
    sumEvenDays += dailyPrecipitation[i];
}
console.log("7.49 Общее количество осадков в четные дни: " + sumEvenDays + " мм");

// 7.50
const studentsPerGrade = [25, 30, 28, 32, 27, 31, 29, 33, 26, 30, 28];
let sumOddGrades = 0;
for (let i = 0; i < studentsPerGrade.length; i += 2) {
    sumOddGrades += studentsPerGrade[i];
}
console.log("7.50 Общее число учеников в нечетных классах: " + sumOddGrades);

// 7.51
const sequence751 = [1, 3, 5, 7, 2, 4, 6];
let sumOddStart = 0;
let i751 = 0;
while (i751 < sequence751.length && sequence751[i751] % 2 !== 0) {
    sumOddStart += sequence751[i751];
    i751++;
}
console.log("7.51 Сумма нечетных чисел в начале: " + sumOddStart);

// 7.52 а
const numbers752 = [25, 30, 15, 40, 10, 35, 20, 45, 5, 50, 55, 60, 18, 22];
let sumGreater20 = 0;
for (let i = 0; i < numbers752.length; i++) {
    if (numbers752[i] > 20) {
        sumGreater20 += numbers752[i];
    }
}
console.log("7.52 а) Сумма >20 превышает 100: " + (sumGreater20 > 100));

// 7.52 б
let sumLess50 = 0;
for (let i = 0; i < numbers752.length; i++) {
    if (numbers752[i] < 50) {
        sumLess50 += numbers752[i];
    }
}
console.log("7.52 б) Сумма <50 четная: " + (sumLess50 % 2 === 0));

// 7.53 а
const numbers753 = [10, 20, 30, 15, 25, 35];
let sumLess255 = 0;
for (let i = 0; i < numbers753.length; i++) {
    if (numbers753[i] < 25.5) {
        sumLess255 += numbers753[i];
    }
}
console.log("7.53 а) Сумма <25.5 не превышает 50: " + (sumLess255 <= 50));

// 7.53 б
let sumNotExceed20 = 0;
for (let i = 0; i < numbers753.length; i++) {
    if (numbers753[i] <= 20) {
        sumNotExceed20 += numbers753[i];
    }
}
console.log("7.53 б) Сумма ≤20 кратна 3: " + (sumNotExceed20 % 3 === 0));

// 7.54
const p754 = 150;
const numbers754 = [25.7, 18.9, 30.1, 22.3, 19.8, 27.6, 21.4, 28.2];
let sumGreater205 = 0;
for (let i = 0; i < numbers754.length; i++) {
    if (numbers754[i] > 20.5) {
        sumGreater205 += numbers754[i];
    }
}
console.log("7.54 Сумма >20.5 меньше " + p754 + ": " + (sumGreater205 < p754));

// 7.55
const m755 = 30;
const q755 = 50;
const numbers755 = [10, 20, 30, 40, 50];
let sumNotExceedM = 0;
for (let i = 0; i < numbers755.length; i++) {
    if (numbers755[i] <= m755) {
        sumNotExceedM += numbers755[i];
    }
}
console.log("7.55 Сумма ≤" + m755 + " превышает " + q755 + ": " + (sumNotExceedM > q755));

// 7.56
const m756 = 25;
const p756 = 5;
const numbers756 = [10, 20, 30, 15, 25, 35];
let sumNotExceedM756 = 0;
for (let i = 0; i < numbers756.length; i++) {
    if (numbers756[i] <= m756) {
        sumNotExceedM756 += numbers756[i];
    }
}
console.log("7.56 Сумма ≤" + m756 + " кратна " + p756 + ": " + (sumNotExceedM756 % p756 === 0));

// 7.57
const februaryPrecipitation = [2, 3, 5, 0, 4, 6, 1, 2, 3, 5, 4, 2, 3, 6, 1, 4, 5, 3, 2, 4, 5, 3, 2, 4, 5, 3, 2, 4];
let evenDaysPrecipitation = 0;
let oddDaysPrecipitation = 0;
for (let i = 0; i < februaryPrecipitation.length; i++) {
    if ((i + 1) % 2 === 0) {
        evenDaysPrecipitation += februaryPrecipitation[i];
    } else {
        oddDaysPrecipitation += februaryPrecipitation[i];
    }
}
console.log("7.57 В четные дни выпало больше осадков: " + (evenDaysPrecipitation > oddDaysPrecipitation));

// 7.58
function task7_58(houses) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < houses.length; i++) {
        if ((i + 1) % 2 === 1) oddSum += houses[i];
        else evenSum += houses[i];
    }
    return oddSum > evenSum ? "Нечетная" : evenSum > oddSum ? "Четная" : "Поровну";
}

// 7.59
function task7_59(grades) {
    let count = 0;
    for (let grade of grades) {
        if (grade === 5) count++;
    }
    return count;
}

// 7.60
function task7_60(temperatures) {
    let count = 0;
    for (let temp of temperatures) {
        if (temp < 0) count++;
    }
    return count;
}

// 7.61
function task7_61(heights) {
    let count = 0;
    for (let height of heights) {
        if (height < 165) count++;
    }
    return count;
}

// 7.62
function task7_62(numbers, p, k) {
    const result = {greaterThanP: 0, endsWith5: 0, multipleOfK: 0};
    for (let num of numbers) {
        if (num > p) result.greaterThanP++;
        if (Math.abs(num) % 10 === 5) result.endsWith5++;
        if (num % k === 0) result.multipleOfK++;
    }
    return result;
}

// 7.63
function task7_63(grades) {
    let fives = 0, twos = 0;
    for (let grade of grades) {
        if (grade === 5) fives++;
        else if (grade === 2) twos++;
    }
    return {fives, twos};
}

// 7.64
function task7_64(birthYears) {
    let before1990 = 0, after2000 = 0;
    for (let year of birthYears) {
        if (year < 1990) before1990++;
        else if (year > 2000) after2000++;
    }
    return {before1990, after2000};
}

// 7.65
function task7_65(teams) {
    let count = 0;
    for (let team of teams) {
        if (team.wins > team.losses) count++;
    }
    return count;
}

// 7.66
function task7_66(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) break;
        count++;
    }
    return count;
}

// 7.67
function task7_67(numbers) {
    let count = 0;
    for (let num of numbers) {
        if (num === 0) break;
        count++;
    }
    return count;
}

// 7.68
function task7_68(numbers) {
    if (numbers.length === 0) return 0;
    let first = numbers[0];
    let count = 1;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== first) break;
        count++;
    }
    return count;
}

// 7.69
function task7_69(grades, allCanHaveFives = false) {
    if (allCanHaveFives) {
        let i = 0;
        while (i < grades.length && grades[i] === 5) {
            i++;
        }
        return i;
    } else {
        let i = 0;
        while (grades[i] === 5) {
            i++;
        }
        return i;
    }
}

// 7.70
function task7_70(rainfall, mayHaveNoRain = false) {
    if (mayHaveNoRain) {
        let i = 0;
        while (i < rainfall.length && rainfall[i] === 0) {
            i++;
        }
        return i;
    } else {
        let i = 0;
        while (rainfall[i] === 0) {
            i++;
        }
        return i;
    }
}

// 7.71
function task7_71(grades) {
    let count = 0;
    for (let student of grades) {
        if (student.exam1 === 2 || student.exam2 === 2) count++;
    }
    return count;
}

// 7.72
function task7_72(numbers) {
    let negative = 0, positive = 0;
    for (let num of numbers) {
        if (num < 0) negative++;
        else if (num > 0) positive++;
    }
    return {negative, positive};
}

// 7.73
function task7_73(numbers) {
    let multiple3 = 0, multiple7 = 0;
    for (let num of numbers) {
        if (num % 3 === 0) multiple3++;
        if (num % 7 === 0) multiple7++;
    }
    return {multiple3, multiple7};
}

// 7.74
function task7_74(triples) {
    let count = 0;
    for (let t of triples) {
        if (t.a + t.b > t.c && t.a + t.c > t.b && t.b + t.c > t.a) {
            count++;
        }
    }
    return count;
}

// 7.75
function task7_75(shots, R, H, P) {
    const g = 9.8;
    let hits = 0;
    for (let shot of shots) {
        const alpha = shot.alpha * Math.PI / 180;
        const v0 = shot.v0;
        const t = R / (v0 * Math.cos(alpha));
        const y = v0 * Math.sin(alpha) * t - (g * t * t) / 2;
        if (y >= H && y <= H + P) {
            hits++;
        }
    }
    return (hits / shots.length) * 100;
}

// 7.76
function task7_76(penalties) {
    const result = {};
    for (let p of penalties) {
        if (!result[p.team]) {
            result[p.team] = {count: 0, time: 0};
        }
        result[p.team].count++;
        result[p.team].time += p.minutes;
    }
    return result;
}

// 7.78
function task7_78(grades) {
    const count = {2: 0, 3: 0, 4: 0, 5: 0};
    for (let grade of grades) {
        if (count[grade] !== undefined) {
            count[grade]++;
        }
    }
    return count;
}

// 7.79
function task7_79(points) {
    let wins = 0, draws = 0, losses = 0;
    for (let p of points) {
        if (p === 3) wins++;
        else if (p === 1) draws++;
        else if (p === 0) losses++;
    }
    return {wins, draws, losses};
}

// 7.80
function task7_80(matches) {
    let wins = 0, draws = 0, losses = 0;
    let totalPoints = 0;
    let diff3OrMore = 0;
    const results = [];
    for (let match of matches) {
        if (match.scored > match.conceded) {
            results.push("выигрыш");
            wins++;
            totalPoints += 3;
        } else if (match.scored < match.conceded) {
            results.push("проигрыш");
            losses++;
        } else {
            results.push("ничья");
            draws++;
            totalPoints += 1;
        }
        if (Math.abs(match.scored - match.conceded) >= 3) {
            diff3OrMore++;
        }
    }
    return {
        results,
        wins,
        winsLosses: {wins, losses},
        allResults: {wins, draws, losses},
        diff3OrMore,
        totalPoints
    };
}

// 7.81
function task7_81(numbers) {
    const matches = [];
    for (let num of numbers) {
        const str = num.toString().padStart(2, '0');
        const scored = parseInt(str[0]);
        const conceded = parseInt(str[1]);
        matches.push({scored, conceded});
    }
    return task7_80(matches);
}

// 7.82
function task7_82(numbers) {
    const result = {equal: 0, zero: 0, even: 0, endsWith5: 0};
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i + 1]) result.equal++;
        if (numbers[i] === 0 && numbers[i + 1] === 0) result.zero++;
        if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0) result.even++;
        if (Math.abs(numbers[i]) % 10 === 5 && Math.abs(numbers[i + 1]) % 10 === 5) result.endsWith5++;
    }
    return result;
}

// 7.83
function task7_83(numbers) {
    for (let num of numbers) {
        if (num % 2 === 0) return true;
    }
    return false;
}

// 7.84
function task7_84(numbers) {
    let positiveCount = 0;
    for (let num of numbers) {
        if (num > 0) positiveCount++;
    }
    return positiveCount <= 5;
}

// 7.85
function task7_85(numbers) {
    let count = 0;
    for (let num of numbers) {
        if (num <= 33.2) count++;
    }
    return count % 4 === 0;
}

// 7.86
function task7_86(numbers) {
    let count = 0;
    for (let num of numbers) {
        if (num < 20) count++;
    }
    return count === 5;
}

// 7.87
function task7_87(numbers) {
    let count = 0;
    for (let num of numbers) {
        if (num > 0) count++;
    }
    return count % 3 === 0;
}

// 7.88
function task7_88(numbers, x) {
    let count = 0;
    for (let num of numbers) {
        if (num < 0) count++;
    }
    return count > x;
}

// 7.89
function task7_89(numbers, m, p) {
    let count = 0;
    for (let num of numbers) {
        if (num > m) count++;
    }
    return count % p === 0;
}

// 7.90
function task7_90(grades) {
    for (let grade of grades) {
        if (grade === 3) return false;
    }
    return true;
}

// 7.91
function task7_91(rainfall) {
    let count = 0;
    for (let rain of rainfall) {
        if (rain === 0) count++;
    }
    return count === 10;
}

// 7.92
function task7_92(grades) {
    for (let grade of grades) {
        if (grade === 2) return true;
    }
    return false;
}

// 7.93
function task7_93(powers) {
    for (let power of powers) {
        if (power > 200) return true;
    }
    return false;
}

// 7.94
function task7_94(numbers) {
    let count = 0;
    for (let i = 1; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
            count++;
        }
    }
    return count;
}

// 7.95
function task7_95(numbers) {
    if (numbers.length < 2) return 0;
    let count = 0;
    let prevSign = Math.sign(numbers[0]);
    for (let i = 1; i < numbers.length; i++) {
        const currentSign = Math.sign(numbers[i]);
        if (currentSign !== 0 && prevSign !== 0 && currentSign !== prevSign) {
            count++;
            prevSign = currentSign;
        }
    }
    return count;
}

// 7.96
function task7_96(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i + 1]) {
            return {found: true, firstIndex: i + 1, secondIndex: i + 2};
        }
    }
    return {found: false};
}

// 7.97
function task7_97() {
    const numbers = [];
    let input;
    while (true) {
        input = parseInt(prompt("Введите число (-1 для окончания):"));
        if (input === -1) break;
        numbers.push(input);
    }
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i + 1]) {
            return {found: true, firstIndex: i + 1, secondIndex: i + 2};
        }
    }
    return {found: false};
}

// 7.98
function task7_98(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] % 2 !== 0 && numbers[i + 1] % 2 !== 0) {
            return {found: true, firstIndex: i + 1, secondIndex: i + 2};
        }
    }
    return {found: false};
}

// 7.99
function task7_99() {
    const numbers = [];
    let input;
    while (true) {
        input = parseInt(prompt("Введите число (9999 для окончания):"));
        if (input === 9999) break;
        numbers.push(input);
    }
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0) {
            return {found: true, firstIndex: i + 1, secondIndex: i + 2};
        }
    }
    return {found: false};
}

// 7.100
function task7_100(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            return {ordered: false, breakIndex: i + 2};
        }
    }
    return {ordered: true};
}

// 7.101
function task7_101() {
    const numbers = [];
    let input;
    while (true) {
        input = parseFloat(prompt("Введите число (10000 для окончания):"));
        if (input === 10000) break;
        numbers.push(input);
    }
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[i + 1]) {
            return {ordered: false, breakIndex: i + 2};
        }
    }
    return {ordered: true};
}

// 7.102
function task7_102(heights) {
    for (let i = 0; i < heights.length - 1; i++) {
        if (heights[i] < heights[i + 1]) {
            return false;
        }
    }
    return true;
}

// 7.103
function task7_103(points) {
    for (let i = 0; i < points.length - 1; i++) {
        if (points[i] < points[i + 1]) {
            return false;
        }
    }
    return true;
}

// 7.104
function task7_104(numbers) {
    const first = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== first) return false;
    }
    return true;
}

// 7.105
function task7_105() {
    const numbers = [];
    let input;
    while (true) {
        input = parseInt(prompt("Введите число (отрицательное для окончания):"));
        if (input < 0) break;
        numbers.push(input);
    }
    if (numbers.length === 0) return true;
    const first = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== first) return false;
    }
    return true;
}

// 7.106
function task7_106(numbers) {
    let sum = 0;
    let count = 0;
    for (let num of numbers) {
        if (num > 20) {
            sum += num;
            count++;
        }
    }
    return sum / count;
}

// 7.107
function task7_107(numbers, n) {
    let sum = 0;
    let count = 0;
    for (let num of numbers) {
        if (num > n) {
            sum += num;
            count++;
        }
    }
    return sum / count;
}

// 7.108
function task7_108(numbers, n) {
    let sum = 0;
    let count = 0;
    for (let num of numbers) {
        if (num % n === 0) {
            sum += num;
            count++;
        }
    }
    return sum / count;
}

// 7.109
function task7_109(numbers) {
    let evenSum = 0, evenCount = 0;
    let oddSum = 0, oddCount = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            evenSum += num;
            evenCount++;
        } else {
            oddSum += num;
            oddCount++;
        }
    }
    return {
        evenAvg: evenCount > 0 ? evenSum / evenCount : 0,
        oddAvg: oddCount > 0 ? oddSum / oddCount : 0
    };
}

// 7.110
function task7_110(weights) {
    let heavySum = 0, heavyCount = 0;
    let lightSum = 0, lightCount = 0;
    for (let weight of weights) {
        if (weight > 100) {
            heavySum += weight;
            heavyCount++;
        } else {
            lightSum += weight;
            lightCount++;
        }
    }
    return {
        heavyAvg: heavySum / heavyCount,
        lightAvg: lightCount > 0 ? lightSum / lightCount : 0
    };
}

// 7.111
function task7_111(heights) {
    let boysSum = 0, boysCount = 0;
    let girlsSum = 0, girlsCount = 0;
    for (let height of heights) {
        if (height < 0) {
            boysSum += Math.abs(height);
            boysCount++;
        } else {
            girlsSum += height;
            girlsCount++;
        }
    }
    return {
        boysAvg: boysCount > 0 ? boysSum / boysCount : 0,
        girlsAvg: girlsCount > 0 ? girlsSum / girlsCount : 0
    };
}

// 7.112
function task7_112(numbers) {
    let sum = 0;
    let count = 0;
    for (let num of numbers) {
        if (num > 10) {
            sum += num;
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}

// 7.113
function task7_113(numbers, n) {
    let sum = 0;
    let count = 0;
    for (let num of numbers) {
        if (num > n) {
            sum += num;
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}

// 7.114
function task7_114(numbers) {
    let sum = 0;
    let count = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            sum += num;
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}

// 7.115
function task7_115(numbers, n) {
    let sum = 0;
    let count = 0;
    for (let num of numbers) {
        if (num % n === 0) {
            sum += num;
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}

// 7.116
function task7_116(cars, motorcycles) {
    let carSum = 0;
    for (let price of cars) {
        carSum += price;
    }
    let bikeSum = 0;
    for (let price of motorcycles) {
        bikeSum += price;
    }
    const carAvg = carSum / cars.length;
    const bikeAvg = bikeSum / motorcycles.length;
    return carAvg > bikeAvg * 3;
}

// 7.117
function task7_117(heights) {
    let boysSum = 0, boysCount = 0;
    let girlsSum = 0, girlsCount = 0;
    for (let height of heights) {
        if (height < 0) {
            boysSum += Math.abs(height);
            boysCount++;
        } else {
            girlsSum += height;
            girlsCount++;
        }
    }
    const boysAvg = boysCount > 0 ? boysSum / boysCount : 0;
    const girlsAvg = girlsCount > 0 ? girlsSum / girlsCount : 0;
    return boysAvg > girlsAvg + 10;
}

// 7.118
function task7_118(numbers) {
    let firstIndex = -1;
    let lastIndex = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 10) {
            if (firstIndex === -1) firstIndex = i + 1;
            lastIndex = i + 1;
        }
    }
    return {firstIndex, lastIndex};
}

// 7.119
function task7_119(numbers) {
    let lastIndex = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 100) {
            lastIndex = i + 1;
        }
    }
    return lastIndex;
}

// 7.120
function task7_120(numbers) {
    let lastIndex = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 25) {
            lastIndex = i + 1;
        }
    }
    return lastIndex;
}

// 7.121
function task7_121(numbers) {
    let lastIndex = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            lastIndex = i + 1;
        }
    }
    return lastIndex;
}

// 7.122
function task7_122(numbers) {
    let lastIndex = -1;
    for (let i = 0; i < numbers.length; i++) {
        if (Math.abs(numbers[i]) % 100 === 12) {
            lastIndex = i + 1;
        }
    }
    return lastIndex;
}

// 7.123
function task7_123(heights, newHeight) {
    let position = 1;
    for (let height of heights) {
        if (newHeight > height) break;
        position++;
    }
    return position;
}

// 7.124
function task7_124(points, N) {
    let position = 1;
    for (let pointsValue of points) {
        if (pointsValue === N) break;
        position++;
    }
    return position;
}

// 7.125
function task7_125(numbers, n) {
    let sumLess = 0;
    let leftIndex = -1;
    let rightIndex = -1;
    let leftValue = 0;
    let rightValue = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < n) {
            sumLess += numbers[i];
        }
        if (numbers[i] < n && (i === numbers.length - 1 || numbers[i + 1] > n)) {
            leftIndex = i + 1;
            leftValue = numbers[i];
        }
        if (numbers[i] > n && (i === 0 || numbers[i - 1] < n)) {
            rightIndex = i + 1;
            rightValue = numbers[i];
        }
    }

    return {
        sumLess,
        interval: {leftIndex, leftValue, rightIndex, rightValue}
    };
}

// 7.126
function task7_126(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            return {found: true, index: i + 1};
        }
    }
    return {found: false};
}

// 7.127
function task7_127() {
    const numbers = [];
    let input;
    while (true) {
        input = parseInt(prompt("Введите число (100 для окончания):"));
        numbers.push(input);
        if (input === 100) break;
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 666) {
            return {found: true, index: i + 1};
        }
    }
    return {found: false};
}

// 7.128
function task7_128(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (Math.abs(numbers[i]) % 10 === 7) {
            return {found: true, index: i + 1};
        }
    }
    return {found: false};
}

// 7.129
function task7_129() {
    const numbers = [];
    let input;
    while (true) {
        input = parseInt(prompt("Введите число (-1 для окончания):"));
        numbers.push(input);
        if (input === -1) break;
    }
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 7 === 0) {
            return {found: true, index: i + 1};
        }
    }
    return {found: false};
}

// 7.130
function task7_130(numbers) {
    let count = 0;
    let target = null;
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i + 1]) {
            target = numbers[i];
            break;
        }
    }
    if (target === null) return 0;
    for (let num of numbers) {
        if (num === target) count++;
    }
    return count;
}

// 7.131
function task7_131(numbers) {
    let maxCount = 0;
    let currentCount = 1;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === numbers[i - 1]) {
            currentCount++;
        } else {
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
            currentCount = 1;
        }
    }
    if (currentCount > maxCount) {
        maxCount = currentCount;
    }
    return maxCount;
}

// 7.132
function task7_132(numbers) {
    if (numbers.length === 0) return 0;
    let count = 1;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i - 1]) {
            count++;
        }
    }
    return count;
}

// 7.133
function task7_133() {
    const numbers = [];
    let input;
    while (true) {
        input = parseFloat(prompt("Введите число (1000 для окончания):"));
        numbers.push(input);
        if (input === 1000) break;
    }
    let maxCount = 0;
    let currentCount = 1;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === numbers[i - 1]) {
            currentCount++;
        } else {
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
            currentCount = 1;
        }
    }
    if (currentCount > maxCount) {
        maxCount = currentCount;
    }
    return maxCount;
}

// 7.134
function task7_134() {
    const numbers = [];
    let input;
    while (true) {
        input = parseFloat(prompt("Введите число (0 для окончания):"));
        numbers.push(input);
        if (input === 0) break;
    }
    if (numbers.length === 0) return 0;
    let count = 1;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i - 1]) {
            count++;
        }
    }
    return count;
}

// 7.135
function task7_135(numbers) {
    let max = numbers[0];
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) max = numbers[i];
        if (numbers[i] < min) min = numbers[i];
    }
    return {max, min};
}

// 7.136
function task7_136() {
    let bestTime = Infinity;
    let input;
    while (true) {
        input = parseFloat(prompt("Введите время спортсмена (0 для окончания):"));
        if (input === 0) break;
        if (input < bestTime) {
            bestTime = input;
            console.log("Новый лучший результат:", bestTime);
        }
    }
    return bestTime;
}

// 7.137
function task7_137(distances) {
    let maxDistance = distances[0];
    for (let i = 1; i < distances.length; i++) {
        if (distances[i] > maxDistance) {
            maxDistance = distances[i];
        }
    }
    return maxDistance;
}

// 7.138
function task7_138(temperatures) {
    let maxTemp = temperatures[0];
    for (let i = 1; i < temperatures.length; i++) {
        if (temperatures[i] > maxTemp) {
            maxTemp = temperatures[i];
        }
    }
    return maxTemp;
}

// 7.139
function task7_139(speeds) {
    let maxSpeed = speeds[0];
    for (let i = 1; i < speeds.length; i++) {
        if (speeds[i] > maxSpeed) {
            maxSpeed = speeds[i];
        }
    }
    return maxSpeed;
}

// 7.140
function task7_140(areas) {
    let minRadius = Math.sqrt(areas[0] / Math.PI);
    for (let i = 1; i < areas.length; i++) {
        const radius = Math.sqrt(areas[i] / Math.PI);
        if (radius < minRadius) {
            minRadius = radius;
        }
    }
    return minRadius;
}

// 7.141
function task7_141(areas) {
    let maxDiagonal = Math.sqrt(areas[0] * 2);
    for (let i = 1; i < areas.length; i++) {
        const diagonal = Math.sqrt(areas[i] * 2);
        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal;
        }
    }
    return maxDiagonal;
}

// 7.142
function task7_142(bodies) {
    let maxDensity = bodies[0].mass / bodies[0].volume;
    for (let i = 1; i < bodies.length; i++) {
        const density = bodies[i].mass / bodies[i].volume;
        if (density > maxDensity) {
            maxDensity = density;
        }
    }
    return maxDensity;
}

// 7.143
function task7_143(countries) {
    let minDensity = countries[0].population / countries[0].area;
    for (let i = 1; i < countries.length; i++) {
        const density = countries[i].population / countries[i].area;
        if (density < minDensity) {
            minDensity = density;
        }
    }
    return minDensity;
}

// 7.144
function task7_144(pairs) {
    let maxSum = pairs[0].a + pairs[0].b;
    let minProduct = pairs[0].a * pairs[0].b;
    for (let i = 1; i < pairs.length; i++) {
        const sum = pairs[i].a + pairs[i].b;
        const product = pairs[i].a * pairs[i].b;
        if (sum > maxSum) maxSum = sum;
        if (product < minProduct) minProduct = product;
    }
    return {maxSum, minProduct};
}

// 7.145
function task7_145(scores) {
    let maxScore = Math.max(...scores);
    let minScore = Math.min(...scores);
    let sum = 0;
    let maxRemoved = false;
    let minRemoved = false;
    for (let score of scores) {
        if (!maxRemoved && score === maxScore) {
            maxRemoved = true;
            continue;
        }
        if (!minRemoved && score === minScore) {
            minRemoved = true;
            continue;
        }
        sum += score;
    }
    return sum / (scores.length - 2);
}

// 7.146
function task7_146(heights) {
    let maxHeight = Math.max(...heights);
    let minHeight = Math.min(...heights);
    return maxHeight - minHeight;
}

// 7.147
function task7_147(classSizes) {
    let maxSize = Math.max(...classSizes);
    let minSize = Math.min(...classSizes);
    return maxSize - minSize;
}

// 7.148
function task7_148(numbers) {
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    return max - min <= 25;
}

// 7.149
function task7_149(weights) {
    let max = Math.max(...weights);
    let min = Math.min(...weights);
    return max > min * 2;
}

// 7.150
function task7_150(numbers) {
    let maxLength = 0;
    let currentLength = 0;
    for (let num of numbers) {
        if (num % 2 === 0) {
            currentLength++;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
        } else {
            currentLength = 0;
        }
    }
    return maxLength;
}

// 7.151
function task7_151(numbers) {
    let minLength = Infinity;
    let currentLength = 0;
    for (let num of numbers) {
        if (num === 0) {
            currentLength++;
        } else {
            if (currentLength > 0 && currentLength < minLength) {
                minLength = currentLength;
            }
            currentLength = 0;
        }
    }
    if (currentLength > 0 && currentLength < minLength) {
        minLength = currentLength;
    }
    return minLength === Infinity ? 0 : minLength;
}

// 7.152
function task7_152(numbers, n) {
    let closestIndex = 0;
    let closestDiff = Math.abs(numbers[0] - n);
    for (let i = 1; i < numbers.length; i++) {
        const diff = Math.abs(numbers[i] - n);
        if (diff < closestDiff) {
            closestDiff = diff;
            closestIndex = i;
        }
    }
    return {index: closestIndex + 1, value: numbers[closestIndex]};
}

// 7.153
function task7_153(numbers) {
    let maxEven = -Infinity;
    for (let num of numbers) {
        if (num % 2 === 0 && num > maxEven) {
            maxEven = num;
        }
    }
    return maxEven === -Infinity ? null : maxEven;
}

// 7.154
function task7_154(numbers) {
    let maxCount = 1;
    let currentCount = 1;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === numbers[i - 1]) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 1;
        }
    }
    return maxCount;
}

// 7.155
function task7_155(numbers) {
    let maxLength = 1;
    let currentLength = 1;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            currentLength++;
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
        } else {
            currentLength = 1;
        }
    }
    return maxLength;
}

// 7.156
function task7_156(numbers) {
    let maxLength = 1;
    let currentLength = 1;
    let direction = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i - 1]) {
            if (direction === -1) {
                currentLength = 2;
            } else {
                currentLength++;
            }
            direction = 1;
        } else if (numbers[i] < numbers[i - 1]) {
            if (direction === 1) {
                currentLength = 2;
            } else {
                currentLength++;
            }
            direction = -1;
        }
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }
    return maxLength;
}

// 7.157
function task7_157(numbers) {
    let maxIndex = 0;
    let minIndex = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] >= numbers[maxIndex]) {
            maxIndex = i;
        }
        if (numbers[i] < numbers[minIndex]) {
            minIndex = i;
        }
    }
    return {maxIndex: maxIndex + 1, minIndex: minIndex + 1};
}

// 7.158
function task7_158(numbers) {
    let maxIndex = 0;
    let minIndex = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] >= numbers[maxIndex]) {
            maxIndex = i;
        }
        if (numbers[i] <= numbers[minIndex]) {
            minIndex = i;
        }
    }
    return {maxIndex: maxIndex + 1, minIndex: minIndex + 1};
}

// 7.159
function task7_159(residents) {
    let maxResidents = residents[0];
    let maxApartment = 1;
    for (let i = 1; i < residents.length; i++) {
        if (residents[i] >= maxResidents) {
            maxResidents = residents[i];
            maxApartment = i + 1;
        }
    }
    return maxApartment;
}

// 7.160
function task7_160(results) {
    let bestTime = results[0];
    let bestSkier = 1;
    for (let i = 1; i < results.length; i++) {
        if (results[i] < bestTime) {
            bestTime = results[i];
            bestSkier = i + 1;
        }
    }
    return bestSkier;
}

// 7.161
function task7_161(points) {
    let minPoints = points[0];
    let minTeam = 1;
    for (let i = 1; i < points.length; i++) {
        if (points[i] < minPoints) {
            minPoints = points[i];
            minTeam = i + 1;
        }
    }
    return minTeam;
}

// 7.162
function task7_162(rainfall) {
    let maxRain = rainfall[0];
    let maxDay = 1;
    for (let i = 1; i < rainfall.length; i++) {
        if (rainfall[i] >= maxRain) {
            maxRain = rainfall[i];
            maxDay = i + 1;
        }
    }
    return maxDay;
}

// 7.163
function task7_163(times) {
    const waitTimes = [];
    let totalWait = 0;
    let minServiceTime = times[0];
    let minServiceCustomer = 1;
    for (let i = 0; i < times.length; i++) {
        waitTimes.push(totalWait);
        totalWait += times[i];
        if (times[i] <= minServiceTime) {
            minServiceTime = times[i];
            minServiceCustomer = i + 1;
        }
    }
    return {waitTimes, minServiceCustomer};
}

// 7.164
function task7_164(pairs) {
    let maxAvg = (pairs[0].a + pairs[0].b) / 2;
    let minGeo = Math.sqrt(pairs[0].a * pairs[0].b);
    let maxAvgIndex = 1;
    let minGeoIndex = 1;
    for (let i = 1; i < pairs.length; i++) {
        const avg = (pairs[i].a + pairs[i].b) / 2;
        const geo = Math.sqrt(pairs[i].a * pairs[i].b);
        if (avg >= maxAvg) {
            maxAvg = avg;
            maxAvgIndex = i + 1;
        }
        if (geo < minGeo) {
            minGeo = geo;
            minGeoIndex = i + 1;
        }
    }
    return {maxAvgIndex, minGeoIndex};
}

// 7.165
function task7_165(cars) {
    let maxSpeed = cars[0].distance / cars[0].time;
    let maxCar = 1;
    for (let i = 1; i < cars.length; i++) {
        const speed = cars[i].distance / cars[i].time;
        if (speed > maxSpeed) {
            maxSpeed = speed;
            maxCar = i + 1;
        }
    }
    return maxCar;
}

// 7.166
function task7_166(resistors) {
    let minCurrent = resistors[0].voltage / resistors[0].resistance;
    let minResistor = 1;
    for (let i = 1; i < resistors.length; i++) {
        const current = resistors[i].voltage / resistors[i].resistance;
        if (current < minCurrent) {
            minCurrent = current;
            minResistor = i + 1;
        }
    }
    return minResistor;
}

// 7.167
function task7_167(numbers) {
    let maxIndex = 0;
    let minIndex = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[maxIndex]) {
            maxIndex = i;
        }
        if (numbers[i] < numbers[minIndex]) {
            minIndex = i;
        }
    }
    return maxIndex < minIndex ? "максимальное" : "минимальное";
}

// 7.168
function task7_168(ages) {
    let maxIndex = 0;
    let minIndex = 0;
    for (let i = 1; i < ages.length; i++) {
        if (ages[i] > ages[maxIndex]) {
            maxIndex = i;
        }
        if (ages[i] < ages[minIndex]) {
            minIndex = i;
        }
    }
    return maxIndex < minIndex ? "старший" : "молодой";
}

// 7.169
function task7_169(results) {
    let winIndex = 0;
    let loseIndex = 0;
    for (let i = 1; i < results.length; i++) {
        if (results[i] < results[winIndex]) {
            winIndex = i;
        }
        if (results[i] > results[loseIndex]) {
            loseIndex = i;
        }
    }
    return winIndex < loseIndex;
}

// 7.170
function task7_170(numbers) {
    let maxSum = numbers[0] + numbers[1];
    let minSum = numbers[0] + numbers[1];
    let maxSumIndices = [1, 2];
    let minSumIndices = [1, 2];
    for (let i = 1; i < numbers.length - 1; i++) {
        const sum = numbers[i] + numbers[i + 1];
        if (sum > maxSum) {
            maxSum = sum;
            maxSumIndices = [i + 1, i + 2];
        }
        if (sum < minSum) {
            minSum = sum;
            minSumIndices = [i + 1, i + 2];
        }
    }
    return {maxSum, minSum, maxSumIndices, minSumIndices};
}

// 7.171
function task7_171(numbers) {
    let max1 = -Infinity, max2 = -Infinity;
    let min1 = Infinity, min2 = Infinity;
    for (let num of numbers) {
        if (num > max1) {
            max2 = max1;
            max1 = num;
        } else if (num > max2) {
            max2 = num;
        }
        if (num < min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }
    return {max1, max2, min1, min2};
}

// 7.172
function task7_172(results) {
    let first = Infinity, second = Infinity;
    for (let time of results) {
        if (time < first) {
            second = first;
            first = time;
        } else if (time < second) {
            second = time;
        }
    }
    return {first, second};
}

// 7.173
function task7_173(speeds) {
    let max1 = -Infinity, max2 = -Infinity;
    for (let speed of speeds) {
        if (speed > max1) {
            max2 = max1;
            max1 = speed;
        } else if (speed > max2) {
            max2 = speed;
        }
    }
    return max2;
}

// 7.174
function task7_174(points) {
    let first = -Infinity, second = -Infinity, third = -Infinity;
    for (let pts of points) {
        if (pts > first) {
            third = second;
            second = first;
            first = pts;
        } else if (pts > second) {
            third = second;
            second = pts;
        } else if (pts > third) {
            third = pts;
        }
    }
    return {first, second, third};
}

// 7.175
function task7_175(times) {
    const sorted = [...times].sort((a, b) => a - b);
    const top4 = sorted.slice(0, 4);
    const sum = top4.reduce((acc, val) => acc + val, 0);
    return {top4, sum};
}

// 7.176
function task7_176(temperatures) {
    let min1 = Infinity, min2 = Infinity;
    let day1 = 1, day2 = 1;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] < min1) {
            min2 = min1;
            min1 = temperatures[i];
            day2 = day1;
            day1 = i + 1;
        } else if (temperatures[i] < min2) {
            min2 = temperatures[i];
            day2 = i + 1;
        }
    }
    return {day1, day2};
}

// 7.177
function task7_177(A) {
    if (A === 0) return 4;
    if (A === 8) return 5;
    if (A > 8) return 1;
    return 4;
}

// 7.178
function task7_178(numbers) {
    let max = Math.max(...numbers);
    let min = Math.min(...numbers);
    let maxCount = 0, minCount = 0;
    for (let num of numbers) {
        if (num === max) maxCount++;
        if (num === min) minCount++;
    }
    return {maxCount, minCount};
}

// 7.179
function task7_179(residents) {
    let maxResidents = Math.max(...residents);
    let count = 0;
    for (let res of residents) {
        if (res === maxResidents) count++;
    }
    return count;
}

// 7.180
function task7_180(temperatures) {
    let minTemp = Math.min(...temperatures);
    let count = 0;
    for (let temp of temperatures) {
        if (temp === minTemp) count++;
    }
    return count;
}

// 7.181
function task7_181(numbers, caseA = true) {
    if (numbers.length < 2) return true;
    for (let i = 0; i < numbers.length - 1; i++) {
        const current = numbers[i].toString().padStart(2, '0');
        const next = numbers[i + 1].toString().padStart(2, '0');
        if (caseA) {
            const rightDigit = current[1];
            const leftDigit = next[0];
            if (rightDigit !== leftDigit) return false;
        } else {
            const currentDigits = [current[0], current[1]];
            const nextDigits = [next[0], next[1]];
            let match = false;
            for (let d1 of currentDigits) {
                for (let d2 of nextDigits) {
                    if (d1 === d2) {
                        match = true;
                        break;
                    }
                }
                if (match) break;
            }
            if (!match) return false;
        }
    }
    return true;
}

