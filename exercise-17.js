function kaliTerusRekursif(angka) {
  var newAngka = angka.toString()
  var hasil = '1'
  if (newAngka.length > 1) {
    for (var i = 0; i < newAngka.length; i++) {
      hasil *= newAngka[i]
    }
    angka = hasil
    return kaliTerusRekursif(angka)
  }else {
    return newAngka
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
