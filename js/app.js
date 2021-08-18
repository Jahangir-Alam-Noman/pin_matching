function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }

}

function generatePin() {
    const pin = getPin();
    document.getElementById('display_pin').value = pin;
}

document.getElementById('key_pad').addEventListener('click',
    function (event) {

        const number = event.target.innerText;
        const calcInput = document.getElementById('typed_numbers');
        if (isNaN(number)) {
            if (number == 'C') {
                calcInput.value = '';
            }

        }
        else {

            const previousNumber = calcInput.value;
            const newNumber = previousNumber + number;
            calcInput.value = newNumber;
        }


    });


function verifyPin() {
    const pin = document.getElementById('display_pin').value;
    const typedNumbers = document.getElementById('typed_numbers').value;
    const successMessage = document.getElementById('notify_success');
    const failError = document.getElementById('notify_fail');
    if (pin == typedNumbers) {

        successMessage.style.display = 'block';
        failError.style.display = 'none';

    }
    else {
        successMessage.style.display = 'none';
        failError.style.display = 'block';
    }


}