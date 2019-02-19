var str = "itopinonavevanonipoti";

function isParlindrome(word) {

  var lng = word.length;

  for (var i = 0; i < lng/2; i++) {

    var revI = lng - i - 1;

    document.getElementById("ind1").innerHTML = i + ":" + word[i] + "<br>";
    document.getElementById("ind2").innerHTML = revI + ":" + word[revI] + "<br>";
  }

  return false;
}

var isPal = isParlindrome(str);

// if (isPal) {
//   document.getElementById("log").innerHTML = parola + "è palindroma";
// } else {
//   document.getElementById("log").innerHTML = parola + "non è palindroma";
// }
