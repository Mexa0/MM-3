// Вам необходимо самостоятельно решить, для какого задания какой цикл лучше использовать: WНІLЕ, DО WНІLЕ или FОR.
// 1. Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.

// function sumInRange(start, end) {
//   let sum = 0;
//   for (let i = start; i <= end; i++) {
//     sum += i;
//   }
//   return sum;
// }

// let num1 = parseInt(prompt("Введите начальное число:"));
// let num2 = parseInt(prompt("Введите конечное число:"));

// let start = Math.min(num1, num2);
// let end = Math.max(num1, num2);

// alert("Сумма всех чисел в диапазоне: " + sumInRange(start, end));
// ---------------------------------------------------- //

// 2. Запросить 2 числа и найти только наибольший общий
// делитель.

// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }

// let num1 = parseInt(prompt("Введите первое число:"));
// let num2 = parseInt(prompt("Введите второе число:"));

// alert("Наибольший общий делитель: " + gcd(num1, num2));
// ---------------------------------------------------- //

// 3. Запросить у пользователя число и вывести все делители
// этого числа.

// ❌ //
// ---------------------------------------------------- //

// 4. Определить количество цифр в введенном числе.

// function countDigits(num) {
//   return Math.abs(num).toString().length;
// }

// let num = prompt("Введите число:");

// if (!isNaN(num) && num.trim() !== "") {
//   alert("Количество цифр: " + countDigits(num));
// } else {
//   alert("Введите корректное число");
// }
// ---------------------------------------------------- //

// 5.  Запросить у пользователя 10 чисел и подсчитать, сколько
// он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран.
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

// ❌ //

// ---------------------------------------------------- //
