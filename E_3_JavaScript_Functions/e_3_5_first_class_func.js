function getSumFunction(a) {
    return function (b) {
        return a + b
    }
}


const sumF = getSumFunction(2)
console.log(sumF(3))

const sumF2 = getSumFunction(3)(3)
console.log(
    sumF2
)


// Замыкание (closure)
/** функция вместе со всеми внешними переменными, 
 * которые ей доступны. */

let x = 1;

function foo() {
    console.log(x);
}

function bar() {
    let x = 2;
    foo();
}

bar() /** вернет 1, потому что foo() объявлена в той области
        * видимости, в которой x = 1 */


function myDecorator(func) {
    function wrapper() {
        console.log("*********");
        func();
        console.log("*********");
    }
    return wrapper;
}

function hello() {
    console.log('Helllloooo');
}

test = myDecorator(hello);
test();


// Anonymus func calling
// option 1
(function () {
    console.log("hello");
})();

// option 2
(function () {
    console.log("hello");
}());


// setTimeout
function sum(a, b) {
    console.log(a + b);
}
// callback function setTimeout
setTimeout(sum, 1000, 1, 2) // setTimeout(sum, timeout_msec, a, b) 


// callback anonimus function setTimeout
setTimeout(function (a, b) {
    console.log(a + b);
}, 2000, 3, 6);


/** setInterval */
const interval = setInterval(function (a, b) {
    console.log("setInterval:", a + b);
}, 2000, 1, 2);

clearInterval(interval);

/** Задание 4 */
/** Напишите функцию, которая принимает два числа. 
 * Каждую секунду необходимо выводить в консоль, 
 * начиная от первого и заканчивая вторым. Используйте setInterval.
 * Например, пользователь ввёл числа 5 и 15. 
 * Каждую секунду в консоль должно печататься число,
 * начиная с 5 и заканчивая 15 
 * (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).
 */

function myFunc(start, finish) {



    const interval = setInterval(function () {
        if (start <= finish) {
            console.log(start);
        } else {
            clearInterval(interval)
        }
        start++
    }, 1000);

}

myFunc(5, 10);
setTimeout(function () { console.log('nex function') }, 7e3);
setTimeout(function () { myFunc(15, 20) }, 8e3);