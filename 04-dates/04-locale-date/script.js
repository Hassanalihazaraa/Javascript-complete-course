/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const date = new Date();
    const day = date.getDate();
    const dayName = date.getDay() - 1;
    const month = date.getMonth();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const dayWithNames = dayNames[dayName];
    const monthNames = ["January", "february", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthWithNames = monthNames[month];
    document.getElementById("target").innerHTML = dayWithNames + " " + day + " " + monthWithNames + " " + year + ", " + hour + "h" + minutes;
})();


