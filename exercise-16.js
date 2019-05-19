function totalDigitRekursif(angka) {
  var newAngka = angka.toString()
  if (newAngka.length > 1) {
    var temp = 0
    for (var i = 0; i < newAngka.length; i++) {
      var tmp = parseInt(newAngka[i])
      temp += tmp
    }
    return temp
  }else {
    return newAngka
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
