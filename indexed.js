let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

// Append numbers to the display
function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

// Append operators to the display
function appendOperator(op) {
  // Don't allow multiple operators in a row
  if (currentInput === '' && previousInput === '') return;
  
  if (currentInput === '') {
    currentInput = '0';
  }

  if (previousInput !== '') {       
    calculate();
  }
  
  // If an operator is clicked, display the operator and set it
  operator = op;
  display.value += ' ' + operator + ' ';
  previousInput = currentInput;
  currentInput = '';
}

// Clear the display
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  display.value = '';
}

// Calculate the result
function calculate() {
  if (currentInput === '' || previousInput === '') return;
  
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  let result;
  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  
  // Show the result on the display
  display.value = result;
  currentInput = result.toString();
  previousInput = '';
  operator = '';
}
