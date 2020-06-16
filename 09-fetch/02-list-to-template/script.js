/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let temp = document.getElementsByTagName("template")[0];
    document.getElementById("run").addEventListener("click", () => {
        fetch('../../_shared/api.json')
            .then(response => response.json())
            .then(data => data.heroes)
            .then(heroes => heroes.forEach(hero => {
                let copyHero = temp.content.cloneNode(true);
                copyHero.querySelector(".name").innerHTML = hero.name;
                copyHero.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                copyHero.querySelector(".powers").innerHTML = hero.abilities;
                document.getElementById("target").appendChild(copyHero);
            }))
    })
})();