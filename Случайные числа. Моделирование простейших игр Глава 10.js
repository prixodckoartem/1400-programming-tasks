// 10.1 а)
function task10_1a() {
    let result = [];
    for (let i = 0; i < 8; i++) {
        result.push(Math.random());
    }
    return result;
}

// 10.1 б)
function task10_1b(k) {
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(Math.random());
    }
    return result;
}

// 10.1 в)
function task10_1c() {
    let result = [];
    for (let i = 0; i < 15; i++) {
        result.push(25 + Math.random());
    }
    return result;
}

// 10.1 г)
function task10_1d() {
    let result = [];
    for (let i = 0; i < 20; i++) {
        result.push(Math.random() * 15);
    }
    return result;
}

// 10.1 д)
function task10_1e(a, b) {
    let k = Math.floor(Math.random() * a) + 1;
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(Math.random() * b);
    }
    return result;
}

// 10.1 е)
function task10_1f() {
    let result = [];
    for (let i = 0; i < 10; i++) {
        result.push(Math.random() * 80 - 40);
    }
    return result;
}

// 10.1 ж)
function task10_1g(m, a, b) {
    let k = Math.floor(Math.random() * m) + 1;
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(a + Math.random() * (b - a));
    }
    return result;
}

// 10.2 а)
function task10_2a() {
    let result = [];
    for (let i = 0; i < 10; i++) {
        result.push(Math.floor(Math.random() * 11));
    }
    return result;
}

// 10.2 б)
function task10_2b(k, a) {
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(Math.floor(Math.random() * (a + 1)));
    }
    return result;
}

// 10.2 в)
function task10_2c() {
    let result = [];
    for (let i = 0; i < 20; i++) {
        result.push(Math.floor(Math.random() * 11) + 10);
    }
    return result;
}

// 10.2 г)
function task10_2d(k, a) {
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(Math.floor(Math.random() * (a + 11)) - 10);
    }
    return result;
}

// 10.2 д)
function task10_2e(a, b) {
    let k = Math.floor(Math.random() * 15) + 1;
    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(Math.floor(Math.random() * (b - a + 1)) + a);
    }
    return result;
}

// 10.3
function task10_3(a, b) {
    let m = Math.floor(Math.random() * 20) + 1;
    let n = Math.floor(Math.random() * 20) + 1;

    let integers = [];
    for (let i = 0; i < n; i++) {
        integers.push(Math.floor(Math.random() * (b - a + 1)) + a);
    }

    let reals = [];
    for (let i = 0; i < m; i++) {
        reals.push(Math.random() * n);
    }

    return {m, n, integers, reals};
}

// 10.4
function task10_4() {
    let result = [];
    for (let i = 0; i < 50; i++) {
        let num = Math.floor(Math.random() * 4);
        if (num === 0 || num === 1) {
            result.push(num);
        }
    }
    return result;
}

// 10.5
function task10_5() {
    let result = [];
    for (let i = 0; i < 30; i++) {
        let num = Math.floor(Math.random() * 6);
        if (num % 2 !== 0) {
            result.push(num);
        }
    }
    return result;
}

// 10.6
function task10_6() {
    let zeros = 0;
    let ones = 0;
    for (let i = 0; i < 50; i++) {
        let num = Math.floor(Math.random() * 2);
        if (num === 0) zeros++;
        else ones++;
    }
    return {zeros, ones};
}

// 10.7 а)
function task10_7a() {
    let a, b;
    do {
        a = Math.floor(Math.random() * 2);
        b = Math.floor(Math.random() * 3);
    } while (a === b);
    return {a, b};
}

// 10.7 б)
function task10_7b() {
    let a, b, c;
    do {
        a = Math.floor(Math.random() * 2) + 1;
        b = Math.floor(Math.random() * 3);
        c = Math.floor(Math.random() * 3) + 1;
    } while (a === b || a === c || b === c);
    return {a, b, c};
}

