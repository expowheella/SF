const brth_city = "location" 

const obj = {

    name: "Bulat",
    surname: "Iakhin",
    brth_D: 22,
    brth_M: "January",
    brth_Y: 22,
    [brth_city]: "Kazan"

}

console.log(obj.name)
console.log(obj['brth_D'])

// Задать название свойства вне объекта через [ключ]: значение
console.log(obj.location)



// Добавление свойства и значения
obj.married = true // dot notation
obj['gender'] = 'male' // bracket notation

// Добавление нового свойства из ввода
// const newParameter = prompt("How are you today?", "good")
const newParameter = "mood"
obj[newParameter] = "good"

// Копирование объектов
const obj1 = obj
console.log( `is ${obj1} is the same as ${obj}?`,
    obj1 === obj
)

// Проверка наличия свойства в классе
console.log("Check if name in obj:", "name" in obj)

//
console.log("--------------------------------------")
// Итерация по объекту

for (let key in obj) {
    // названия свойст
    console.log(key, obj[key]);

    // название значений свойств
    // console.log(obj[key])
}

// console.log(obj)

//
console.log("*****************************")
// Удаление какого-либо свойства объекта
delete obj.name
console.log(obj)
console.log(obj1)

// Копирование объекта
const obj2 = obj1

let newObj = {}
for (let field in obj1){
    if (obj1.hasOwnProperty(field)) {
        newObj[field] = obj1[field];
    }
}

delete(obj1.surname)
console.log(obj1)

console.log(newObj)


const obj3 = {"": "Hi"}
console.log(obj3[""])