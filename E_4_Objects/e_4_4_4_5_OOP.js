
/** <<< CONSTRUCTORS >>> */
/**  create person class (object) 
 *   using constructor --> Object
 * 
 *   Actually, the object person will be
 *   an instance of the parent class Object.
 *   In other words, person inherites all
 *   attributes from Object.
 */
const person = new Object({
    name: "Bulat",
    age: 33,
    greet: function () {
        console.log("Hello!")
    }
})

/**  Also, we can create our own constructor object */
function OwnConstructor() {
    this.name = 'any name'
}

/**  We can add new attributes to parent 
 *   --> which is Object class and then
 *   user this attributes via child class 
 *   --> whis is person. 
 *   We can do it via "prototype" func.
 *   
 *   Let's add new property (field) to Object */

Object.prototype.sayHello = function () {
    console.log("Hello!")
}

/** <<< Inheritance from our "person" object >>>
 *      We create a new object "alsu" which
 *      will inherite all the properties (fields)
 *      from person.
 * 
 *      Also, we cannot create "alsu" as we did it
 *      when created person from "Object". This is
 *      because "person" is not a constructor but
 *      "Object" is.
 *   
  */
const alsu = Object.create(person)

// we can modify the attributes
alsu.name = "Alsu"

// we can create a string by using prototype String
const str = new String("I am string")


/** <<< CONTEXT >>> 
 *  <<< this >>>
*/
function bye() {
    console.log("Bye!", this)
};

// this === window --> true

const ajaz = Object.create(person)
ajaz.sayBye = bye

const petr = {
    name: "Petr",
    // age: 35,
    seeULater: bye.bind(this), // this is Window object
    logInfo: function (age) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${age}`)
        console.groupEnd()
    }
}


const laura = {
    name: "Laura"
}

// bind new params to laura
lauraInfo = petr.logInfo.bind(laura, 34)


// call laura with new params
petr.logInfo.call(laura, 45)


//
petr.logInfo.apply(laura, [23,])


Array.prototype.multiplyBy = function (n) {
    return this.map(function (item) {
        return item * n
    })
}

// Using map()
array = [10, 12, 13, 14, 15]

function mapFunc(n) {
    return array.map(
        function (item) {
            return item * n
        }
    )
}


function Candy(weight) {
    this.tasty = 'delicious';
    this.getWeight = function () {
        console.log('This candy has weight ' + weight + ' kg')
    }
}
const newYearGift = new Candy(1);
newYearGift.getWeight();

/**  <<< CLASS >>> 
 *   It is just a syntactic sugar over 
 *   a standart prototyping way */

// class
class Parent {
    constructor(ownCity) {
        this.ownCity = ownCity || "Kazan";
        this.hasFlat = true
    }

    getInfo() {
        // console.log(`I live in ${this.ownCity}`);
        return 'I live in ' + this.ownCity;
    }
}

const parent = new Parent("Astana")
parent.getInfo()


// INHERITANCE
// create Child from prototype Parent
class Child extends Parent {
    constructor(isStudent, city, ownCity) {
        super(ownCity);
        this.isStudent = isStudent;
        this.city = isStudent ? city : ownCity;
    }

    getInfo(){
        if (this.isStudent) {
            return "I study in " + this.city
        } else {
            return super.getInfo()
        }
    }
}


const student = new Child(true, "Piter")
// console.log(student.getInfo())

const employee = new Child(false, "New York");
// console.log(employee.getInfo())

// console.log(student instanceof Parent)


/** <<< STATIC METHOD >>> */
class Amazing {
    static cool() {
        console.log('That\'s Cool!');
    }
    wow() {
        console.log('Wow!');
    }
}

class Wonderful extends Amazing {
    static awesome() {
        super.cool();
    }
    great() {
        Amazing.cool();
    }
}

amazed = new Amazing()
wondered = new Wonderful()

