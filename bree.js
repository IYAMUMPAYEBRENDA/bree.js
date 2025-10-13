function showMenu() {
    console.log("\n=== CALCULATOR ===");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");
}

function add(a, b) {
    console.log(`Result: ${a} + ${b} = ${a + b}`);
}

function subtract(a, b) {
    console.log(`Result: ${a} - ${b} = ${a - b}`);
}

function multiply(a, b) {
    console.log(`Result: ${a} × ${b} = ${a * b}`);
}

function divide(a, b) {
    if (b !== 0) {
        console.log(`Result: ${a} ÷ ${b} = ${a / b}`);
    } else {
        console.log("Error: Cannot divide by zero!");
    }
}

// Example usage:
showMenu();
// Call add(2, 3), subtract(5, 2), etc. as needed
