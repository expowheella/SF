// объявление функции
function getSum() {

    console.log(1+2)
};

getSum()

// Задание 1
/*Дан массив. Нужно вывести в консоль количество чётных и нечётных 
элементов в массиве. Если в массиве есть нулевой элемент, 
то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, 
что массив может содержать не только числа, 
но и, например, знаки, null и так далее. */

function evenOrOdd() {

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
        // console.log(typeof item);

    })
    // console.log(array3);
    console.log(`Кол-во чётных элементов в массиве: ${numEven.length}`);
    console.log(`Кол-во нечётных элементов в массиве: ${numOdd.length}`);

}

evenOrOdd()