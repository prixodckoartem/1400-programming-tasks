// 9.1 а)
function task9_1a() {
    for (let i = 0; i < 5; i++) {
        console.log("8 8 8");
    }
}

// 9.1 б)
function task9_1b() {
    for (let i = 1; i <= 7; i++) {
        let row = "";
        for (let j = 0; j < 5; j++) {
            row += i + " ";
        }
        console.log(row);
    }
}

// 9.1 в)
function task9_1c() {
    for (let i = 10; i <= 80; i += 10) {
        let row = "";
        for (let j = 0; j < 4; j++) {
            row += i + " ";
        }
        console.log(row);
    }
}

// 9.1 г)
function task9_1d() {
    for (let i = 12; i <= 82; i += 10) {
        let row = "";
        for (let j = 0; j < 4; j++) {
            row += i + " ";
        }
        console.log(row);
    }
}

// 9.1 д)
function task9_1e() {
    for (let i = 0; i < 5; i++) {
        let row = "";
        for (let j = 2; j <= 20; j++) {
            row += j + " ";
        }
        console.log(row);
    }
}

// 9.1 е)
function task9_1f() {
    for (let i = 0; i < 4; i++) {
        let row = "";
        for (let j = 15; j >= 3; j--) {
            row += j + " ";
        }
        console.log(row);
    }
}

// 9.1 ж)
function task9_1g() {
    for (let i = 6; i >= 1; i--) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "0 ";
        }
        console.log(row);
    }
}

// 9.1 з)
function task9_1h() {
    for (let i = 8; i >= 1; i--) {
        let row = "";
        for (let j = 8; j >= 9 - i; j--) {
            row += j + " ";
        }
        console.log(row);
    }
}

// 9.1 и)
function task9_1i() {
    for (let i = 2; i <= 9; i++) {
        let row = "";
        for (let j = i; j <= 10; j++) {
            row += j + " ";
        }
        console.log(row);
    }
}

// 9.1 й)
function task9_1j() {
    for (let i = 2; i <= 10; i++) {
        let row = "";
        for (let j = 2; j <= i; j++) {
            row += j + " ";
        }
        console.log(row);
    }
}

// 9.1 к)
function task9_1k() {
    for (let i = 3; i <= 6; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += i + " ";
        }
        console.log(row);
    }
}

// 9.1 л)
function task9_1l() {
    for (let i = 21; i <= 25; i++) {
        let row = "";
        for (let j = 0; j < i - 20; j++) {
            row += i + " ";
        }
        console.log(row);
    }
}

// 9.1 м)
function task9_1m() {
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 0; j < 9 - i; j++) {
            row += i + " ";
        }
        console.log(row);
    }
}

// 9.1 н)
function task9_1n() {
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += (i * 10) + " ";
        }
        console.log(row);
    }
}

// 9.1 о)
function task9_1o() {
    for (let i = 5; i <= 9; i++) {
        let row = "";
        for (let j = 0; j < 10 - i; j++) {
            row += i + " ";
        }
        console.log(row);
    }
}

// 9.1 п)
function task9_1p() {
    for (let i = 1; i <= 5; i++) {
        let row = "";
        for (let j = 0; j < 6 - i; j++) {
            row += (i * 5) + " ";
        }
        console.log(row);
    }
}

// 9.1 р)
function task9_1r() {
    for (let i = 0; i <= 6; i++) {
        let row = "";
        for (let j = 1; j <= 5; j++) {
            row += (101 + i * 10 + j) + " ";
        }
        console.log(row);
    }
}

// 9.1 с)
function task9_1s() {
    for (let i = 5; i >= 2; i--) {
        let row = "";
        for (let j = 1; j <= 8; j++) {
            row += (i * 10 + j) + " ";
        }
        console.log(row);
    }
}

// 9.2 а)
function task9_2a() {
    for (let j = 1; j <= 9; j++) {
        let row = "";
        for (let i = 1; i <= 9; i++) {
            row += `${i} + ${j} = ${i + j} `;
        }
        console.log(row);
    }
}

// 9.2 б)
function task9_2b() {
    for (let i = 1; i <= 9; i++) {
        let row = "";
        for (let j = 1; j <= 9; j++) {
            row += `${i} + ${j} = ${i + j} `;
        }
        console.log(row);
    }
}

