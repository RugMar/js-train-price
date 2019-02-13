var number = prompt("Quanti kilometri?");

alert(number * 0.27);

var age = prompt("La tua età?")

if (age < 18){
alert((number * 0.27) - ((number * 0.27) * (20 / 100)))
}

if (age > 65){
  alert((number * 0.27) - ((number * 0.27) * (40 / 100)))
}
