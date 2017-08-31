var fourThousand
var numeral = ''
function calculateNumerals (input) {

  var calculation = input

  while (calculation > 0) {
    switch (calculation !== 0) {
      case calculation >= 1000:
      console.log("before "+calculation)
        numeral = numeral + "M"
        calculation -= 1000
        console.log("after "+calculation)
        break;
      case calculation >= 900 && calculation < 1000:
      console.log("before "+calculation)
        numeral = numeral + "CM"
        calculation -= 900
        console.log("after "+calculation)
        break;
      case calculation >= 500:
      console.log("before "+calculation)
        numeral = numeral + "D"
        calculation -= 500
        console.log("after "+calculation)
        break;
      case calculation >= 400 && calculation < 500:
      console.log("before "+calculation)
        numeral = numeral + "CD"
        calculation -= 400
        console.log("after "+calculation)
        break;
      case calculation >= 100:
      console.log("before "+calculation)
        numeral = numeral + "C"
        calculation -= 100
        console.log("after "+calculation)
        break;
      case calculation >= 90 && calculation < 100:
      console.log("before "+calculation)
        numeral = numeral + "XC"
        calculation -= 90
        console.log("after "+calculation)
        break;
      case calculation >= 50:
      console.log("before "+calculation)
        numeral = numeral + "L"
        calculation -= 50
        console.log("after "+calculation)
        break;
      case calculation >= 40 && calculation < 50:
        numeral = numeral + "XL"
        calculation -= 40
        break;
      case calculation >= 10:
      console.log("before "+calculation)
        numeral = numeral + "X"
        calculation -= 10
        console.log("after "+calculation)
        break;
      case calculation == 9 && calculation < 10:
      console.log("before "+calculation)
        numeral = numeral + "IX"
        calculation -= 9
        console.log("after "+calculation)
        break;
      case calculation >= 5:
      console.log("before "+calculation)
        numeral = numeral + "V"
        calculation -= 5
        console.log("after "+calculation)
        break;
      case calculation == 4 && calculation < 5:
      console.log("before "+calculation)
        numeral = numeral + "IV"
        calculation -= 4
        console.log("after "+calculation)
        break;
      case calculation >= 1:
        console.log("before "+calculation)
        numeral = numeral + "I"
        calculation -= 1
        console.log("after "+calculation)
        break;
  }
}
}



document.getElementById('convertButton').addEventListener('click', function() {

    fourThousand = document.getElementById('numericValue').value
    calculateNumerals(fourThousand)

    document.getElementById('romanValue').value = numeral
    numeral =''
})