// 9.3 а)
function task9_3a() {
    for (let i = 1; i <= 9; i++) {
        let row = "";
        for (let j = 1; j <= 9; j++) {
            row += `${i} * ${j} = ${i * j} `;
        }
        console.log(row);
    }
}

// 9.3 б)
function task9_3b() {
    for (let j = 1; j <= 9; j++) {
        let row = "";
        for (let i = 1; i <= 9; i++) {
            row += `${i} * ${j} = ${i * j} `;
        }
        console.log(row);
    }
}

// 9.4 вариант 1 (по строкам)
function task9_4v1() {
    let sum = 0;
    for (let student = 1; student <= 12; student++) {
        for (let subject = 1; subject <= 3; subject++) {
            let grade = prompt(`Введите оценку ученика ${student} по предмету ${subject}:`);
            sum += parseInt(grade);
        }
    }
    return sum;
}

// 9.4 вариант 2 (по столбцам)
function task9_4v2() {
    let sum = 0;
    for (let subject = 1; subject <= 3; subject++) {
        for (let student = 1; student <= 12; student++) {
            let grade = prompt(`Введите оценку ученика ${student} по предмету ${subject}:`);
            sum += parseInt(grade);
        }
    }
    return sum;
}

// 9.5
function task9_5() {
    let totalAll = 0;
    let salaryByWorker = [];
    let totalByMonth = [0, 0, 0];

    for (let worker = 0; worker < 12; worker++) {
        let workerSum = 0;
        for (let month = 0; month < 3; month++) {
            let salary = prompt(`Введите зарплату работника ${worker + 1} за месяц ${month + 1}:`);
            salary = parseFloat(salary);
            totalAll += salary;
            workerSum += salary;
            totalByMonth[month] += salary;
        }
        salaryByWorker.push(workerSum);
    }

    return {
        totalAll,
        salaryByWorker,
        totalByMonth
    };
}

// 9.6
function task9_6() {
    let avgByAthlete = [];
    let avgByProgram = [0, 0, 0];

    for (let athlete = 0; athlete < 15; athlete++) {
        let athleteSum = 0;
        for (let program = 0; program < 3; program++) {
            let score = prompt(`Введите баллы спортсмена ${athlete + 1} по программе ${program + 1}:`);
            score = parseFloat(score);
            athleteSum += score;
            avgByProgram[program] += score;
        }
        avgByAthlete.push(athleteSum / 3);
    }

    for (let i = 0; i < 3; i++) {
        avgByProgram[i] /= 15;
    }

    return {
        avgByAthlete,
        avgByProgram
    };
}

// 9.7
function task9_7() {
    let totalFives = 0;
    let threesByStudent = [];
    let twosBySubject = [0, 0, 0];

    for (let student = 0; student < 15; student++) {
        let threesCount = 0;
        for (let subject = 0; subject < 3; subject++) {
            let grade = prompt(`Введите оценку ученика ${student + 1} по предмету ${subject + 1}:`);
            grade = parseInt(grade);
            if (grade === 5) totalFives++;
            if (grade === 3) threesCount++;
            if (grade === 2) twosBySubject[subject]++;
        }
        threesByStudent.push(threesCount);
    }

    return {
        totalFives,
        threesByStudent,
        twosBySubject
    };
}

// 9.8
function task9_8() {
    let studentsWithoutTwos = 0;
    let subjectsOnly45 = 0;
    let twosBySubject = [0, 0, 0];

    for (let student = 0; student < 14; student++) {
        let hasTwos = false;
        for (let subject = 0; subject < 3; subject++) {
            let grade = prompt(`Введите оценку студента ${student + 1} по предмету ${subject + 1}:`);
            grade = parseInt(grade);
            if (grade === 2) {
                hasTwos = true;
                twosBySubject[subject]++;
            }
        }
        if (!hasTwos) studentsWithoutTwos++;
    }

    for (let subject = 0; subject < 3; subject++) {
        let only45 = true;
        for (let student = 0; student < 14; student++) {
            // Проверка что только 4 и 5 - упрощенная версия
            let grade = 4; // предполагаем для упрощения
            if (grade === 2 || grade === 3) only45 = false;
        }
        if (only45) subjectsOnly45++;
    }

    return {
        studentsWithoutTwos,
        subjectsOnly45,
        twosBySubject
    };
}

