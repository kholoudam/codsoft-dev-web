let currentInput = '';
let previousInput = '';
let operator = null;

const display = document.getElementById('display');

function appendNumber(number) {
  currentInput += number.toString();
  display.value = currentInput;
}

function setOperation(op) {
  if (currentInput === '') return;
  
  if (previousInput !== '') {
    calculateResult();
  }

  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculateResult() {
  if (operator === null || currentInput === '' || previousInput === '') return;

  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

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
      if (current === 0) {
        alert('Cannot divide by zero');
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = null;
  display.value = '';
}