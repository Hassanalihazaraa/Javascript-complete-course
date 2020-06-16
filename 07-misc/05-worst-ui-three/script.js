/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let first = document.getElementById('part-one')
    let second = document.getElementById('part-two')
    let third = document.getElementById('part-three')
    let fourth = document.getElementById('part-four')

    let rand1 = 0;
    let rand2 = 0;
    let rand3 = 0;
    let rand4 = 0;

    let output = document.getElementById('target');

    function random1() {
        rand1 = Math.floor(Math.random() * (first.getAttribute("data-min") - first.getAttribute("data-max"))) + 499;
        first.value = rand1;
    }

    function random2() {
        rand2 = Math.floor(Math.random() * (second.getAttribute("data-min") - second.getAttribute("data-max"))) + 99;
        rand2.innerHTML < 10 ? rand2.innerHTML = "0" + rand2.innerHTML : rand2.innerHTML;
        second.value = rand2;
    }

    function random3() {
        rand3 = Math.floor(Math.random() * (third.getAttribute("data-min") - third.getAttribute("data-max"))) + 99;
        rand3.innerHTML < 10 ? rand3.innerHTML = "0" + rand3.innerHTML : rand3.innerHTML;
        third.value = rand3;
    }

    function random4() {
        rand4 = Math.floor(Math.random() * (fourth.getAttribute("data-min") - fourth.getAttribute("data-max"))) + 99;
        rand4.innerHTML < 10 ? rand4.innerHTML = "0" + rand4.innerHTML : rand4.innerHTML;
        fourth.value = rand4;
    }

    let firstInterval = setInterval(random1, 50);
    let secondInterval = setInterval(random2, 50);
    let thirdInterval = setInterval(random3, 50);
    let fourthInterval = setInterval(random4, 50);

    function addNumber(buttonsId, total) {
        switch (buttonsId) {
            case "fix-part-one":
                clearInterval(firstInterval);
                output.innerHTML = total;
                return rand1;
            case "fix-part-two":
                clearInterval(secondInterval);
                output.innerHTML = total;
                console.log(rand2)
                return rand2;
            case "fix-part-three":
                clearInterval(thirdInterval);
                output.innerHTML = total;
                return rand3;
            case "fix-part-four":
                clearInterval(fourthInterval);
                output.innerHTML = total;
                return rand4;
        }
    }

    const buttons = document.getElementsByClassName("field");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", e => {
            let buttonsId = e.target.id;
            console.log(buttonsId);
            let total = '0' + rand1 + rand2 + rand3 + rand4;
            console.log(addNumber(buttonsId, total));
        })
    }
})
();
