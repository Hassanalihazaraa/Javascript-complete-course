/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
function changeColor(buttons) {
    switch (buttons) {
        case "red":
            return document.body.style.backgroundColor = "red";
            break;
        case "green":
            return document.body.style.backgroundColor = "green";
            break;
        case "yellow":
            return document.body.style.backgroundColor = "yellow";
            break;
        case "blue":
            return document.body.style.backgroundColor = "blue";
            break;
        default:
            break;
    }
}

(function () {
    const actions = document.getElementsByClassName("actions");
    for (let i = 0; i < actions.length; i++) {
        actions[i].addEventListener("click", e => {
            let buttons = e.target.id;
            let result = changeColor(buttons);
            console.log(result);
        })
    }
})();