/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let first = document.getElementById('part-one');
    let second = document.getElementById('part-two');
    let third = document.getElementById('part-three');
    let four = document.getElementById('part-four');


    function addNumber(buttonsId, total, output) {
        switch (buttonsId) {
            case "part-one":
                first.innerHTML < 499 ? first.innerHTML++ : first.innerHTML = "460";
                output.innerHTML = total;
                return total;
            case "part-two":
                second.innerHTML < 99 ? second.innerHTML++ : second.innerHTML = "0";
                second.innerHTML < 10 ? second.innerHTML = "0" + second.innerHTML : second.innerHTML;
                output.innerHTML = total;
                return total;
            case "part-three":
                third.innerHTML < 99 ? third.innerHTML++ : third.innerHTML = "0";
                third.innerHTML < 10 ? third.innerHTML = "0" + third.innerHTML : third.innerHTML;
                output.innerHTML = total;
                return total;
            case "part-four":
                four.innerHTML < 99 ? four.innerHTML++ : four.innerHTML = "0";
                four.innerHTML < 10 ? four.innerHTML = "0" + four.innerHTML : four.innerHTML;
                output.innerHTML = total;
                return total;
        }
    }

    const buttons = document.getElementsByClassName("actions");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", e => {
            let buttonsId = e.target.id;
            console.log(buttonsId);
            let total = '0' + first.innerHTML + second.innerHTML + third.innerHTML + four.innerHTML;
            let output = document.getElementById('target');
            console.log(addNumber(buttonsId, total, output));
        })
    }
})
();