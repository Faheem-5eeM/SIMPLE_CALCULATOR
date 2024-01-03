let expression = "";
let inputField = document.querySelector('input');

document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', (e) => {
        try {
            handleButtonClick(e.target.innerHTML);
        } catch (error) {
            displayError(error.message);
        }
    });
});

function handleButtonClick(buttonValue) {
    if (buttonValue === '=') {
        try {
            expression = eval(expression);
            inputField.value = expression;
        } catch (error) {
            throw new Error("Invalid expression");
        }
    } else if (buttonValue === 'Clr') {
        clearCalculator();
    } else {
        expression += buttonValue;
        inputField.value = expression;
    }
}

function clearCalculator() {
    expression = "";
    inputField.value = expression;
}

function displayError(errorMessage) {
    expression = ""; // Clear the expression on error
    inputField.value = "Error: " + errorMessage;
    console.error(errorMessage); // Log the error to the console for debugging
}