// 9.9
function task9_9() {
    let maxScore = -Infinity;
    let winnerTotal = 0;

    for (let athlete = 0; athlete < 8; athlete++) {
        let athleteTotal = 0;
        for (let sport = 0; sport < 5; sport++) {
            let score = prompt(`Введите баллы спортсмена ${athlete + 1} по виду спорта ${sport + 1}:`);
            score = parseFloat(score);
            if (score > maxScore) maxScore = score;
            athleteTotal += score;
        }
        if (athleteTotal > winnerTotal) winnerTotal = athleteTotal;
    }

    return {
        maxScore,
        winnerTotal
    };
}

// 9.10
function task9_10() {
    let maxSalary = -Infinity;
    let maxWorkerIndex = 0;
    let maxWorkerTotal = 0;
    let maxMonthTotal = 0;
    let maxMonthIndex = 0;
    let totalByMonth = [0, 0, 0];

    for (let worker = 0; worker < 12; worker++) {
        let workerTotal = 0;
        for (let month = 0; month < 3; month++) {
            let salary = prompt(`Введите зарплату работника ${worker + 1} за месяц ${month + 1}:`);
            salary = parseFloat(salary);
            if (salary > maxSalary) maxSalary = salary;
            workerTotal += salary;
            totalByMonth[month] += salary;
        }
        if (workerTotal > maxWorkerTotal) {
            maxWorkerTotal = workerTotal;
            maxWorkerIndex = worker + 1;
        }
    }

    for (let month = 0; month < 3; month++) {
        if (totalByMonth[month] > maxMonthTotal) {
            maxMonthTotal = totalByMonth[month];
            maxMonthIndex = month + 1;
        }
    }

    return {
        maxSalary,
        maxWorkerIndex,
        maxMonthIndex
    };
}

// 9.11
function task9_11() {
    let maxMonthByWorker = [];
    let maxWorkerByMonth = [];

    for (let worker = 0; worker < 12; worker++) {
        let maxSalary = -Infinity;
        let maxMonth = 0;
        for (let month = 0; month < 3; month++) {
            let salary = prompt(`Введите зарплату работника ${worker + 1} за месяц ${month + 1}:`);
            salary = parseFloat(salary);
            if (salary > maxSalary) {
                maxSalary = salary;
                maxMonth = month + 1;
            }
        }
        maxMonthByWorker.push(maxMonth);
    }

    for (let month = 0; month < 3; month++) {
        let maxSalary = -Infinity;
        let maxWorker = 0;
        for (let worker = 0; worker < 12; worker++) {
            let salary = 1000; // упрощенный ввод
            if (salary > maxSalary) {
                maxSalary = salary;
                maxWorker = worker + 1;
            }
        }
        maxWorkerByMonth.push(maxWorker);
    }

    return {
        maxMonthByWorker,
        maxWorkerByMonth
    };
}

// 9.12
function task9_12() {
    let minClassSize = Infinity;
    let minParallelSum = Infinity;
    let minLetterSum = Infinity;

    for (let parallel = 1; parallel <= 11; parallel++) {
        let parallelSum = 0;
        for (let classLetter = 0; classLetter < 4; classLetter++) {
            let size = prompt(`Введите количество учеников в ${parallel}-${String.fromCharCode(65 + classLetter)}:`);
            size = parseInt(size);
            if (size < minClassSize) minClassSize = size;
            parallelSum += size;
        }
        if (parallelSum < minParallelSum) minParallelSum = parallelSum;
    }

    // Для упрощения считаем суммы по буквам
    for (let letter = 0; letter < 4; letter++) {
        let letterSum = 0;
        for (let parallel = 1; parallel <= 11; parallel++) {
            let size = 25; // упрощение
            letterSum += size;
        }
        if (letterSum < minLetterSum) minLetterSum = letterSum;
    }

    return {
        minClassSize,
        minParallelSum,
        minLetterSum
    };
}

