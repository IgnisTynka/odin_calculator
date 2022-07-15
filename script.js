let operationDiv = document.getElementById('calculations');
let equalDiv = document.getElementById('result')

const numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operators')

let currentNumber = '';
let firstNumber = 0;
let selectedOperator = '';

numbers.forEach(number => {
    number.addEventListener('click', () => {
        equalDiv.innerText = '';
        operationDiv.innerText += number.value;
        currentNumber += number.value;
        console.log(currentNumber)
    })
});

decimal.addEventListener('click', () => {
    if(currentNumber == ''){
        currentNumber = '0.'
        operationDiv.innerText = currentNumber;
    }else{
        operationDiv.innerText += '.';
    }
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operationDiv.innerText += operator.innerText;
        selectedOperator = operator.value;
        firstNumber = currentNumber;
        currentNumber = '';
    })
});

equal.addEventListener('click', () => {
    let result = 0;
    if(selectedOperator == '+'){
        result = Number(firstNumber) + Number(currentNumber);
        equalDiv.innerText = result;
    }else if(selectedOperator == '-'){
        result = Number(firstNumber) - Number(currentNumber);
        equalDiv.innerText = result;
    }else if(selectedOperator == '*'){
        result = Number(firstNumber) * Number(currentNumber);
        equalDiv.innerText = result;
    }else if(selectedOperator == '/'){
        result = Number(firstNumber) / Number(currentNumber);
        equalDiv.innerText = result;
    }
})

