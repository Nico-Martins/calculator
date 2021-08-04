/*OPERATE*/
function operate(symbol){
    switch(true) {
        case symbol === "+":
            add(arguments[1], arguments[2]);
            break;
        case symbol === "-":
            subtract(arguments[1], arguments[2]);
            break; 
        case symbol === "÷":
            divide(arguments[1], arguments[2]);
            break; 
        case symbol === "x":
            multiply(arguments[1], arguments[2]);
            break;    
        case symbol === "^":
            power(arguments[1], arguments[2]);
            break;
        case symbol === "!":
            factorial(arguments[1]);
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
    return +a / +b;
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