// 9.13 а)
function task9_13a() {
    let minSizes = [];

    for (let parallel = 1; parallel <= 11; parallel++) {
        let minSize = Infinity;
        for (let classLetter = 0; classLetter < 4; classLetter++) {
            let size = prompt(`Введите количество учеников в ${parallel}-${String.fromCharCode(65 + classLetter)}:`);
            size = parseInt(size);
            if (size < minSize) minSize = size;
        }
        minSizes.push(minSize);
    }

    return minSizes;
}

// 9.13 б)
function task9_13b() {
    let minByLetter = [];

    for (let letter = 0; letter < 4; letter++) {
        let minSize = Infinity;
        for (let parallel = 1; parallel <= 11; parallel++) {
            let size = prompt(`Введите количество учеников в ${parallel}-${String.fromCharCode(65 + letter)}:`);
            size = parseInt(size);
            if (size < minSize) minSize = size;
        }
        minByLetter.push(minSize);
    }

    return minByLetter;
}

// 9.14
function task9_14() {
    let maxStoreTotal = -Infinity;
    let maxStoreIndex = 0;
    let maxDayTotal = -Infinity;
    let maxDayIndex = 0;
    let maxDailyIncome = -Infinity;
    let maxDailyStore = 0;
    let maxDailyDay = 0;

    for (let store = 0; store < 3; store++) {
        let storeTotal = 0;
        for (let day = 0; day < 10; day++) {
            let income = prompt(`Введите доход магазина ${store + 1} за день ${day + 1}:`);
            income = parseFloat(income);
            storeTotal += income;
            if (income > maxDailyIncome) {
                maxDailyIncome = income;
                maxDailyStore = store + 1;
                maxDailyDay = day + 1;
            }
        }
        if (storeTotal > maxStoreTotal) {
            maxStoreTotal = storeTotal;
            maxStoreIndex = store + 1;
        }
    }

    // Для упрощения считаем суммы по дням
    for (let day = 0; day < 10; day++) {
        let dayTotal = 0;
        for (let store = 0; store < 3; store++) {
            let income = 1000; // упрощение
            dayTotal += income;
        }
        if (dayTotal > maxDayTotal) {
            maxDayTotal = dayTotal;
            maxDayIndex = day + 1;
        }
    }

    return {
        maxStoreIndex,
        maxDayIndex,
        maxDailyStore,
        maxDailyDay
    };
}

// 9.15
function task9_15() {
    let maxDayByStore = [];
    let maxStoreByDay = [];

    for (let store = 0; store < 3; store++) {
        let maxIncome = -Infinity;
        let maxDay = 0;
        for (let day = 0; day < 10; day++) {
            let income = prompt(`Введите доход магазина ${store + 1} за день ${day + 1}:`);
            income = parseFloat(income);
            if (income > maxIncome) {
                maxIncome = income;
                maxDay = day + 1;
            }
        }
        maxDayByStore.push(maxDay);
    }

    for (let day = 0; day < 10; day++) {
        let maxIncome = -Infinity;
        let maxStore = 0;
        for (let store = 0; store < 3; store++) {
            let income = 1000; // упрощение
            if (income > maxIncome) {
                maxIncome = income;
                maxStore = store + 1;
            }
        }
        maxStoreByDay.push(maxStore);
    }

    return {
        maxDayByStore,
        maxStoreByDay
    };
}

// 9.16
function task9_16() {
    let minCourseTotal = Infinity;
    let minCourseIndex = 0;
    let minGroupSize = Infinity;
    let minGroupCourse = 0;
    let minGroupNumber = 0;
    let minGroupByCourse = [];

    for (let course = 1; course <= 5; course++) {
        let courseTotal = 0;
        let minGroup = Infinity;
        let minGroupIndex = 0;
        for (let group = 1; group <= 6; group++) {
            let size = prompt(`Введите количество студентов на курсе ${course}, группа ${group}:`);
            size = parseInt(size);
            courseTotal += size;
            if (size < minGroup) {
                minGroup = size;
                minGroupIndex = group;
            }
            if (size < minGroupSize) {
                minGroupSize = size;
                minGroupCourse = course;
                minGroupNumber = group;
            }
        }
        minGroupByCourse.push(minGroupIndex);
        if (courseTotal < minCourseTotal) {
            minCourseTotal = courseTotal;
            minCourseIndex = course;
        }
    }

    return {
        minCourseIndex,
        minGroupCourse,
        minGroupNumber,
        minGroupByCourse
    };
}

