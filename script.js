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

function displayNumbers(e) {
    const screen = document.querySelector(".display");
    const text = document.createElement("div");
    text.textContent = e;
    screen.appendChild(text);
}


const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => {
    // function to store clicked numbers in variable
    displayNumbers(button.textContent);
    // function to change display
}));
