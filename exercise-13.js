function sorting(arrNumber) {
  var len = arrNumber.length
  var swapped;
  do {
    swapped = false
    for (var i = 0; i < len; i++) {
      if (arrNumber[i] > arrNumber[i+1]) {
        let temp = arrNumber[i]
        arrNumber[i] = arrNumber[i+1]
        arrNumber[i+1] = temp
        swapped = true
      }
    }
  }while (swapped);
  return arrNumber
}

function getTotal(arrNumber) {
  var length = arrNumber.length-1
  var tmp = 0
  for (var i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] == arrNumber[length]) {
      tmp += 1
    }
  }
  if (arrNumber.length != 0) {
    return ('angka paling besar adalah '+arrNumber[length]+' dan jumlah kemunculan sebanyak '+tmp+' kali')
  }else {
    return "''"
  }
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
