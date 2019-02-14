var persone = ["rickymar@gmail.it",
"rojumin@gmail.it","denilab@gmail.it",
"rockymur@gmail.it"];

var verifica = prompt("dimmi la tua mail");

var trovato = false;

for (var i = 0; i < persone.length; i++) {
  var persona = persone[i];

  if  (persona == verifica) {
    trovato = true;
  }
}

if (trovato) {
  alert("trovato");
}

else {
  alert("non trovato");
}
