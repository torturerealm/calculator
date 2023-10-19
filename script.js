let numberOne = 3;
let numberTwo = 2;
let operator = "+";
let equals = 0;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    if (operator === "+") {
        equals = add(a, b);
    } else if (operator === "-") {
        subtract(a, b);
    } else if (operator === "*") {
        multiply(a, b);
    } else if (operator === "/") {
        divide(a, b);
    };
}

const button = document.querySelectorAll("button");
button.addEventListener("click", () => {
    console.log("It's working");
});
