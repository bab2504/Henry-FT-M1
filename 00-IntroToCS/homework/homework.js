'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var array = num.split('')
  var sum=0

  for(var i=0; i<array.length; i++) {
    sum = sum + Math.pow(2, array.length-1-i) * array[i]
  }
  
  return sum;

}

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}