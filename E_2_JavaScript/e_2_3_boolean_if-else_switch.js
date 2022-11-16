// OR
console.log(1 || 0); // 1

// AND
console.log(1 && 0); // 0

// true || false
console.log(!true); // false
console.log(!0); // true

// if-else
let a;
let b;
if (a == b) {
    console.log('a is equal to b');
} else {
    console.log('a is not equal to b');
}

// switch
a = 0;
b = 0;
const result = a + b;

switch (result) {
    case 0:
        console.log('result is 0');
        break;
    case 1:
        console.log('result is 1');
        break;
    case 2:
        console.log('result is 2');
        break;
    case 3:
        console.log('result is 3');
        break;
    default:
        console.log('result is not equal to the entered digits')
}

// ternarius - тройной (тернарный) оператор
test = "Hello world"
// variable = test is "Hello" ? "YES" : "NOT"
text = test == "Hello" ? "YES!" : "NO!"
console.log(text)
// THE SAME CODE IN NORMAL WAY
if (test == "Hello") {
    console.log("YES!")
} else if (test == "Hello world") {
    console.log("MAYBE")
} else {
    console.log("NO!")
}

// Задание 1
// Напишите программу, которая работала бы следующим образом: 
// в prompt вводится значение. С помощью унарного плюса (арифметический оператор)
// необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
// Если это число, то вывести в консоль чётное оно или нечётное.
// Если передано не число, выведите: «Упс, кажется, вы ошиблись».
// *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.
try {
input = prompt("input here something")
}
catch(err) {

input = ''
input++
console.log(input)
console.log(typeof input)

if (typeof input === "number") {
    if (input % 2 == 0) {
        console.log("Четное")
    } else if (Number.isNaN(input) == true) {
        console.log("Вы ничего не ввели") 
    } else {
        console.log("Нечетное") 
    }
} else {
    console.log("Упс, кажется, вы ошиблись")     
}

}


// Задание 2
//
let x = "true" //prompt("Введите что-нибудь:");
var nan = Number.isNaN(parseInt(x));

console.log(nan);
// nan == true if string or empty

if (nan === false) {
    console.log("Вы ввели число");
} else if (x === "true" | "false") {
    console.log("Вы ввели логическое значение");
} else {
    switch (typeof x) {
        case "string":
            console.log("Вы ввели строку");
            break;
        default:
            console.log("Что-то пошло не так");
            break;
    }
}



