const display = document.querySelector('.result');
const buttons = document.querySelectorAll('.button');
let currentInput = '';

// Add an event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value === 'AC') {
            currentInput = '';
        } else if(value ==='+/-'){
            currentInput= eval("-1*"+currentInput)
        }
        else if(value === '%'){
            currentInput=eval(currentInput/100)
        }
        else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = 'Error';
            }
        } else {
            currentInput += value;
        }

        display.textContent = currentInput;
    });
});





