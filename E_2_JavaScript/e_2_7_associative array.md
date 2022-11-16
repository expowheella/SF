# E2.7. Associative arrays

Ассоциативный массив — это массив, у которого в качестве ключей используются строки.

Используется для хранения именованных коллекций (как словари в Python)

А обычные массивы используеются для хранения упорядоченных коллекций

    let user = {
        name: "Bulat",
        age: 33,
        birthday: "22 Jan 89"
    };
    // console.log(user.name) // Bulat

### Создадим объект

    let obj = new Map();

### add key-value using method set()
    obj.set("name", "Billy");
    obj.set(1, "first");
    obj.set(true, "human");

### get values from the object using method .get()
    console.log(
        obj.get("name"),
        obj.get(1),
        obj.get(true)
    );
    ---------------------------------------------
    Output:
    Billy first human

### check object's size
    console.log(
        obj.size
    );
    ---------------------------------------------
    Output:
    3

---------------------------------------------

## iterate through an array
    let obj2 = new Map([
        ["name", "Bulat"],
        ["surname", "Iakhin"],
        ["birthday", 22]
    ])

    for (let item of obj2.keys()) {
        console.log(item)
    }
    ---------------------------------------------
    Output:
    name
    surname
    birthday


    for (let item of obj2.values()) {
        console.log(item)
    }
    ---------------------------------------------
    Output:
    Bulat
    Iakhin
    22


    for (let item of obj2) {
        console.log(item)
    }
    ---------------------------------------------
    Output:
    [ 'name', 'Bulat' ]
    [ 'surname', 'Iakhin' ]
    [ 'birthday', 22 ]


## Задание 8
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.

    let obj3 = new Map([
        ["BMW", 1990],
        ["Mersedes", 2000], 
        ["Bentley", 2010], 
        ["Bugatti", 2015]
    ])


    for (let item of obj3.keys()) {
        console.log(
            `Ключ - ${item}, значение - ${obj3.get(item)}`
        )
    }

    ---------------------------------------------------------
    Output:
    Ключ - BMW, значение - 1990
    Ключ - Mersedes, значение - 2000
    Ключ - Bentley, значение - 2010
    Ключ - Bugatti, значение - 2015