// 10.7 в)
function task10_7c() {
    let result = [];
    for (let i = 0; i < 7; i++) {
        result.push(2);
    }
    for (let i = 0; i < 8; i++) {
        result.push(3);
    }
    for (let i = result.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

// 10.8
function task10_8() {
    return Math.floor(Math.random() * 2);
}

// 10.9
function task10_9(n) {
    let heads = 0;
    let tails = 0;

    for (let i = 0; i < n; i++) {
        if (Math.floor(Math.random() * 2) === 0) {
            heads++;
        } else {
            tails++;
        }
    }

    return {
        heads: heads / n,
        tails: tails / n
    };
}

// 10.10 а)
function task10_10a() {
    let userChoice = prompt("Чет (введите 2) или нечет (введите 1)?");
    let computerChoice = Math.floor(Math.random() * 2) + 1;

    if (parseInt(userChoice) === computerChoice) {
        return "Вы угадали!";
    } else {
        return `Вы не угадали. Компьютер выбрал ${computerChoice === 2 ? "четное" : "нечетное"}`;
    }
}

// 10.10 б)
function task10_10b(n) {
    let userWins = 0;
    let computerWins = 0;

    for (let i = 0; i < n; i++) {
        let userChoice = Math.floor(Math.random() * 2) + 1;
        let computerChoice = Math.floor(Math.random() * 2) + 1;

        if (userChoice === computerChoice) {
            userWins++;
        } else {
            computerWins++;
        }
    }

    if (userWins > computerWins) {
        return `Счет ${userWins}:${computerWins} в вашу пользу. Вы выиграли!`;
    } else {
        return `Счет ${userWins}:${computerWins} в пользу компьютера. Вы проиграли!`;
    }
}

// 10.11
function task10_11() {
    return Math.floor(Math.random() * 6) + 1;
}

// 10.12
function task10_12() {
    let player1 = Math.floor(Math.random() * 6) + 1;
    let player2 = Math.floor(Math.random() * 6) + 1;

    if (player1 > player2) {
        return `Игрок 1 выиграл (${player1} > ${player2})`;
    } else if (player2 > player1) {
        return `Игрок 2 выиграл (${player2} > ${player1})`;
    } else {
        return `Ничья (${player1} = ${player2})`;
    }
}

// 10.13 вариант 1
function task10_13v1() {
    let player1Score = 0;
    let player2Score = 0;

    for (let i = 0; i < 2; i++) {
        player1Score += Math.floor(Math.random() * 6) + 1;
        player2Score += Math.floor(Math.random() * 6) + 1;
    }

    if (player1Score > player2Score) {
        return `Игрок 1 выиграл (${player1Score} > ${player2Score})`;
    } else if (player2Score > player1Score) {
        return `Игрок 2 выиграл (${player2Score} > ${player1Score})`;
    } else {
        return `Ничья (${player1Score} = ${player2Score})`;
    }
}

// 10.13 вариант 2
function task10_13v2(games) {
    let player1Wins = 0;
    let player2Wins = 0;
    let draws = 0;

    for (let i = 0; i < games; i++) {
        let player1 = Math.floor(Math.random() * 6) + 1;
        let player2 = Math.floor(Math.random() * 6) + 1;

        if (player1 > player2) {
            player1Wins++;
        } else if (player2 > player1) {
            player2Wins++;
        } else {
            draws++;
        }
    }

    return {
        player1Wins,
        player2Wins,
        draws
    };
}

// 10.14
function task10_14(K) {
    let scores = [0, 0, 0];

    for (let player = 0; player < 3; player++) {
        for (let i = 0; i < K; i++) {
            scores[player] += Math.floor(Math.random() * 6) + 1;
        }
    }

    let maxScore = Math.max(...scores);
    let winners = [];
    for (let i = 0; i < 3; i++) {
        if (scores[i] === maxScore) {
            winners.push(i + 1);
        }
    }

    return {
        scores,
        winners: winners.length > 1 ? `Ничья между игроками ${winners.join(' и ')}` : `Победил игрок ${winners[0]}`
    };
}

// 10.15
function task10_15(n) {
    let frequencies = [0, 0, 0, 0, 0, 0];

    for (let i = 0; i < n; i++) {
        let roll = Math.floor(Math.random() * 6);
        frequencies[roll]++;
    }

    for (let i = 0; i < 6; i++) {
        frequencies[i] /= n;
    }

    return frequencies;
}

// 10.16
function task10_16() {
    let suits = ['пик', 'треф', 'бубен', 'червей'];
    let values = ['6', '7', '8', '9', '10', 'валет', 'дама', 'король', 'туз'];

    let suitIndex = Math.floor(Math.random() * 4);
    let valueIndex = Math.floor(Math.random() * 9);

    return `Выбрана ${values[valueIndex]} ${suits[suitIndex]}`;
}

// 10.17
function task10_17() {
    let domino1 = Math.floor(Math.random() * 28);
    let domino2;
    do {
        domino2 = Math.floor(Math.random() * 28);
    } while (domino2 === domino1);

    let getNumbers = (index) => {
        if (index < 7) return [0, index + 1];
        if (index < 13) return [1, index - 6];
        if (index < 18) return [2, index - 12];
        if (index < 22) return [3, index - 17];
        if (index < 25) return [4, index - 21];
        if (index < 27) return [5, index - 24];
        return [6, 6];
    };

    let [a1, b1] = getNumbers(domino1);
    let [a2, b2] = getNumbers(domino2);

    let canConnect = a1 === a2 || a1 === b2 || b1 === a2 || b1 === b2;

    return {
        domino1: `${a1}-${b1}`,
        domino2: `${a2}-${b2}`,
        canConnect
    };
}

// 10.18 а)
function task10_18a() {
    let a = Math.floor(Math.random() * 9) + 1;
    let b = Math.floor(Math.random() * 9) + 1;
    let answer = prompt(`Чему равно произведение ${a}×${b}?`);

    if (parseInt(answer) === a * b) {
        return "Правильно!";
    } else {
        return `Неправильно. Правильный ответ: ${a * b}`;
    }
}

// 10.18 б)
function task10_18b() {
    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < 20; i++) {
        let a = Math.floor(Math.random() * 9) + 1;
        let b = Math.floor(Math.random() * 9) + 1;
        let answer = Math.floor(Math.random() * 82); // упрощение для демонстрации

        if (answer === a * b) {
            correct++;
        } else {
            incorrect++;
        }
    }

    return {correct, incorrect};
}

// 10.19
function task10_19() {
    let values = ['6', '7', '8', '9', '10', 'валет', 'дама', 'король', 'туз'];
    let index = Math.floor(Math.random() * 9);
    return values[index];
}

// 10.20
function task10_20() {
    let suits = ['пик', 'треф', 'бубен', 'червей'];
    let values = ['шестерка', 'семерка', 'восьмерка', 'девятка', 'десятка', 'валет', 'дама', 'король', 'туз'];

    let suitIndex = Math.floor(Math.random() * 4);
    let valueIndex = Math.floor(Math.random() * 9);

    return `Выбрана ${values[valueIndex]} ${suits[suitIndex]}`;
}

// 10.21
function task10_21() {
    let suits = ['пик', 'треф', 'бубен', 'червей'];
    let values = ['шестерка', 'семерка', 'восьмерка', 'девятка', 'десятка', 'валет', 'дама', 'король', 'туз'];

    let suit1 = Math.floor(Math.random() * 4);
    let value1 = Math.floor(Math.random() * 9);

    let suit2, value2;
    do {
        suit2 = Math.floor(Math.random() * 4);
        value2 = Math.floor(Math.random() * 9);
    } while (suit1 === suit2 && value1 === value2);

    let score1 = suit1 * 100 + value1;
    let score2 = suit2 * 100 + value2;

    if (score1 > score2) {
        return `Игрок 1 выиграл: ${values[value1]} ${suits[suit1]} старше ${values[value2]} ${suits[suit2]}`;
    } else {
        return `Игрок 2 выиграл: ${values[value2]} ${suits[suit2]} старше ${values[value1]} ${suits[suit1]}`;
    }
}

// 10.22
function task10_22(games) {
    let player1Wins = 0;
    let player2Wins = 0;

    for (let i = 0; i < games; i++) {
        let suit1 = Math.floor(Math.random() * 4);
        let value1 = Math.floor(Math.random() * 9);
        let suit2 = Math.floor(Math.random() * 4);
        let value2 = Math.floor(Math.random() * 9);

        let score1 = suit1 * 100 + value1;
        let score2 = suit2 * 100 + value2;

        if (score1 > score2) {
            player1Wins++;
        } else if (score2 > score1) {
            player2Wins++;
        }
    }

    return {player1Wins, player2Wins};
}

// 10.23
function task10_23() {
    let suits = ['пик', 'треф', 'бубен', 'червей'];
    let values = ['шестерка', 'семерка', 'восьмерка', 'девятка', 'десятка', 'валет', 'дама', 'король', 'туз'];

    let trumpSuit = Math.floor(Math.random() * 4);
    let suit = Math.floor(Math.random() * 4);
    let value = Math.floor(Math.random() * 9);

    let isTrump = suit === trumpSuit;

    return {
        card: `${values[value]} ${suits[suit]}`,
        trump: `Козырная масть: ${suits[trumpSuit]}`,
        isTrump
    };
}

// 10.24 а)
function task10_24a() {
    let a, b, c, d;
    do {
        a = Math.floor(Math.random() * 8) + 1;
        b = Math.floor(Math.random() * 8) + 1;
        c = Math.floor(Math.random() * 8) + 1;
        d = Math.floor(Math.random() * 8) + 1;
    } while (a === c || b === d);

    return {a, b, c, d};
}

// 10.24 б)
function task10_24b() {
    let a, b, c, d;
    do {
        a = Math.floor(Math.random() * 8) + 1;
        b = Math.floor(Math.random() * 8) + 1;
        c = Math.floor(Math.random() * 8) + 1;
        d = Math.floor(Math.random() * 8) + 1;
    } while (Math.abs(a - c) === Math.abs(b - d));

    return {a, b, c, d};
}

// 10.24 в)
function task10_24c() {
    let a, b, c, d;
    do {
        a = Math.floor(Math.random() * 8) + 1;
        b = Math.floor(Math.random() * 8) + 1;
        c = Math.floor(Math.random() * 8) + 1;
        d = Math.floor(Math.random() * 8) + 1;
    } while (Math.abs(a - c) > 1 || Math.abs(b - d) > 1);

    return {a, b, c, d};
}

// 10.24 г)
function task10_24d() {
    let a, b, c, d;
    do {
        a = Math.floor(Math.random() * 8) + 1;
        b = Math.floor(Math.random() * 8) + 1;
        c = Math.floor(Math.random() * 8) + 1;
        d = Math.floor(Math.random() * 8) + 1;
    } while (a === c || b === d || Math.abs(a - c) === Math.abs(b - d));

    return {a, b, c, d};
}

// 10.25 а) белая пешка
function task10_25a_white() {
    let a, b, c, d;
    do {
        a = Math.floor(Math.random() * 8) + 1;
        b = Math.floor(Math.random() * 7) + 2; // белая пешка не на первой горизонтали
        c = Math.floor(Math.random() * 8) + 1;
        d = b + 1; // обычный ход вперед
    } while (a !== c);

    return {a, b, c, d, type: "обычный ход"};
}

// 10.25 б) черная пешка
function task10_25b_black() {
    let a, b, c, d;
    do {
        a = Math.floor(Math.random() * 8) + 1;
        b = Math.floor(Math.random() * 7) + 1; // черная пешка не на восьмой горизонтали
        c = Math.floor(Math.random() * 8) + 1;
        d = b - 1; // обычный ход вперед (вниз)
    } while (a !== c);

    return {a, b, c, d, type: "обычный ход"};
}

// 10.25 в) конь
function task10_25c() {
    let a, b, c, d;
    do {
        a = Math.floor(Math.random() * 8) + 1;
        b = Math.floor(Math.random() * 8) + 1;
        c = Math.floor(Math.random() * 8) + 1;
        d = Math.floor(Math.random() * 8) + 1;
    } while (!((Math.abs(a - c) === 2 && Math.abs(b - d) === 1) ||
        (Math.abs(a - c) === 1 && Math.abs(b - d) === 2)));

    return {a, b, c, d};
}

// 10.27 а) площадь половины синусоиды
function task10_27a() {
    let points = 1000000;
    let count = 0;

    for (let i = 0; i < points; i++) {
        let x = Math.random() * Math.PI;
        let y = Math.random();

        if (y <= Math.sin(x)) {
            count++;
        }
    }

    let area = (count / points) * Math.PI;
    return area;
}

// 10.27 б) площадь под параболой
function task10_27b() {
    let points = 1000000;
    let count = 0;

    for (let i = 0; i < points; i++) {
        let x = Math.random() * 3;
        let y = Math.random() * 9;

        if (y <= x * x) {
            count++;
        }
    }

    let area = (count / points) * 27;
    return area;
}

// 10.28
function task10_28() {
    let points = 0;
    let count = 0;
    let pi = 0;
    let prevPi = 0;

    do {
        let x = Math.random() * 2 - 1;
        let y = Math.random() * 2 - 1;

        if (x * x + y * y <= 1) {
            count++;
        }
        points++;

        prevPi = pi;
        pi = 4 * count / points;

    } while (Math.abs(pi - prevPi) >= 0.0001 && points < 10000000);

    return {pi, points};
}