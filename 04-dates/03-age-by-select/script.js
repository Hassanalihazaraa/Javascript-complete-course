/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let day = document.getElementById("dob-day").value;
        let month = document.getElementById("dob-month").value;
        let year = document.getElementById("dob-year").value;
        //calcualte age
        function birthDay(day, month, year) {
            let currentDate = new Date();
            let currentDay = currentDate.getDate() - day;
            let currentMonth = currentDate.getMonth() - month + 1;
            let currentYear = currentDate.getFullYear() - year;
            console.log(currentDay, currentMonth, currentYear);
            if (currentMonth < month || currentMonth === month && currentDay < day) {
                --currentYear;
            }
            return currentYear;
        }
        alert(birthDay(day, month, year));
    })
})(); 