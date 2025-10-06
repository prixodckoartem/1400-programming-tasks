// 3.1
const cm = 254;
const meters = Math.floor(cm / 100);

// 3.2
const kg = 850;
const centners = Math.floor(kg / 100);

// 3.3
const days = 234;
const weeks = Math.floor(days / 7);

// 3.4
const N = 7;
const k = 23;
const applesPerStudent = Math.floor(k / N);
const applesLeft = k % N;

// 3.5
const rectangleWidth = 543;
const rectangleHeight = 130;
const squareSide = 130;
const squaresCount = Math.floor(rectangleWidth / squareSide);

// 3.6
const placeNumber = 25;
const compartmentNumber = Math.ceil(placeNumber / 4);

// 3.7
const apartmentNumber = 11;
const apartmentsPerFloor = 3;
const floorNumber = Math.ceil(apartmentNumber / apartmentsPerFloor);

// 3.8
const ticketNumber = 170;
const seatsPerRow = 15;
const rowNumber = Math.ceil(ticketNumber / seatsPerRow);

// 3.9 а
const n = 12345;
const hours = Math.floor(n / 3600);

// 3.9 б
const minutes = Math.floor((n % 3600) / 60);

// 3.9 в
const seconds = n % 60;

// 3.10 а
const kDay = 15;
let nValue = (kDay - 1) % 7;

// 3.10 б
nValue = (kDay - 2) % 7;
if (nValue < 0) nValue += 7;

// 3.10 в
const d = 3;
nValue = (kDay - d) % 7;
if (nValue < 0) nValue += 7;

// 3.11
const nMonths = 5;
const x = (nMonths % 12) + 1;

// 3.12.1
const apartmentNumber2 = 17;
const apartmentsPerFloor2 = 4;
const floorNumber2 = Math.ceil(apartmentNumber2 / apartmentsPerFloor2);

// 3.12.2
const apartmentOrder = ((apartmentNumber2 - 1) % apartmentsPerFloor2) + 1;

// 3.13.1
const nValue2 = 23;
const columns = 5;
const rowNumber2 = Math.ceil(nValue2 / columns);

// 3.13.2
const columnNumber = ((nValue2 - 1) % columns) + 1;

// 3.14.1
const apartmentNumber3 = 145;
const apartmentsPerFloor3 = 6;
const floors = 9;
const apartmentsPerEntrance = floors * apartmentsPerFloor3;
const entranceNumber = Math.ceil(apartmentNumber3 / apartmentsPerEntrance);

// 3.14.2
const apartmentInEntrance = ((apartmentNumber3 - 1) % apartmentsPerEntrance) + 1;
const floorNumber3 = Math.ceil(apartmentInEntrance / apartmentsPerFloor3);

// 3.14.3
const apartmentOrder3 = ((apartmentInEntrance - 1) % apartmentsPerFloor3) + 1;

// 3.15.1
const placeNumber2 = 358;
const placesPerShelf = 15;
const sections = 8;
const shelves = 10;
const sectionNumber = Math.ceil(placeNumber2 / (placesPerShelf * shelves));
const placeInSection = ((placeNumber2 - 1) % (placesPerShelf * shelves)) + 1;
const shelfNumber = Math.ceil(placeInSection / placesPerShelf);

// 3.15.2 Вариант
const placeNumber3 = 25;
const sectionNumber2 = ((placeNumber3 - 1) % sections) + 1;
const shelfNumber2 = Math.ceil(placeNumber3 / sections);

// 3.16 а
const twoDigitNumber = 57;
const tens = Math.floor(twoDigitNumber / 10);

// 3.16 б
const units = twoDigitNumber % 10;

// 3.17
const inputTwoDigit = 48;
const sumDigits = Math.floor(inputTwoDigit / 10) + (inputTwoDigit % 10);

// 3.18
const reversedTwoDigit = (twoDigitNumber % 10) * 10 + Math.floor(twoDigitNumber / 10);

// 3.19
const threeDigitNumber = 456;
const digit1 = Math.floor(threeDigitNumber / 100);
const digit2 = Math.floor((threeDigitNumber % 100) / 10);
const digit3 = threeDigitNumber % 10;

// 3.20 а
const unitsThree = threeDigitNumber % 10;

// 3.20 б
const tensThree = Math.floor((threeDigitNumber % 100) / 10);

// 3.20 в
const sumThreeDigits = digit1 + digit2 + digit3;

// 3.20 г
const productThreeDigits = digit1 * digit2 * digit3;

