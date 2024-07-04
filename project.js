const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to perform addition
function add(x, y) {
  return x + y;
}

// Function to perform subtraction
function subtract(x, y) {
  return x - y;
}

// Function to perform multiplication
function multiply(x, y) {
  return x * y;
}

// Function to perform division
function divide(x, y) {
  if (y === 0) {
    return "Cannot divide by zero!";
  }
  return x / y;
}

// Function to calculate BMI
function calculateBMI(weight, height) {
  // Convert height from cm to meters
  let heightMeters = height / 100;
  // Calculate BMI
  let bmi = weight / (heightMeters * heightMeters);
  return bmi.toFixed(2); // Return BMI rounded to 2 decimal places
}

// Main calculator function
function startCalculator() {
  console.log("Welcome to the Calculator!");

  rl.question('Enter operation (add/subtract/multiply/divide/bmi): ', (operation) => {
    if (operation === 'bmi') {
      rl.question('Enter weight (in kg): ', (weight) => {
        rl.question('Enter height (in cm): ', (height) => {
          let bmi = calculateBMI(parseFloat(weight), parseFloat(height));
          console.log(`BMI: ${bmi}`);
          rl.close();
        });
      });
    } else {
      rl.question('Enter first number: ', (num1) => {
        rl.question('Enter second number: ', (num2) => {
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
          let result;

          switch (operation) {
            case 'add':
              result = add(num1, num2);
              break;
            case 'subtract':
              result = subtract(num1, num2);
              break;
            case 'multiply':
              result = multiply(num1, num2);
              break;
            case 'divide':
              result = divide(num1, num2);
              break;
            default:
              result = 'Invalid operation';
          }

          console.log(`Result: ${result}`);
          rl.close();
        });
      });
    }
  });
}

// Start the calculator
startCalculator();
