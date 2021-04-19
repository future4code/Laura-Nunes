// 1 - 10 e 10, 5
// 2 - 10, 10, 10

// let nome 
// let idade
// console.log(typeof nome)
// console.log(typeof idade)

// d) foi impresso "undefined" pela ausencia de uma atribuição

const nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")

console.log(nome)
console.log(idade)
console.log(typeof nome)
console.log(typeof idade)

// e) ambas foram apontadas como string. Isso acontece porque, mesmo a idade tendo um resultado numérico, 
// o programa o interpreta como string por estar dentro de uma questão com "".

console.log("Olá, seu nome é " + nome + ", " + "você tem " + idade + " anos.")

let musicaPreferida = prompt("Qual sua música preferida?")
console.log(musicaPreferida)
let comidaPreferida = prompt("Qual sua comida preferida?")
console.log(comidaPreferida)
let corPreferida = prompt("Qual sua cor preferida?")
console.log(corPreferida)
let diaAniversario = prompt("Em que dia você faz aniversário?")
console.log(diaAniversario)
let time = prompt("Pra qual time você torce?")
console.log(time)

let comidaArray = ["macarrão", "arroz e feijão", "abóbora cabotia", "bolo de banana", "temaki"]
console.log(comidaArray)
console.log("Essas são minhas comidas preferidas: " + comidaArray)

let comidaPreferidaUsuario = prompt("Qual sua comida preferida?")
console.log(comidaArray[0], comidaPreferidaUsuario, comidaArray[2], comidaArray[3], comidaArray[4])

let arrayPerguntas = ["Já tomou banho?", "Escovou os dentes?", "Terminou os exercícios de js?"]
let arrayRespostas = [true, true, false]
console.log(arrayPerguntas[0], arrayRespostas[0], arrayPerguntas[1], arrayRespostas[1], arrayPerguntas[2], arrayRespostas[2])
    
  