// 3.21
const reversedThreeDigit = digit3 * 100 + digit2 * 10 + digit1;

// 3.22
const movedFirst = (threeDigitNumber % 100) * 10 + digit1;

// 3.23
const movedLast = digit3 * 100 + Math.floor(threeDigitNumber / 10);

// 3.24
const swappedFirstSecond = digit2 * 100 + digit1 * 10 + digit3;

// 3.25
const swappedSecondThird = digit1 * 100 + digit3 * 10 + digit2;

// 3.26
const numABC = 123;
const a = Math.floor(numABC / 100);
const b = Math.floor((numABC % 100) / 10);
const c = numABC % 10;
const permutations = [
    a * 100 + b * 10 + c,
    a * 100 + c * 10 + b,
    b * 100 + a * 10 + c,
    b * 100 + c * 10 + a,
    c * 100 + a * 10 + b,
    c * 100 + b * 10 + a
];

// 3.27 а
const fourDigitNumber = 1234;
const sumFourDigits = Math.floor(fourDigitNumber / 1000) +
    Math.floor((fourDigitNumber % 1000) / 100) +
    Math.floor((fourDigitNumber % 100) / 10) +
    fourDigitNumber % 10;

// 3.27 б
const fiveDigitNumber = 12345;
const sumFiveDigits = Math.floor(fiveDigitNumber / 10000) +
    Math.floor((fiveDigitNumber % 10000) / 1000) +
    Math.floor((fiveDigitNumber % 1000) / 100) +
    Math.floor((fiveDigitNumber % 100) / 10) +
    fiveDigitNumber % 10;

// 3.28 а
const reversedFourDigit = (fourDigitNumber % 10) * 1000 +
    Math.floor((fourDigitNumber % 100) / 10) * 100 +
    Math.floor((fourDigitNumber % 1000) / 100) * 10 +
    Math.floor(fourDigitNumber / 1000);

// 3.28 б Способ 1
const swappedPairs1 = Math.floor((fourDigitNumber % 100) / 10) * 1000 +
    Math.floor(fourDigitNumber / 1000) * 100 +
    (fourDigitNumber % 10) * 10 +
    Math.floor((fourDigitNumber % 1000) / 100);

// 3.28 в
const swappedMiddle = Math.floor(fourDigitNumber / 1000) * 1000 +
    Math.floor((fourDigitNumber % 100) / 10) * 100 +
    Math.floor((fourDigitNumber % 1000) / 100) * 10 +
    fourDigitNumber % 10;

// 3.28 г Способ 1
const swappedGroups1 = Math.floor((fourDigitNumber % 100) / 10) * 1000 +
    (fourDigitNumber % 10) * 100 +
    Math.floor(fourDigitNumber / 1000) * 10 +
    Math.floor((fourDigitNumber % 1000) / 100);

// 3.28 г Способ 2
const swappedGroups2 = (fourDigitNumber % 100) * 100 + Math.floor(fourDigitNumber / 100);

// 3.29 а
const naturalNumber = 123;
const unitsNatural = naturalNumber % 10;

// 3.29 б
const tensNatural = Math.floor(naturalNumber / 10) % 10;

// 3.30 а
const numberOver99 = 456;
const tensOver99 = Math.floor(numberOver99 / 10) % 10;

// 3.30 б
const hundredsOver99 = Math.floor(numberOver99 / 100);

// 3.31 а
const numberOver999 = 1234;
const hundredsOver999 = Math.floor(numberOver999 / 100) % 10;

// 3.31 б
const thousandsOver999 = Math.floor(numberOver999 / 1000);

// 3.32
const x = 237;
const lastDigit = x % 10;
const result = Math.floor(x / 10);
const originalNumber = lastDigit * 100 + result;

// 3.33
const n = 456;
const lastDigitN = n % 10;
const resultN = Math.floor(n / 10);
const originalNumberN = lastDigitN * 100 + resultN;

// 3.34
const firstDigit = Math.floor(564 / 100);
const remaining = Math.floor(564 % 100);
const originalNumber2 = firstDigit * 100 + Math.floor(remaining / 10);

// 3.35
const n2 = 789;
const firstDigit2 = Math.floor(n2 / 100);
const remaining2 = Math.floor(n2 % 100);
const originalNumber3 = firstDigit2 * 100 + Math.floor(remaining2 / 10);

// 3.36
const secondDigit = Math.floor(546 / 100);
const remaining3 = Math.floor(546 % 100);
const originalNumber4 = Math.floor(remaining3 / 10) * 100 + secondDigit * 10 + (remaining3 % 10);

