/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        const year = document.getElementById("year").value;
        const calculateFriday = (year) => {
            for (let month = 1; month < 12; month++) {
                const date = new Date(year, month, 13);
                if (date.getDay() === 5) {
                    const monthNames = ["January", "february", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    console.log(alert(monthNames[month]));
                }
            }
        }
        return calculateFriday(year);
    })
})();
