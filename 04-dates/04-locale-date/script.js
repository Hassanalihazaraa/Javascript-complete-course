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
    let date = new Date();
    let day = date.getDate();
    let dayName = date.getDay() - 1;
    let month = date.getMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let dayWithNames = dayNames[dayName];
    let monthNames = ["January", "february", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthWithNames = monthNames[month];
    document.getElementById("target").innerHTML = dayWithNames + " " + day + " " + monthWithNames + " " + year + ", " + hour + "h" + minutes;
})();


