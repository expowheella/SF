// create function for promise
function funcPromise() {
  
  // create a promise
  const myPromise = new Promise ((resolve, reject) => {
    console.log('1. Create a promise'); setTimeout(
      () => {console.log('2. set timeout'); resolve("The promise resolved successfully")},
      1000);

    console.log('3')
  });

  console.log('4');

  // execute the promise
  myPromise
    .then((result) => {
      console.log('Executing RESOLVE', result);
    })
    .catch((error) => {
      console.log('Executing REJECT', error);
    })
    .finally(() => {
      console.log('FINALLY');
    });

    console.log('5')
};

console.log('Calling funcPromise()');
funcPromise();
console.log('The function is executed')