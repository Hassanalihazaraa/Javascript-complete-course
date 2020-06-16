/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let id = parseInt(document.getElementById("hero-id").value);

        fetch('../../_shared/api.json')
            .then(response => response.json())
            .then(data => data.heroes)
            .then(heroes => {
                console.table(heroes.filter(item => item.id !== id));

            }).catch = error => {
            console.error(error);
        }
    })
})();
