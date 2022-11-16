const myPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {        
        let number = Math.floor(Math.random(1,100)*100);
        console.log('arbitrary number:', number);

        if (number%2 === 0){
            resolve('Success! The number is even');
        } else {
            reject('Error! The number is odd')
        }

        
    }, 3000);
});


myPromise
    .then((result) => {
        console.log("Great!", result);
    })
    .catch((error) => {
        console.log("Try again!", error);
    })
    .finally(() => {
        console.log("Finally");
    });