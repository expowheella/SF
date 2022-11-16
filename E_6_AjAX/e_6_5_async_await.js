// Create promise
// PAY attention to ways of implementation of fistPromise and secondPromise functions.
// They are declared and used differently
const firstPromise = () => {
    return new Promise((resolve, reject) => {
        resolve ("1. Success");
    });
};

const secondPromise = new Promise((resolve, reject) => {
    resolve("2. Success");
});


// Declare async function
const executePromise = async () => {
    console.log("START");

    // Waiting for the result of firstPromise
    const firstPromiseResult = await firstPromise();
    console.log("Here is the 1-st promise result", firstPromiseResult);

    // Waiting for the result of secondPromise
    const secondPromiseResult = await secondPromise;
    console.log("Here is the 2-nd promise result", secondPromiseResult);

    console.log("FINISH");
}

executePromise();