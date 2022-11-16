// Стрелочные функции

// Привычный вид функции
function myFunc(a, b) {
    console.log("myFunc", a ** 2, b ** 2);
}
myFunc(2, 3);

// Стрелочная функция
const myFunc2 = (a, b) => {
    console.log("myFunc2", a ** 2, b ** 2);
}
myFunc2(2, 3);

// однострочное представление
const myFunc3 = a => console.log("myFunc3", a * 3);
myFunc3(2);

// функция без аргумента
const myFunc4 = () => console.log("myFunc4", "Hello World");
myFunc4();

const myFunc5 = (a, b) => console.log("myFunc5", a + b);
myFunc5(2, 5);

const myFunc6 = (a, b) => {
    console.log("myFunc6", a);
    console.log("myFunc6", b);
}
myFunc6(3, 5);

// Задание 5
/** Напишите функцию, которая принимает два натуральных числа
 * x и n и возвращает x в степени n. Иначе говоря, 
 * умножает x на себя n раз и возвращает результат.
 * Используйте Arrow Function синтаксис.
 * Протестируйте функцию на любых значениях
 * и выведите результат в консоль. */
console.log('Задание 5')

const taskFiveFunc = (x, n) => {return (x**n)}
console.log(taskFiveFunc(5, 2))
console.log(taskFiveFunc(3, 3))