function getRandomElementSkipped(arr, skipped){
  var trovato = false;
  var rndElem;
  while (trovato == true){
  var rndElem = getRandomElement(arr);

  for (var i = 0; i < skipped.length; i++) {
    if (rndElem == skipped[i]){
      trovato = true;
    }
  }
}
}

var values = [1, 2, 3, 4, 5, 6, 7,];
var skipped = [5, 6, 7, 8, 9, 10];

var rndElem = getRandomElementSkipped(values , skipped);
document.getElementById("log").innerHTML = rndElem;
document.getElementById("log").innerHTML = rndElem;
