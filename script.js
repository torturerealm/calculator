let numberOne = "";
let numberTwo = "";
let operator = "";
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
    const screen = document.querySelector(".screen");
    const text = document.createElement("div");
    text.textContent = e;
    screen.appendChild(text);
}

function storeValue(e) {
    numberOne += e;
}

function updateNumberTwo(e) {
    if (e.className == "number") {
        numberTwo += e.textContent;
    }
}

function updateOperator(e) {
    if (e.className == "operator") {
        operator = e.textContent;
    }
}


const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => {
    
    // function to clear numberOne, numberTwo
    // function to operate numberOne and numberTwo
    updateOperator(button);

    if (operator == "") {
        // update numberOne
        // display numberOne
        storeValue(button.textContent);
        displayNumbers(numberOne);
    } else {
        // display operator
        // update numberTwo
        // display numberTwo
        displayNumbers(operator);
        updateNumberTwo(button);
        displayNumbers(numberTwo);
    }

}));
