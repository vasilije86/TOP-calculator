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
            return null;
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
        displayValue = "0";
        resetDisplay = false;
    }
    if (displayValue === '0' && digit ==='0') return;
    if(displayValue ==='0' && digit!== ".") {
        displayValue = digit;
    } else{
        displayValue += digit;
    }
    updateDisplay()
}
function setOperator(op){
    if (a=== null){
        a = parseFloat(displayValue);
    } else if(!resetDisplay) {
        b = parseFloat(displayValue);
        a = operate(a,b,operator);
        displayValue = a.toString();
        updateDisplay();
    }
    operator = op;
    resetDisplay = true;
}
function clearDisplay() {
    displayValue = '0';
    a = null;
    b = null;
    operator = null;
    clearDisplay = false;
    updateDisplay();
}
function calculateResult() {
    if (a!== null && operator !== null){
        b = parseFloat(displayValue);
        const result = operate(a,b,operator);
        displayValue = result.toString();
        updateDisplay();
        a = result;
        b = null;
        operator = null;
        resetDisplay = true;
    }
}
document.querySelectorAll('.digit').forEach(button =>{
    button.addEventListener('click', () => appendDigit(button.textContent));
});
document.querySelectorAll('.operator').forEach(button =>{
    button.addEventListener('click', () => setOperator(button.textContent));
});
document.querySelector(".clear").addEventListener('click', clearDisplay);
document.querySelector('.equals').addEventListener('click', calculateResult);
updateDisplay();