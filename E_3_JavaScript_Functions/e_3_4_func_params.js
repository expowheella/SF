/**
function getSum(a, b) {
    console.log(a + b)
    console.log(arguments)
    console.log(arguments[2])
    
}

getSum(1,2);
getSum(5,5);
getSum(1);
getSum();
getSum(1,2,8);


function getSomething(a,b) {
    return a + b
}

console.log(`this is the return of getSomething: ${getSomething(4,5)}`)
 */

/** Задание 2
 * Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
 * определяет, является ли оно простым, и выводит простое число или нет. 
 * Если введено больше 1 000, то выводится сообщение, что данные неверны. 
 * Обратите внимание на числа 0 и 1.

Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы. */

/**
 * простое число - делится без остатка: на 1 или на саму себя
 * в остальных случаях, при делении оно дает остаток.
 * поэтому, можно выполнить проверику с деления на числа от 2 до n, где n < 1000. 
 * если будет остаток, значит число составное. 
 * будем считать, что по умолчанию на вход приходит просто число, 
 * далее проводится проверка, описанная выше, и статус числа меняется или остается.
 */

function simpleDigit(number) {
    let status, result
    status = true
    
    if (number > 1 && number < 1000) {
        for (let i = 2; i < number; i++) {
            result = number % i;
                  
            if (result === 0) {
                status = false                
            } 
        } 
      result = status ? `Число ${number} - простое число` : `Число ${number} - составное число`;
      console.log(result)
      
    } else {
        console.log('Данные неверны. Число должно быть больше 1 меньше 1000')
    }

}

simpleDigit(18)
simpleDigit(0)
simpleDigit(1000)
simpleDigit(1)


