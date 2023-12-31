const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(firstNum, operation, secondNum) {
    switch(operation) {
        case('+'): return add(firstNum, secondNum); break;
        case('-'): return substract(firstNum, secondNum); break;
        case('*'): return multiply(firstNum, secondNum); break;
        case('/'): return divide(firstNum, secondNum); break;
    }
}

const calculatorDisplay = document.querySelector('.display-result'); 
const keys = document.querySelector('.calculator-keys');

const deleteBtn = document.querySelector('.delete');
const resetBtn = document.querySelector('.reset');
const equalBtn = document.querySelector('.equal');

let firstNumber = '';
let operation = '';
let secondNumber = '';
let addToFirstNumber = true;

keys.addEventListener('click', display);

function display(e) {
    if (e.target.tagName === 'BUTTON') {
        if (e.target.hasAttribute('data-number')) {
            if (addToFirstNumber) {
                firstNumber += e.target.getAttribute('data-number');
                console.log(firstNumber);
            }
            else {
                secondNumber += e.target.getAttribute('data-number');
                console.log(secondNumber);
            }
        }
        if (e.target.hasAttribute('data-operation') && firstNumber !== '') {
            operation = e.target.getAttribute('data-operation');
            addToFirstNumber = false;
        }
    }
    calculatorDisplay.textContent = firstNumber + operation + secondNumber;
}

equalBtn.addEventListener('click', operationResult);
resetBtn.addEventListener('click', reset);
deleteBtn.addEventListener('click', deleteLastNum)

function operationResult(e) {
    if (e.target.classList.contains('equal') && secondNumber !== '') {
        operate(+firstNumber, operation, +secondNumber);
        calculatorDisplay.textContent = operate(+firstNumber, operation, +secondNumber);
        firstNumber = operate(+firstNumber, operation, +secondNumber);
        operation = '';
        secondNumber = '';
        addToFirstNumber = true;
    }
}

function reset(e) {
    if (e.target.classList.contains('reset')) {
        firstNumber = '';
        operation = '';
        secondNumber = '';
        addToFirstNumber = true;
    }
}

function deleteLastNum(e) {
    if (e.target.classList.contains('delete')) {
        if (addToFirstNumber) {
            firstNumber = firstNumber.toString().slice(0, -1);
        }
        else {
            secondNumber = secondNumber.toString().slice(0, -1);
        }
    }
    calculatorDisplay.textContent = firstNumber + operation + secondNumber;
}