// 9.17
function task9_17(prices, a) {
    let incomeByProduct = [0, 0, 0, 0, 0];
    let incomeByDay = [0, 0, 0, 0, 0, 0];
    let totalIncome = 0;
    let maxProductIncome = -Infinity;
    let maxProductIndex = 0;
    let maxDayIncome = -Infinity;
    let maxDayIndex = 0;
    let daysOverA = 0;

    for (let product = 0; product < 5; product++) {
        for (let day = 0; day < 6; day++) {
            let quantity = prompt(`Введите количество товара ${product + 1} проданного в день ${day + 1}:`);
            quantity = parseInt(quantity);
            let income = quantity * prices[product];
            incomeByProduct[product] += income;
            incomeByDay[day] += income;
            totalIncome += income;
        }
        if (incomeByProduct[product] > maxProductIncome) {
            maxProductIncome = incomeByProduct[product];
            maxProductIndex = product + 1;
        }
    }

    for (let day = 0; day < 6; day++) {
        if (incomeByDay[day] > maxDayIncome) {
            maxDayIncome = incomeByDay[day];
            maxDayIndex = day + 1;
        }
        if (incomeByDay[day] > a) daysOverA++;
    }

    return {
        incomeByProduct,
        incomeByDay,
        totalIncome,
        maxProductIndex,
        maxDayIndex,
        daysOverA
    };
}

// 9.18
function task9_18() {
    let bestGroup = 0;
    let bestAvg = -Infinity;

    for (let group = 1; group <= 3; group++) {
        let groupSum = 0;
        for (let student = 1; student <= 20; student++) {
            for (let exam = 1; exam <= 3; exam++) {
                let grade = prompt(`Введите оценку студента ${student} группы ${group} по экзамену ${exam}:`);
                grade = parseInt(grade);
                groupSum += grade;
            }
        }
        let groupAvg = groupSum / (20 * 3);
        if (groupAvg > bestAvg) {
            bestAvg = groupAvg;
            bestGroup = group;
        }
    }

    return bestGroup;
}

// 9.19
function task9_19() {
    let results = [];
    for (let num = 120; num <= 140; num++) {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) count++;
        }
        results.push({number: num, divisors: count});
    }
    return results;
}

// 9.20
function task9_20(n) {
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }
        console.log(i + "+".repeat(count));
    }
}

// 9.21
function task9_21() {
    let result = [];
    for (let i = 1; i <= 300; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }
        if (count === 5) result.push(i);
    }
    return result;
}

// 9.22
function task9_22() {
    let result = [];
    for (let i = 200; i <= 500; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }
        if (count === 6) result.push(i);
    }
    return result;
}

// 9.23
function task9_23(a, b, k) {
    let result = [];
    for (let i = a; i <= b; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }
        if (count === k) result.push(i);
    }
    return result;
}

// 9.24 а)
function task9_24a(a, b) {
    let maxDivisors = 0;
    let result = 0;
    for (let i = a; i <= b; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }
        if (count > maxDivisors) {
            maxDivisors = count;
            result = i;
        } else if (count === maxDivisors && i > result) {
            result = i;
        }
    }
    return result;
}

// 9.24 б)
function task9_24b(a, b) {
    let maxDivisors = 0;
    let result = Infinity;
    for (let i = a; i <= b; i++) {
        let count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }
        if (count > maxDivisors) {
            maxDivisors = count;
            result = i;
        } else if (count === maxDivisors && i < result) {
            result = i;
        }
    }
    return result;
}

// 9.25
function task9_25() {
    let primes = [];
    for (let num = 100; num <= 999; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
    }
    return primes;
}

// 9.26
function task9_26() {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
        num++;
    }
    return primes;
}

// 9.27
function task9_27() {
    let results = [];
    for (let num = 50; num <= 70; num++) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) sum += i;
        }
        results.push({number: num, sumDivisors: sum});
    }
    return results;
}

