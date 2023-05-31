"use strict"
// --- 1. Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const priceGrivna = 40

for (let i = 10; i <= 100; i += 10) {
    console.log(priceGrivna * i)
}

// --- 2. Дано ціле число. З'ясувати, чи є воно простим (простим називається число, більше ніж 1, яке не має інших дільників, крім 1 і себе).

const numUser = parseInt(prompt("Enter an integer to find out if it is prime:"))

if (!numUser) {
    alert(`Invalid number`)
} else {
    let isPrime = null
    if (numUser <= 1) isPrime = "not is prime"
    if (numUser === 2) isPrime = "is prime"
    for (let i = 2; i < numUser; i++) {
        if (numUser % i === 0) {
            isPrime = "not is prime"
            break
        }
        isPrime = "is prime"
    }
    alert(`Your number ${isPrime}`)
}

// --- 3. Дано ціле число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)

let userNumber = parseInt(prompt("Введіть ціле число для визначення:"))

if (!userNumber) {
    alert(`Invalid number`)
} else {
    while (userNumber % 3 == 0) {
        userNumber /= 3
    }
    const result =
        userNumber === 1
            ? "Можна одержати це число шляхом зведення числа 3 в деякий ступінь"
            : "Неможна одержати це число шляхом зведення числа 3 в деякий ступінь"
    alert(result)
}
