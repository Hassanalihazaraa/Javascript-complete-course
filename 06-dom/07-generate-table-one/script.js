/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //create table inside div with class name target
    let div = document.querySelector("#target");
    div.appendChild(document.createElement("TABLE"));
    //create 10 rows inside table
    for (i = 0; i < 10; i++) {
        document.querySelector("table").appendChild(document.createElement("tr"));
    }
    //create td foreach rows 
    let rows = document.querySelectorAll("tr");
    rows.forEach(row => {
        row.appendChild(document.createElement("td"));
    })
})();
