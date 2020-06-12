/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        const input1 = document.getElementById("pass-one").value;
        const input2 = document.getElementById("pass-two").value;
        if (input1 !== input2) {
            let error = document.getElementById("pass-one");
            let error2 = document.getElementById("pass-two");
            error.classList.add("error");
            error2.classList.add("error");
            console.log("Your passwords don't match");
        }
        else {
            document.getElementById("pass-one").style.borderColor = "green";
            document.getElementById("pass-two").style.borderColor = "green";
            console.log("Your passwords match");
        }
    })
})();
