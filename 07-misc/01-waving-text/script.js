/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let fontSizes = ["1.5rem", "1.8rem", "2rem", "2.2rem", "2.4rem"];
    let target = document.getElementById('target');
    let text = target.innerHTML;
    let textArray = [];
    for (let i = 0; i < text.length; i++) {
        let textArr = target.innerHTML.charAt(i);
        textArray.push(textArr);
    }
    let fontSize = 0;

    function textWave() {
        function changeTextSize() {
            if (fontSize < 4 && up) {
                fontSize++;
            }
            if (fontSize > 0 && up === false) {
                fontSize--;
            }
            if (fontSize === 4) {
                up = false;
            }
            if (fontSize === 0) {
                up = true;
            }
        }

        let up = true;
        target.innerHTML = "";
        for (let i = 0; i < textArray.length; i++) {
            target.innerHTML += '<span style="font-size: ' + fontSizes[fontSize] + ';">' + textArray[i] + '</span>';
            if (fontSize < 4 && up === true) {
                fontSize++;
            }
            if (fontSize > 0 && up === false) {
                fontSize--;
            }
            if (fontSize === 4) {
                up = false;
            }
            if (fontSize === 0) {
                up = true;
            }
        }
        setTimeout(textWave, 1000);
    }

    textWave();
})();
/*
let text = document.getElementById("target");
text.forEach(target => {
    target.innerHTML = target.textContent.split("").map((text, wave) =>
        `<span style="transition-delay: ${wave * 25}ms">${text}</span>`).join("");
})
let styles = document.getElementById("target").createAttribute("style");
styles.innerHTML = `
#style {
display: inline-block;
transform: translateY(-30px);
transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);    
}`;

//document.getElementById("target").setAttribute("styles", "");

 */

