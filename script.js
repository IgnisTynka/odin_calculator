let operationDiv = document.getElementById('calculations');
let equalDiv = document.getElementById('result')

const numbers = document.querySelectorAll('.numbers');
let operators = document.querySelectorAll('.operators')

numbers.forEach(number => {
    number.addEventListener('click', () => {
        equalDiv.innerText = '';
        operationDiv.innerText += number.value;
        let firstPart = operationDiv.innerText;
        operators.forEach(operator => {
            operator.addEventListener('click', () => {
                operationDiv.innerText = firstPart + operator.value;
                selectedOperator = operator.value;
                decimal.disabled = false;
            })
        });
    })
});

decimal.addEventListener('click', () => {    
    if(operationDiv.innerText == ''){
        operationDiv.innerText += '0.';
    }else{
        operationDiv.innerText += '.';
    }
    decimal.disabled = true;
})

equal.addEventListener('click', () => {
    let result = 0;
    let numbersArray = []; 
    if(selectedOperator == '+'){
        numbersArray = operationDiv.innerText.split('+');
        result = Number(numbersArray[0]) + Number(numbersArray[1]); 
    }else if(selectedOperator == '-'){
        numbersArray = operationDiv.innerText.split('-');
        result = Number(numbersArray[0]) - Number(numbersArray[1]);
    }else if(selectedOperator == '*'){
        numbersArray = operationDiv.innerText.split('*');
        result = Number(numbersArray[0]) * Number(numbersArray[1]);
    }else if(selectedOperator == '/'){
        numbersArray = operationDiv.innerText.split('/');
        result = Number(numbersArray[0]) / Number(numbersArray[1]);
    }
    equalDiv.innerText = result;
    operators.forEach(operator => {
        operator.addEventListener('click', () => {
            operationDiv.innerText = result + operator.value;
            selectedOperator = operator.value;
        })
    });
    decimal.disabled = false;
})

allclear.addEventListener('click', () => {
    operationDiv.innerText = '';
    equalDiv.innerText = '';
    decimal.disabled = false;
})

oneclear.addEventListener('click', () => {
    if(operationDiv.innerText.slice(-1) == '.'){
        decimal.disabled = false;
    } 
    operationDiv.innerText = operationDiv.innerText.slice(0, -1) 
})