// 3.37
const n3 = 738;
const secondDigit2 = Math.floor(n3 / 100);
const remaining4 = Math.floor(n3 % 100);
const originalNumber5 = Math.floor(remaining4 / 10) * 100 + secondDigit2 * 10 + (remaining4 % 10);

// 3.38
const lastTwoDigits = 456 % 100;
const firstDigit3 = Math.floor(456 / 100);
const originalNumber6 = Math.floor(lastTwoDigits / 10) * 100 + firstDigit3 * 10 + (lastTwoDigits % 10);

// 3.39
const n4 = 567;
const lastTwoDigits2 = n4 % 100;
const firstDigit4 = Math.floor(n4 / 100);
const originalNumber7 = Math.floor(lastTwoDigits2 / 10) * 100 + firstDigit4 * 10 + (lastTwoDigits2 % 10);

// 3.40
const firstDigit5 = Math.floor(654 / 100);
const middleDigit = Math.floor((654 % 100) / 10);
const lastDigit5 = 654 % 10;
const originalNumber8 = lastDigit5 * 100 + middleDigit * 10 + firstDigit5;

// 3.41
const n5 = 987;
const firstDigit6 = Math.floor(n5 / 100);
const middleDigit2 = Math.floor((n5 % 100) / 10);
const lastDigit6 = n5 % 10;
const originalNumber9 = lastDigit6 * 100 + middleDigit2 * 10 + firstDigit6;

// 3.42
const a2 = 5;
const a1 = 7;
const b = 8;
const sumResult = a1 + b;
const resultUnits = sumResult % 10;
const resultTens = a2 + Math.floor(sumResult / 10);

// 3.43
const a22 = 3;
const a12 = 4;
const b2 = 2;
const b1 = 9;
const sumResult2 = a12 + b1;
const resultUnits2 = sumResult2 % 10;
const resultTens2 = a22 + b2 + Math.floor(sumResult2 / 10);

// 3.44
const a3 = 2;
const a23 = 3;
const a13 = 4;
const b22 = 1;
const b12 = 5;
const sumResult3 = a13 + b12;
const resultUnits3 = sumResult3 % 10;
const carry = Math.floor(sumResult3 / 10);
const sumResult4 = a23 + b22 + carry;
const resultTens3 = sumResult4 % 10;
const resultHundreds = a3 + Math.floor(sumResult4 / 10);

// 3.45 а
const k = 25;
const pairNumber = Math.ceil(k / 2);

// 3.45 б
const twoDigitFromSequence = 10 + pairNumber - 1;

// 3.45 в
let kthDigit;
if (k % 2 === 1) {
    kthDigit = Math.floor(twoDigitFromSequence / 10);
} else {
    kthDigit = twoDigitFromSequence % 10;
}

// 3.46
const k2 = 20;
const tripleNumber = Math.ceil(k2 / 3);
const threeDigitFromSequence = 100 + tripleNumber;
if (k2 % 3 === 0) {
    kthDigit = threeDigitFromSequence % 10;
} else if (k2 % 3 === 1) {
    kthDigit = Math.floor(threeDigitFromSequence / 100);
} else {
    kthDigit = Math.floor((threeDigitFromSequence % 100) / 10);
}

// 3.47
const h = 14;
const m = 30;
const s2 = 45;
const totalSeconds = h * 3600 + m * 60 + s2;
const angle = (totalSeconds % 43200) * 0.00833333333;

// 3.48
const y = 90.5;
const totalMinutesFromAngle = y * 2;
const hoursFromAngle = Math.floor(totalMinutesFromAngle / 60);
const minutesFromAngle = Math.floor(totalMinutesFromAngle % 60);

// 3.49
const yRad = 1.5;
const minuteAngle = (yRad * 12) % (2 * Math.PI);
const hoursFromRad = Math.floor(yRad / (Math.PI / 6));
const minutesFromRad = Math.floor((yRad % (Math.PI / 6)) * 114.591559);

// 3.50 а
const h2 = 3;
const m2 = 15;
const timeInMinutes = h2 * 60 + m2;
const minuteHand = timeInMinutes % 60;
const hourHand = (timeInMinutes / 12) % 60;
const timeToCoincide = (360 - Math.abs(minuteHand - hourHand) * 6) / 5.5;

// 3.50 б
const timeToPerpendicular = (90 - Math.abs(minuteHand - hourHand) * 6) / 5.5;

// 3.51
const aNum = 12;
const bNum = 4;
const result51 = (aNum % bNum === 0) || (bNum % aNum === 0) ? 1 : 0;