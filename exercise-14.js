function changeVocals (str) {
  var output =''
  for (var i = 0; i < str.length; i++) {
    let temp = str.charCodeAt(i);
    if (temp >= 65 && temp <= 90 ) {
      output +=String.fromCharCode(temp+1)
    }else if (temp >= 97 && temp <= 122) {
      output += String.fromCharCode(temp+1)
    }else {
      output += String.fromCharCode(temp)
    }
  }
  return output
}

function reverseWord (str) {
  var temp = ''
  for (var i = str.length-1; i >= 0; i--) {
    temp += str[i]
  }
  return temp
}

function setLowerUpperCase (str) {
  var tmp = ''
  for (var i = 0; i < str.length; i++) {
    var tampung = str.charCodeAt(i)
    if (tampung <= 122 && tampung >= 97) {
      tmp += String.fromCharCode(tampung - 32)
    }else if (tampung <= 90 && tampung >= 65) {
      tmp += String.fromCharCode(tampung + 32)
    }else {
      tmp += String.fromCharCode(tampung)
    }
  }
  return tmp
}

function removeSpaces (str) {
  var result = ''
  for (var i = 0; i < str.length; i++) {
    var x = str.charCodeAt(i)
    if ((x >= 65 && x <= 90) || (x <= 122 && x >= 97)) {
      result += String.fromCharCode(x)
    }
  }
  return result
}

function passwordGenerator (name) {
  var first = changeVocals(name)
  var second = reverseWord(first)
  var third = setLowerUpperCase(second)
  var fourth = removeSpaces(third)
  if (fourth.length < 5) {
    return ('Minimal karakter yang diinputkan adalah 5 karakter')
  }else {
    return fourth
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'// Bmfyfj//jfyfmB//JFYFMb
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
