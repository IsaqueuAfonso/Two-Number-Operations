let requestNumberOne = Number(prompt("Digite o primeiro número"))
let requestNumberTwo = Number(prompt("Digite o segundo número"))

const sum = requestNumberOne + requestNumberTwo
const subtraction = requestNumberOne - requestNumberTwo
const multiplication = requestNumberOne * requestNumberTwo
const division = requestNumberOne / requestNumberTwo
const restOfDivision = requestNumberOne % requestNumberTwo
function ImpaAndEven(a, b) {
  let sum = a + b
  if (sum % 2 === 0) {
    return `A soma entre ${requestNumberOne} e ${requestNumberTwo} é par`
  } else {
    return `A soma entre ${requestNumberOne} e ${requestNumberTwo} é impa`
  }
}
function different(a, b) {
  if (a === b) {
    return "O números inseridos são iguais"
  } else {
    return "O números inseridos são diferentes"
  }
}

alert("Soma: " + sum)
alert("Subtração : " + subtraction)
alert("Multiplicação : " + multiplication)
alert("Divisão: " + division)
alert("Resto da Divisão: " + restOfDivision)
alert(ImpaAndEven(requestNumberOne, requestNumberTwo))
alert(different(requestNumberOne, requestNumberTwo))
