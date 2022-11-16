const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`
   
   const object = JSON.parse(jsonString)
   res = []
   list = []
   for (let i = 0; i < object.list.length; i++) {
     res.push({ 
       name: object.list[i].name,
       age: parseInt(object.list[i].age),
       prof: object.list[i].prof
     })
   }
     list.push({list: res})
     console.log(list)