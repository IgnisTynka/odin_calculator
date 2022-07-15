let operation = document.getElementById('calculations');

const numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operators')

let currentNumber = '';
let firstNumber = 0;
let secondNumber = 0;
let selectedOperator = '';

numbers.forEach(number => {
    number.addEventListener('click', () => {
        operation.innerText += number.value;
        currentNumber += number.value;
        console.log(currentNumber)
    })
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operation.innerText += operator.innerText;
        selectedOperator = operator.value;
        firstNumber = currentNumber;
        currentNumber = '';
    })
});

equal.addEventListener('click', () => {
    console.log(firstNumber);
    console.log(selectedOperator);
    console.log(currentNumber)
})

