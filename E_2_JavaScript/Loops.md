# Loops e_2_6

<h2>infinity loops</h2>

<h4>FOR</h4>

    for (;;){
        statement
    }

<h4>WHILE</h4>

    while (true) {
        statement
    }


<h4>DO...WHILE</h4>

    do {
        statement
    } while (true)


<h2>for loops </h2>

    for (let i = 0; i < array0.length; i++) {
    console.log("for", array0[i]);
    }


<h2>while</h2>

    let i = 0;
    while (i < array0.length) {
        console.log("while", array0[i]);
        i++;
    }


<h2>do...while</h2>

    i = 0;
    do {
        console.log('do...while', array0[i]);
        i++;
    } while (i < array0.length);


<h2>forEach</h2>

    array0.forEach(function(item, index, array) {
        console.log('forEach', item);
    });


<h2>Задание 6</h2>

Проверить, все ли элементы в массиве одинаковые.

    let array1 = ['Hello', 'world', 'Hello', 'world', 'Hello']
    let array2 = []

 Создаем двухмерный индексирующий механизм.
 Сначала устанавливаем указатель i на первый элемент,
 далее перебираем массив вторым указателем j.
 Если встречается элемент на указателе j равный элементу на указателе i, то счетчик инкрементируется. 
 По умолчанию, счетчик равен нулю. Но так как элемент хотя бы один раз встретится на пути счетчика j, то выражение i === j хотя бы один раз будет справедливо. Далее, все цифры складываются в новый массив. И каждый элемент проверяется на условие > 1.

    for (let i = 0; i < array1.length; i++) {
        let count = 0
        for (let j = 0; j < array1.length; j++) {
            if (array1[i] === array1[j]) {
                count++
            }
        }
        array2.push(count)
    }
    i = 0
    while (array2[i] > 1) {
        i++
    }
    if (i === array2.length) {
        console.log(true)
    } else {
        console.log(false)
    }


<h2>Задание 7</h2>
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

    let array3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Hello', null];
    let numEven = [];
    let numOdd = [];


    array3.forEach(function(item, index, array) {
        if (typeof item === 'number') {
            if (item % 2 != 0) {
                numOdd.push(item); 
            } else {
                numEven.push(item)
            }
        }
    })

    console.log(`Кол-во чётных элементов в массиве: ${numEven.length}`);
    console.log(`Кол-во нечётных элементов в массиве: ${numOdd.length}`);