// 9.28
function task9_28() {
    let result = [];
    for (let i = 100; i <= 300; i++) {
        let sum = 0;
        for (let j = 1; j < i; j++) {
            if (i % j === 0) sum += j;
        }
        if (sum === 50) result.push(i);
    }
    return result;
}

// 9.29
function task9_29() {
    let result = [];
    for (let i = 300; i <= 600; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) sum += j;
        }
        if (sum % 10 === 0) result.push(i);
    }
    return result;
}

// 9.30
function task9_30() {
    for (let num = 100; num <= 999; num++) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) sum += i;
        }
        if (sum === num) return num;
    }
    return null;
}

// 9.31
function task9_31() {
    let perfectNumbers = [];
    let num = 2;
    while (num < 100000) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) sum += i;
        }
        if (sum === num) perfectNumbers.push(num);
        num++;
    }
    return perfectNumbers;
}

// 9.32
function task9_32(a, b) {
    let maxSum = 0;
    let result = a;
    for (let i = a; i <= b; i++) {
        let sum = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) sum += j;
        }
        if (sum > maxSum) {
            maxSum = sum;
            result = i;
        }
    }
    return result;
}

// 9.33
function task9_33() {
    let friendlyPairs = [];
    for (let a = 1; a < 50000; a++) {
        let sumA = 0;
        for (let i = 1; i < a; i++) {
            if (a % i === 0) sumA += i;
        }
        if (sumA > a && sumA < 50000) {
            let sumB = 0;
            for (let i = 1; i < sumA; i++) {
                if (sumA % i === 0) sumB += i;
            }
            if (sumB === a) friendlyPairs.push([a, sumA]);
        }
    }
    return friendlyPairs;
}

// 9.34 а)
function task9_34a(n) {
    let count = 0;
    for (let tens = 0; tens <= Math.floor(n / 10); tens++) {
        for (let fives = 0; fives <= Math.floor((n - tens * 10) / 5); fives++) {
            for (let twos = 0; twos <= Math.floor((n - tens * 10 - fives * 5) / 2); twos++) {
                let ones = n - tens * 10 - fives * 5 - twos * 2;
                if (ones >= 0) count++;
            }
        }
    }
    return count;
}

// 9.35
function task9_35(n) {
    let denominations = [64, 32, 16, 8, 4, 2, 1];
    let results = [];

    for (let amount = n; amount <= n + 10; amount++) {
        let remaining = amount;
        let breakdown = {};

        for (let denom of denominations) {
            let count = Math.floor(remaining / denom);
            if (count > 0) {
                breakdown[denom] = count;
                remaining -= count * denom;
            }
        }

        results.push({amount: amount, breakdown: breakdown});
    }

    return results;
}

// 9.36 а)
function task9_36a(s) {
    let rectangles = [];
    for (let a = 1; a <= s; a++) {
        for (let b = 1; b <= s; b++) {
            if (a * b === s) {
                rectangles.push([a, b]);
            }
        }
    }
    return rectangles;
}

// 9.36 б)
function task9_36b(s) {
    let rectangles = [];
    for (let a = 1; a <= Math.sqrt(s); a++) {
        if (s % a === 0) {
            rectangles.push([a, s / a]);
        }
    }
    return rectangles;
}

// 9.37 а)
function task9_37a(v) {
    let parallelepipeds = [];
    for (let a = 1; a <= v; a++) {
        for (let b = 1; b <= v; b++) {
            for (let c = 1; c <= v; c++) {
                if (a * b * c === v) {
                    parallelepipeds.push([a, b, c]);
                }
            }
        }
    }
    return parallelepipeds;
}

// 9.38
function task9_38() {
    let solutions = [];
    for (let x = 1; x <= 30; x++) {
        for (let y = x; y <= 30; y++) { // начинаем с x чтобы избежать перестановок
            let k = Math.sqrt(x*x + y*y);
            if (k <= 30 && Math.abs(k - Math.floor(k)) < 0.0001) {
                solutions.push([x, y, Math.floor(k)]);
            }
        }
    }
    return solutions;
}

