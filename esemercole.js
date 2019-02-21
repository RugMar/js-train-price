function isPresent(arr, elem){

var finded = false;
for (var i = 0; i < arr.length; i++) {
  if (elem == arr[i]) {
    finded = true;
  }
}

return finded;
}


function getRandomElementWOSkipped(arr, skipped){
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

var rndElem = getRandomElementWOSkipped(values , skipped);
document.getElementById("log").innerHTML = rndElem;
document.getElementById("log").innerHTML = rndElem;


////////////////////////////////////////////////////
