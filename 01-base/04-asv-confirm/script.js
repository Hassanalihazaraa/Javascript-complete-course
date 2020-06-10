/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
  let questions =
    prompt("How old are you?\n") +
    " " +
    prompt("what is your gender?\n") +
    " " +
    prompt("Where do you live?\n");
  let isConfirmed = confirm("Are you sure\n" + questions);
  let isSure = true;
  while (isSure) {
    if (isConfirmed) {
      isSure = false;
    } else {
      questions =
        prompt("How old are you?\n") +
        " " +
        prompt("what is your gender?\n") +
        " " +
        prompt("Where do you live?\n");
      isConfirmed = confirm("Are you sure " + questions);
    }
  }
})();
