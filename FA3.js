function getRandomNumber() {
    return Math.ceil(Math.random() * 20);
}

var n1 = getRandomNumber();
var n2 = getRandomNumber();
var n3 = getRandomNumber();

document.getElementById("num1").innerText = n1;
document.getElementById("num2").innerText = n2;
document.getElementById("num3").innerText = n3;

var maxNum = Math.max(n1, n2, n3);
var chosen = "";
if (n1 === maxNum) {
    chosen = "Dan Heng: Imbibitor Lunae";
}

if (n2 === maxNum) {
    if (chosen.length > 0) {
        chosen = chosen.concat(", Sunday");
    } else {
        chosen = "Sunday";
    }
}
if (n3 === maxNum) {
    if (chosen.length > 0) {
        chosen = chosen.concat(", Luocha");
    } else {
        chosen = "Luocha";
    }
}

document.getElementById("mostused").innerText = chosen.concat(" (", maxNum, ")");

var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var letter = n1 <= 26 ? alphabet[n1 - 1] : "Z";
document.getElementById("letter").innerText = letter;

var totalMinutes = n2 * n3;
var hours = Math.floor(totalMinutes/60);
var minutes = totalMinutes % 60; 

document.getElementById("time").innerText = totalMinutes + " minutes " + "(" + hours + " hours " + minutes + " minutes.)";