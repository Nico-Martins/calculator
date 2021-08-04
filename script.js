/*VALUES*/
let previousOperation = [];
let currentOperation = [];
let lastOperationDisplay = document.getElementById("last-operation")
let currentOperationDisplay = document.getElementById("current-operation")

/*USING OPERATORS*/
let operators = Array.from(document.getElementsByClassName("operator"));
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        currentOperation.push(operator.textContent);
        lastOperationDisplay.textContent = `${currentOperationDisplay.textContent} ${operator.textContent}`;
        currentOperation = [];
        currentOperationDisplay.textContent = "";
    });
});

/*CALCULATING*/
let equal = document.getElementById("equal");
equal.addEventListener("click", () => {
    let lastElement = previousOperation.length - 1;
    if (previousOperation[lastElement] === "+" || 
    previousOperation[lastElement] === "-" || 
    previousOperation[lastElement] === "x" || 
    previousOperation[lastElement] === "÷") {
        lastOperationDisplay.textContent += `${currentOperationDisplay.textContent} ${operator.textContent}`;
        currentOperation = [];
        currentOperationDisplay.textContent = operate(operator.textContent);
    }
});

/*DISPLAYING NUMBERS*/
let numbers = Array.from(document.querySelectorAll(".number"));
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        currentOperationDisplay.textContent += number.textContent;
        currentOperation.push(number.textContent);
    });
});

/*OPERATE*/
function operate(symbol){
    switch(true) {
        case symbol === "+":
            result = add(arguments[1], arguments[2]);
            break;
        case symbol === "-":
            result = subtract(arguments[1], arguments[2]);
            break; 
        case symbol === "÷":
            result = divide(arguments[1], arguments[2]);
            break; 
        case symbol === "x":
            result = multiply(arguments[1], arguments[2]);
            break;    
        case symbol === "^":
            result = power(arguments[1], arguments[2]);
            break;
        case symbol === "!":
            result = factorial(arguments[1]);
            break;
    }
}

/*OPERATIONS*/
function add(a, b) {
    return +a + +b;
};
function subtract(a, b) {
    return +a - +b;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
};
function multiply(a, b) {
    return +a * +b;    
};
function divide(a, b) {
    if (b !== 0){
        return +a / +b;
    } else {
        return "Math ERROR";
    }
}

/*FUNCTIONS*/
function power(a, b) {
	return (+a) ** +b;
};
function factorial(num) {
	let fact = +num;
    if (+num === 0){
        fact = 1;
    } else if (+num > 1){
        for (let i = +num - 1; i > 1; i--){
            fact *= i;
        }
    }
    return fact;  
};
function changeSign(num){
    return -(+num)
}