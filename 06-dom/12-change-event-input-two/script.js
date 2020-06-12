/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("pass-one").addEventListener("keydown", () => {
        document.getElementById("pass-one").setAttribute("maxlength", "8");
        let password = document.getElementById("pass-one").value;
        const regex = RegExp("[0-9].*[0-9]");
        const passwordMatch = regex.test(password);
        passwordMatch ? document.getElementById("validity").innerHTML = "ok" : document.getElementById("validity").innerHTML = "Not ok";
    })
})();