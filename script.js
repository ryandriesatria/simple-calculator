const inputs = document.querySelectorAll(".input");
const screen = document.querySelector(".calculator-screen");
const operator = ["+", "-", "×", "÷"];

const updateScreen = (input) => {
    const lastChar = screen.value[screen.value.length - 1];
    if(screen.value === '0') {
        input === '.' ? screen.value = '0.' : screen.value = input;
    }
    else if (lastChar === "%" && !isNaN(input)) {
        screen.value += "×" + input;
    } 
    else if (operator.includes(lastChar) && operator.includes(input)) {
        screen.value = screen.value.substr(0, screen.value.length - 1) + input;
    }
    else {
        screen.value += input;
    }  

}

inputs.forEach((input) => {
    input.addEventListener("click", (event) => {  
        updateScreen(event.target.innerHTML);
    });
});

function calculate() {
    const calc = screen.value.replace("÷", "/").replace("×", "*").replace("%", "*0.01");
    screen.value = eval(calc);
}

