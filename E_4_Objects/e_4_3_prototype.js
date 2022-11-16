const person = {
    currentCity: "Astana"
};

// create an object with prototype
const student = Object.create(person);

// add a property to the object
student.homeTown = "Kazan";

// person object has no property which a student has 
console.log("person.currentCity: ", person.currentCity);
console.log("person.homeTown: ", person.homeTown);

//
console.log(    "*** student ***"    )
//
// student object has the access to properties of person
console.log("student.currentCity: ", student.currentCity);
console.log("student.homeTown: ", student.homeTown);

// we can see here student's own properties
for (let key in student){
    if (student.hasOwnProperty(key)){
        console.log("student's own properties: ", key) // it is  homeTown only 
    }
}
/**  so, inspite that student does not have own property currentCity,
 *   student has access to that property and can use it
*/

// student also can change its own property which has been inherited from
// a prototype
student['currentCity'] = "Nur-Sultan"
console.log("student.currentCity: ", student.currentCity);

// get a prototype of object
console.log(Object.getPrototypeOf(student));







