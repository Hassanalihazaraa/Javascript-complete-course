/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    //create table inside div with class name target
    let div = document.querySelector("#target");
    let table = div.appendChild(document.createElement("TABLE"));
    //create 10 rows inside table
    for (i = 1; i <= 10; i++) {
        let row = table.appendChild(document.createElement("tr"));
        for (j = 1; j <= 10; j++) {
            let td = row.appendChild(document.createElement("td"));
            td.appendChild(document.createTextNode(i * j));
        }
    }
    console.log(table)
})();
