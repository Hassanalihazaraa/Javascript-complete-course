/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        const commentTable = (error, res) => {
            error ? console.log(error) : console.table(res);
        }

        const postsTable = (error, res) => {
            if (error) {
                console.log(error);
            } else {
                console.table(res);
                window.lib.getComments(res, commentTable);
            }
        }
        window.lib.getPosts(postsTable);
    })
})()
