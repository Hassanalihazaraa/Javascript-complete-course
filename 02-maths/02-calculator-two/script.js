/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//calculations
function test(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "addition":
      return firstNumber + secondNumber;
    case "substraction":
      return firstNumber - secondNumber;
    case "multiplication":
      return firstNumber * secondNumber;
    case "division":
      return firstNumber / secondNumber;
    default:
  }
}

//getting input and selecting the buttons
(() => {
  const operators = document.getElementsByClassName("operator");
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", e => {
      let operator = e.target.id;
      let firstNumber = parseFloat(document.getElementById("op-one").value);
      let secondNumber = parseFloat(document.getElementById("op-two").value);
      let result = test(operator, firstNumber, secondNumber);
      alert(result);
    });
  }
})();