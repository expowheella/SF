let firstName= 'Ivan';
let lastName = 'Ivanov';

function getFullName(strings, firstNameExp, lastNameExp) {
    let str0 = strings[0];// "My  first name is " 
    let str1 = strings[1]; // " and the last " 

    return `${str0}${firstNameExp}${str1}${lastNameExp}`;
}

// контатенация оператором экранирования ` 
let result = 
    getFullName`My first name is ${ firstName} and the last ${ lastName }`;
    
console.log(result);


let str = 'Hello World'
slce0 = str.slice(0, 5)
slce1 = str.slice(6, )
console.log(slce0,'\n', slce1);


// Задание 3
/* Чтобы написать строку задом на перед
нужно сначала её разделить на массив из символом,
затем применить функцию reverse к данному массиву,
затем снова собрать из массива симпволов строку без разделителя */

let str1 = "Hello"

array = str1.split("")
array = array.reverse()
array = array.join("")
console.log(array)


// Задание 4
/* Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math. */
function getRandomArbitrary(min, max) {
    let r = Math.random() * (max - min) + min;
    r = Math.floor(r)
    return r
}

let randomNumber = getRandomArbitrary(0, 100)
console.log(randomNumber)
