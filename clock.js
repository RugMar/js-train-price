var data = new Date();

var ora = data.getHours();

var minuti = data.getMinutes();

var secondi = data.getSeconds();

document.getElementById("ore").innerHTML = ora;
document.getElementById("minuti").innerHTML = minuti;
document.getElementById("secondi").innerHTML = secondi;
