let count = 0;
const counterElement = document.getElementById('counter');
const phraseElement = document.getElementById('phrase');
const translationElement = document.getElementById('translation');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function updateDisplay() {
    counterElement.textContent = count;
    if (count <= 33) {
        phraseElement.textContent = 'سبحان الله';
        translationElement.textContent = 'Subhanallah';
    } else if (count <= 66) {
        phraseElement.textContent = 'الحمد لله';
        translationElement.textContent = 'Alhamdulillah';
    } else {
        phraseElement.textContent = 'الله أكبر';
        translationElement.textContent = 'Allahu Akbar';
    }
}

incrementButton.addEventListener('click', () => {
    if (count < 99) { // To avoid exceeding 99
        count++;
        updateDisplay();
    }
});

decrementButton.addEventListener('click', () => {
    if (count > 0) { // To avoid going below 0
        count--;
        updateDisplay();
    }
});

updateDisplay();