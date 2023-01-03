function sum() {
    let firstNumber = document.querySelector('#firstNumber').value
    firstNumber = parseInt(firstNumber)
    let secondNumber = document.querySelector('#secondNumber').value
    secondNumber = parseInt(secondNumber)
    let result = firstNumber + secondNumber;
    document.querySelector('#result').innerText = result
}