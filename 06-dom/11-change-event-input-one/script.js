/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.

(() => {
    document.getElementById("pass-one").addEventListener("keyup", () => {
        let password = document.getElementById("pass-one").value.length;
        document.getElementById("counter").innerHTML = password + "/10";
        if (password <= 10) {
            document.getElementById("pass-one").setAttribute("maxlength", "10");
        }
    })
})();