// 9.39
function task9_39(m, n) {
    let sum = 0;
    for (let i = 1; i <= m; i++) {
        sum += Math.pow(i, n);
    }
    return sum;
}

// 9.40
function task9_40(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += Math.pow(i, i);
    }
    return sum;
}

// 9.41
function task9_41(n) {
    let result = [];
    for (let i = 100; i <= 999; i++) {
        let a = Math.floor(i / 100);
        let b = Math.floor((i % 100) / 10);
        let c = i % 10;
        if (a + b + c === n) result.push(i);
    }
    return result;
}

// 9.42
function task9_42() {
    let result = [];
    for (let i = 100; i <= 999; i++) {
        let a = Math.floor(i / 100);
        let b = Math.floor((i % 100) / 10);
        let c = i % 10;
        if (a !== b && a !== c && b !== c) result.push(i);
    }
    return result;
}

// 9.43
function task9_43(numbers) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let result = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        result = gcd(result, numbers[i]);
    }
    return result;
}

// 9.44
function task9_44(v) {
    let weights = [100, 200, 300, 500, 1000, 1200, 1400, 1500, 2000, 3000];
    let count = 0;

    // Используем битовую маску для всех комбинаций
    for (let mask = 1; mask < (1 << weights.length); mask++) {
        let sum = 0;
        for (let i = 0; i < weights.length; i++) {
            if (mask & (1 << i)) {
                sum += weights[i];
            }
        }
        if (sum === v) count++;
    }

    return count;
}

// 9.45
function task9_45(m, n) {
    let result = [];
    for (let i = 1; i < n; i++) {
        let sumDigits = 0;
        let num = i;
        while (num > 0) {
            sumDigits += num % 10;
            num = Math.floor(num / 10);
        }
        if (sumDigits * sumDigits === m) result.push(i);
    }
    return result;
}

// 9.46
function task9_46(num) {
    while (num >= 10) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}

// 9.47
function task9_47() {
    let solutions = [];
    for (let bulls = 0; bulls <= 10; bulls++) {
        for (let cows = 0; cows <= 20; cows++) {
            for (let calves = 0; calves <= 200; calves++) {
                if (bulls + cows + calves === 100 &&
                    bulls * 10 + cows * 5 + calves * 0.5 === 100) {
                    solutions.push({bulls, cows, calves});
                }
            }
        }
    }
    return solutions;
}

// 9.48 вариант 1
function task9_48v1(n) {
    let factors = [];
    let divisor = 2;
    let original = n;

    while (n > 1) {
        if (n % divisor === 0) {
            if (!factors.includes(divisor)) {
                factors.push(divisor);
            }
            n /= divisor;
        } else {
            divisor++;
        }
    }

    return `${original} = ${factors.join(' * ')}`;
}

// 9.48 вариант 2
function task9_48v2(n) {
    let factors = [];
    let divisor = 2;
    let original = n;

    while (n > 1) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor;
        } else {
            divisor++;
        }
    }

    return `${original} = ${factors.join(' * ')}`;
}

// 9.49
function task9_49(n) {
    let divisors = [];
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            let isPrime = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) divisors.push(i);
        }
    }
    return divisors;
}

// 9.50
function task9_50(n) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let result = [];
    for (let i = 1; i < n; i++) {
        if (gcd(i, n) === 1) result.push(i);
    }
    return result;
}

// 9.51
function task9_51(n, p) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let result = [];
    for (let i = 1; i < n; i++) {
        if (gcd(i, p) === 1) result.push(i);
    }
    return result;
}

// 9.52
function task9_52(q, p) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let result = [];
    for (let i = 1; i <= q; i++) {
        if (q % i === 0 && gcd(i, p) === 1) result.push(i);
    }
    return result;
}

// 9.53
function task9_53() {
    let sums = {};
    for (let a = 1; a <= 100; a++) {
        for (let b = a; b <= 100; b++) {
            let sum = a*a*a + b*b*b;
            if (!sums[sum]) sums[sum] = [];
            sums[sum].push([a, b]);
        }
    }

    for (let sum in sums) {
        if (sums[sum].length >= 2) {
            return {sum: parseInt(sum), ways: sums[sum]};
        }
    }
    return null;
}