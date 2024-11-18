function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if (b ===0){
        return "Can't divide with 0"
    } else{
        return a / b;
    }
}
function operate(a,b,operator){
    switch(operator){
        case '+' :
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            return "Input a valid operator";
    }
}
let a = null;
let b = null;
let operator = null;
let displayValue = 0;
let resetDisplay = false;
function updateDisplay() {
    const display = document.querySelector('.display');
    display.textContent = displayValue;
}
function appendDigit(digit){
    if (resetDisplay){
        displayValue = "";
        resetDisplay = false;
    }
    if (displayValue ===0 && digit ===0) return;
    if(displayValue ===0 && digit!== ".") {
        displayValue = digit;
    } else{
        displayValue += digit;
    }
    updateDisplay()
}
