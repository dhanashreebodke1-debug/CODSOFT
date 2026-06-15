const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // Clear display
        if (value === "C") {
            currentInput = "";
            display.value = "";
        }

        // Calculate result
        else if (value === "=") {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = "Error";
                currentInput = "";
            }
        }

        // Add input to display
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});