// variables
let a = 3;
let b = a * 4;
console.log(b);

a = 4;
b = a / 4;
console.log(b);

a += b;
console.log(a);

a = b = 20;
a /= b;
console.log(a);


// dicrementaion/incrementation
console.log('incrementation');
let c = 20;
console.log(c);
c--;
console.log(c);
c++;
console.log(c);


// bool
console.log('bool');
console.log(12 == '12');
console.log(12===12);
console.log(12 != '12');


// constant value
const TAX_RATE = 0.20;


// objects
a = { property: "property" };
console.log(a.property);

// type of element
console.log(typeof (a, c));


// THE DIFFERENCE BETWEEN let and var
function run() {
    var foo = "Foo";
    let bar = "Bar";
  
    console.log(foo, bar); // Foo Bar
  
    {
      var moo = "Mooo"
      let baz = "Bazz";
      console.log(moo, baz); // Mooo Bazz
    }
  
    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
  }
  
  run();
