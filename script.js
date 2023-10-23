let numberOne = "";
let numberTwo = "";
let operator = "";
let result = "";
let temp = "";

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
    a = +a;
    b = +b;

    if (operator === "+") {
       return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    };
}

function displayNumbers(a, b, operator) {
    const display = document.querySelector(".display");
    display.textContent = `${a} ${operator} ${b}`;
}

function displayResult(e) {
    const result = document.querySelector(".result");
    result.textContent = e;
}

function updateNumberOne(e) {
    if (e.className == "number") {
        numberOne += e.textContent;
    }
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

function clear() {
    numberOne = "";
    numberTwo = "";
    operator = "";
    result = "";
} 

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", () => {
    
    updateOperator(button);
    if (button.className == "clear") {
        clear();
        displayNumbers(numberOne, numberTwo, operator);
        displayResult(result);
    }

    if (button.className == "equals") {
        result = operate(numberOne, numberTwo, operator);
        displayResult(result);
    }

    // if (operator == "") {
    //     updateNumberOne(button);
    //     displayNumbers(numberOne, numberTwo, operator);
    // } else {
    //     if (result == "") {
    //         displayNumbers(numberOne, numberTwo, operator);
    //         updateNumberTwo(button);
    //         displayNumbers(numberOne, numberTwo, operator);
    //     } else {
    //         displayNumbers(numberOne, numberTwo, operator); 
    //         clear();
    //         temp = result;
    //         numberOne = temp;
    //     }
    
    if (result == "") {
        if (operator == "") {
            updateNumberOne(button);
            displayNumbers(numberOne, numberTwo, operator);
        } else {
            displayNumbers(numberOne, numberTwo, operator);
            updateNumberTwo(button);
            displayNumbers(numberOne, numberTwo, operator);
        }
    } else {
        temp = result;
        clear();
        numberOne = temp;

        if (operator == "") {
            updateNumberOne(button);
            displayNumbers(numberOne, numberTwo, operator);
        } else {
            displayNumbers(numberOne, numberTwo, operator);
            updateNumberTwo(button);
            displayNumbers(numberOne, numberTwo, operator);
        } 
    }
}));
