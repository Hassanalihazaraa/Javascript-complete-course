/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
        let randomNumbers = [];
        for (let i = 0; i < 10; i++) {
            randomNumbers[i] = Math.floor(Math.random() * 100);
            console.log(document.getElementById("n-" + (i + 1)).innerHTML = randomNumbers[i]);
        }
        //sorting number and then getting the smallest number
        let min = randomNumbers.sort((a, b) => a - b);
        document.getElementById("min").innerHTML = Math.min(min[0]);

        //sorting number and then getting the smallest number
        let max = randomNumbers.sort((a, b) => a - b);
        document.getElementById("max").innerHTML = Math.min(max[9]);

        //sum of all number
        let sum = randomNumbers.reduce((min, max) => min + max, 0);
        document.getElementById("sum").innerHTML = sum;

        //average of all numbers
        let average = sum / randomNumbers.length;
        document.getElementById("average").innerHTML = average;
    })
})();
