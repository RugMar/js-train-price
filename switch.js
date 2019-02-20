function OddSum {
  var myArr [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  var oddElementSum = 0;

  for (var i = 0; i < myArr.length; i++) {
    if ( i % 2 != 0){

      oddElementSum += myArray[i];
    }
  }
  return oddElementSum;
}

var oddElementSum = oddSum();
document.write(oddElementSum);
