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




