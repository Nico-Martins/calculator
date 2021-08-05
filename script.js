/*VALUES*/
let previousOperation = [];
let currentOperation = [];
let previousOperationDisplay = document.getElementById("previous-operation")
let currentOperationDisplay = document.getElementById("current-operation")

/*WRITING OPERATIONS*/
let operators = Array.from(document.getElementsByClassName("operator"));
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        currentOperation.push(" ")
        currentOperation.push(operator.textContent);

        previousOperationDisplay.textContent = `${currentOperationDisplay.textContent} ${operator.textContent}`;
        currentOperationDisplay.textContent = "";

        previousOperation = currentOperation;
        currentOperation = [];
    });
});

/*CALCULATING*/
let equal = document.getElementById("equal");
equal.addEventListener("click", () => {
    /*Display*/
    console.log(`First crrent operation: ${currentOperation}`);
    console.log(`First previous operation: ${previousOperation}`);
    currentOperation.push(" ")
    currentOperation.push(equal.textContent);
    console.log(`Second crrent operation: ${currentOperation}`);

    previousOperationDisplay.textContent += ` ${currentOperationDisplay.textContent} ${equal.textContent}`;

    let fullOperation = previousOperation.concat([" "], currentOperation);
    previousOperation = fullOperation;
    console.log(`Second previous operation: ${previousOperation}`);

    /*Values*/
    let firstNum = previousOperation.join("").split(" ")[0];
    let symbol = previousOperation.join("").split(" ")[1];
    let secondNum = previousOperation.join("").split(" ")[2];
    console.log(`First number: ${firstNum}`);
    console.log(`Symbol: ${symbol}`);   
    console.log(`Second number: ${secondNum}`);

    /*Calculating*/
    let result = operate(symbol, firstNum, secondNum);
    console.log(`Result: ${result}`);
    currentOperation = result;
    currentOperationDisplay.textContent = result.join("");

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
    let result = 0;
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
    return Array.from(String(result));
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