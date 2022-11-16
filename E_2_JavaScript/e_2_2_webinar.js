// примитивные типы данных
// null
// undefined
// boolean (true, false)
// string
// number (int, float, -Infinity, Infinity, NaN = Not a Number)

// переменные
var a = 1;
const b = 2;
let c = a + b;
let sum = c

let string1 = '123';
let string2 = "456";
let string3 = `789 ${sum}`;



console.log(a, b, c);
console.log(string1, string2, string3);

// Бинарные операторы - применяются к двум операндам.
// Например, a + b

// Унарные операторы - применяются к одному операнду
// Например, typeof a
console.log(typeof string1);

let variableNaN = 1 + undefined;
console.log(variableNaN)
console.log(typeof variableNaN)

// Тернарные операторы - применяются к трем операндам
