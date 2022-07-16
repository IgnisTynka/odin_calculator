let operationDiv = document.getElementById('calculations');
let equalDiv = document.getElementById('result')

const numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operators')

// let currentNumber = '';
// let firstNumber = 0;
// let selectedOperator = '';

numbers.forEach(number => {
    number.addEventListener('click', () => {
        equalDiv.innerText = '';
        operationDiv.innerText += number.value;
        // currentNumber += number.value;
    })
});

decimal.addEventListener('click', () => {    
    if(operationDiv.innerText == ''){
        // currentNumber = '0.'
        operationDiv.innerText = '0.';
    }else{
        // currentNumber += '.'
        operationDiv.innerText += '.';
    }
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        operationDiv.innerText += operator.value;
        selectedOperator = operator.value;
        // firstNumber = currentNumber;
        // currentNumber = '';
    })
});

equal.addEventListener('click', () => {
    let result = 0;
    let numbersArray = []; 
    if(selectedOperator == '+'){
        numbersArray = operationDiv.innerText.split('+');
        result = Number(numbersArray[0]) + Number(numbersArray[1]);
        equalDiv.innerText = result;
    }else if(selectedOperator == '-'){
        numbersArray = operationDiv.innerText.split('-');
        result = Number(numbersArray[0]) - Number(numbersArray[1]);
        equalDiv.innerText = result;
    }else if(selectedOperator == '*'){
        numbersArray = operationDiv.innerText.split('*');
        console.log(numbersArray);
        result = Number(numbersArray[0]) * Number(numbersArray[1]);
        equalDiv.innerText = result;
    }else if(selectedOperator == '/'){
        numbersArray = operationDiv.innerText.split('/');
        console.log(numbersArray);
        result = Number(numbersArray[0]) / Number(numbersArray[1]);
        equalDiv.innerText = result;
    }
})

allclear.addEventListener('click', () => {
    // currentNumber = '';
    // firstNumber = 0;
    // selectedOperator = '';
    operationDiv.innerText = '';
    equalDiv.innerText = '';
})

oneclear.addEventListener('click', () => {
    operationDiv.innerText = operationDiv.innerText.slice(0, -1)  
})