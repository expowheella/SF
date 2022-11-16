sumFD()
// sumFE() cannot be called before assignment


// Function Declaration
function sumFD() {
    const result = 2 + 2
    console.log("Function Declaration:", result);
}


// Function Expression
const sumFE = function() {
    const result = 3 + 2
    console.log("Function Expression:", result);
}


sumFE()