/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        fetch('../../_shared/api.json')
            .then(response => response.json())
            .then(data => data.heroes)
            .then(heroes => heroes.forEach(hero => {
                let temp = document.getElementById("tpl-hero");
                let id = parseInt(document.getElementById("hero-id").value);
                let copyHero = temp.content.cloneNode(true);
                if (id === hero.id) {
                    copyHero.querySelector(".name").innerHTML = hero.name;
                    copyHero.querySelector(".alter-ego").innerHTML = hero.alterEgo;
                    copyHero.querySelector(".powers").innerHTML = hero.abilities;
                    document.getElementById("target").appendChild(copyHero);
                }
            }));
    })
})();