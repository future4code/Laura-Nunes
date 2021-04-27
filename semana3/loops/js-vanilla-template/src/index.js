// EXERCÍCIO 1
// o código está gerando um loop onde o valor de i é somado a seu valor atual, até o valor de i ser igual ou 
// maior que 5. O console exibirá 10.

// EXERCÍCIO 2
// a) serão impressos os números maiores que 18 conforme o loop passar por eles.
// b) sim, só trocar o número do IF por 9, por exemplo. Nesse caso exibiriam todos os números maiores
// que 9 no array (todos).
// DESAFIO: 0
// 00
// 000
// 0000

// EXERCÍCIO 3
// a)
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of array) {
//     console.log(numero)
// }

// b)
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of array) {
//    const elemento =  numero / 10
//      console.log(elemento)
//  }
  
// c) 
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const arrayPar = [] 
// for (let numero of array) {
//   if (numero % 2 === 0) {
//     arrayPar.push(numero)
//   }
// }
// console.log(arrayPar)

// d)
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let index = 0

//   for (let number of array) {
//     const numeroDoElemento = number
    
//     const mensagem = `O elemento do índex ${index} é: ${numeroDoElemento}` 
//     console.log(mensagem)
    
//     index+=1
// }

// e) 
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let valorMaximo = 0
let valorMinimo = Infinity

for (let number of array) {
    if (number > valorMaximo) {
        valorMaximo = number
    }
    if (number < valorMinimo) {
        valorMinimo = number
    }
}

const mensagem = `O maior número é ${valorMaximo} e o menor é ${valorMinimo}` 
    console.log(mensagem)
