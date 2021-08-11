/*DATA*/
let operation = {
    previous: {    
        firstNum: [],
        symbol: null,
        secondNum: [],
    },
    current: {
        input: [],
    },
};
let currentDisplay = document.getElementById("current-operation");
let previousDisplay = document.getElementById("previous-operation");

/*USER INPUTS*/
    /*NUMBERS*/
let numbers = Array.from(document.getElementsByClassName("number"));
numbers.forEach((number) => number.addEventListener("click", () => {
    inputNumber(number.textContent);
}));
    /*OPERATORS*/
let operators = Array.from(document.getElementsByClassName("operator"));
operators.forEach((operator) => operator.addEventListener("click", () => {
    inputOperator(operator.textContent);
}));
    /*EQUAL*/
let equal = document.getElementById("equal");
equal.addEventListener("click", equate);

    /*FUNCTIONS*/
        /*SIGN*/
let sign = document.getElementById("sign");
sign.addEventListener("click", changeSign);
        /*FACTORIAL*/
let fact = document.getElementById("factorial");
fact.addEventListener("click", factorialOf);

    /*ERASERS*/
        /*DELETE*/
let deleter = document.getElementById("delete");
deleter.addEventListener("click", deleteLast);
        /*CLEAR*/
let clear = document.getElementById("clear");
clear.addEventListener("click", clearAll);

/*MANAGING DATA*/
    /*NUMBERS*/
function inputNumber(num){
    if (num !== "."){
        operation.current.input.push(num);
    } else if (!(operation.current.input.includes("."))){
        operation.current.input.push(num);
    }
    currentDisplay.textContent = operation.current.input.join("");
}
    /*OPERATIONS*/
function inputOperator(sym){
    if (operation.previous.symbol === null && operation.current.input.length > 0 && operation.current.input.join("") !== "-"){
        operation.previous.firstNum = operation.current.input;
        sym === "xy" ? operation.previous.symbol = "^" : operation.previous.symbol = sym;
        operation.current.input = [];
        previousDisplay.textContent = `${operation.previous.firstNum.join("")} ${operation.previous.symbol}`;
        currentDisplay.textContent = "";
    }
}
    /*EQUALITY*/
function equate(){
    if (operation.previous.symbol !== null && operation.current.input.length > 0 && operation.current.input.join("") !== "-"){
        operation.previous.secondNum = operation.current.input;

        let sym = operation.previous.symbol;
        let num1 = operation.previous.firstNum.join("");
        let num2 = operation.previous.secondNum.join("");
        let result = operate(sym, num1, num2).toString();

        result === "Math ERROR" ? operation.current.input = [] : operation.current.input = result.split("");
        previousDisplay.textContent = `${operation.previous.firstNum.join("")} ${operation.previous.symbol} ${operation.previous.secondNum.join("")} =`;
        currentDisplay.textContent = result;

        operation.previous.firstNum = [];
        operation.previous.symbol = null;
        operation.previous.secondNum = [];
    }
}
    /*FUNCTIONS*/
        /*SIGN*/
function changeSign(){
    if (operation.current.input.length === 0){
        operation.current.input = ["-"];
    } else if (operation.current.input[0] === "-"){
        operation.current.input.shift();
    } else {
        operation.current.input.unshift("-");
    }
    currentDisplay.textContent = operation.current.input.join("");
}
        /*FACTORIAL*/
function factorialOf(){
    if (operation.current.input.length > 0 && operation.current.input.join("") !== "-"){    
        operation.previous.firstNum = operation.current.input;
        let result = factorial(operation.previous.firstNum.join("")).toString();
        result === "Math ERROR" ? operation.current.input = [] : operation.current.input = result.split("");
        previousDisplay.textContent = `${operation.previous.firstNum.join("")}! =`;
        currentDisplay.textContent = result;
    }
}
    /*ERASER FUNCTIONS*/
        /*DELETE*/
function deleteLast(){
    if (Array.isArray(operation.current.input )){
        if (operation.current.input.length >= 1){
            operation.current.input.pop();
            currentDisplay.textContent = `${operation.current.input.join("")}`;
        } else {
            operation.current.input = [];
            currentDisplay.textContent = "";
        }
    }
}
        /*CLEAR*/
function clearAll(){
    operation = {
        previous: {    
            firstNum: [],
            symbol: null,
            secondNum: [],
        },
        current: {
            input: [],
        },
    };
    currentDisplay.textContent = "";
    previousDisplay.textContent = "";
}

/*OPERATE*/
function operate(symbol, firstNum, secondNum){
    let result = 0;
    switch(true) {
        case symbol === "+":
            result = add(firstNum, secondNum);
            break;
        case symbol === "-":
            result = subtract(firstNum, secondNum);
            break; 
        case symbol === "÷":
            result = divide(firstNum, secondNum);
            break; 
        case symbol === "x":
            result = multiply(firstNum, secondNum);
            break;    
        case symbol === "^":
            result = power(firstNum, secondNum);
            break;
    }
    return result;
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
    if (+b !== 0){
        return +a / +b;
    } else {
        return "Math ERROR";
    }
}
function power(a, b) {
	return (+a) ** +b;
};

/*FUNCTIONS*/
function factorial(num) {
	if (+num < 0) {
        return "Math ERROR";
    } else {
        let fact = +num;
        if (+num === 0){
            fact = 1;
        } else if (+num > 1){
            for (let i = +num - 1; i > 1; i--){
                fact *= i;
            }
        }
        return fact === Infinity ? "Math ERROR" : fact;
    }
};

/*KEYBOARD SUPPORT*/
window.addEventListener("keydown", (e) => {
    switch(true) {
        case e.key in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] || e.key === ".":
            numbers.forEach((number) => {
                if (number.textContent === e.key) {
                    number.click();
                } else if (e.key === ".") {
                    document.getElementById("decimal-point").click(); 
                }
            });
            break;
        case e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/" || e.key === "^":
            operators.forEach((operator) => {
                if (operator.textContent === "x" && e.key === "*") {
                    operator.click();
                } else if (operator.textContent === "xy" && e.key === "^") {
                    operator.click();
                } else if (operator.textContent === "÷" && e.key === "/") {
                    operator.click(); 
                } else if (operator.textContent === e.key) {
                    operator.click(); 
                }
            });
            break; 
        case e.key === "Enter":
            equal.click();
        break; 
        case e.key === "Backspace":
            deleter.click();
            break; 
        case e.key === "c":
            clear.click();
            break; 
        case e.key === " ":
            sign.click();
            break; 
        case e.key === "!":
            fact.click();
            break; 
    }
});