document.addEventListener('DOMContentLoaded', () => {
    const guessButton = document.getElementById('guessButton');
    const guessInput = document.getElementById('guessInput');
    const feedback = document.getElementById('feedback');
    const attempts = document.getElementById('attempts');

    let targetNumber = Math.floor(Math.random() * 100) + 1;
    let attemptCount = 0;

    guessButton.addEventListener('click', () => {
        const userGuess = Number(guessInput.value);
        attemptCount++;

        if (userGuess < 1 || userGuess > 100) {
            feedback.textContent = 'Please enter a number between 1 and 100.';
            feedback.style.color = 'red';
        } else if (userGuess < targetNumber) {
            feedback.textContent = 'Too low! Try again.';
            feedback.style.color = 'blue';
        } else if (userGuess > targetNumber) {
            feedback.textContent = 'Too high! Try again.';
            feedback.style.color = 'blue';
        } else {
            feedback.textContent = `Congratulations! You guessed the number in ${attemptCount} attempts.`;
            feedback.style.color = 'green';
        }

        attempts.textContent = `Attempts: ${attemptCount}`;
        guessInput.value = '';
    });
});
