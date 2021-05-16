const buttons = document.querySelectorAll("button");
const value = document.getElementById("value");
const numberButton = document.getElementsByClassName("number-button");
let numbersEntered = [];
let operatorEntered;
let solution;

buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
                value.textContent = button.value;
                determineKeyType(button);
});
});

function determineKeyType(button) {
    if (isNaN(button.value)) {
        if (button.value != "=" && button.value != "AC") {
            if (numbersEntered.length == 2) {
                solution = operate();
                numbersEntered = [];
                numbersEntered.push(solution);
                operatorEntered = button.value;
            }
            else {
                operatorEntered = button.value;
            }
        }
        else if (button.value == "=") {
            operate();
            endCalculation();
        }
        else if (button.value == "AC") {
            clear();
        }
        else {
            operatorEntered = button.value;
        }
    }
    else {
        numbersEntered.push(Number(button.value));
    }
}

function operate() {
    switch(operatorEntered) {
        case "+":
            solution = add(numbersEntered);
            value.textContent = solution;
            return solution;
            break;
         case "-":
            solution = subtract(numbersEntered);
            value.textContent = solution;
            return solution;
             break;
         case "x":
            solution = multiply(numbersEntered);
            value.textContent = solution;
            return solution;
             break;
        case "/":
            solution = divide(numbersEntered);
            value.textContent = solution;
            return solution;
            break;             
         default:
             break;
    }
}

function add (args) {
	let sum = 0;
	for (let i = 0; i < args.length; i++) {
		sum += Number(args[i]);
	}
	return sum;
}

function subtract (args) {
	let sum = args[0];
	for (let i = 1; i < args.length; i++) {
		sum -= Number(args[i]);
	}
	return sum;
}

function multiply (args) {
	let total = 1;
	for (let i = 0; i < args.length; i++) {
		total *= Number(args[i]);
	}
	return total;
}

function divide (args) {
    let total = args[0];
    for (let i = 1; i < args.length; i++) {
        total /= Number(args[i]);
    }
    return total;
}

function clear () {
    value.textContent = "0";
    operatorEntered = null;
    numbersEntered = [];
    solution = null;
}

function endCalculation () {
    operatorEntered = null;
    numbersEntered = [];
    numbersEntered.push(solution);
    solution = null;
}
