/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let guess = prompt("Please guess a number between 1 and 100");
    let guessNumber = Math.floor(Math.random() * 100 + 1);
    while (guess !== guessNumber) {
        if (guess > guessNumber) {
            alert("Your number is greater than the guess number");
            guess = prompt("try again");
        } else if (guess < guessNumber) {
            alert("Your number is smaller than the guess number");
            guess = prompt("try again");
        } else {
            alert("congratulations!You got it right");
            break;
        }
    }
})();
