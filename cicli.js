var dado1 = Math.floor (Math.random() * 6) + 1;
var dado2 = Math.floor (Math.random() * 6) + 1;

if (dado1 > dado2) {
  alert("dado1 vince")
}

if (dado2 > dado1) {
  alert("dado2 vince")
}

if (dado1 > dado2) {
  alert("pareggio")
}
