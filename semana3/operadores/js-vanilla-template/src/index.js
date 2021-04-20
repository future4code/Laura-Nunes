// 1) a. false
// b. false
// c. true
// e. boolean

// 2) a. undefinied
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// Exercício 1 -

const idadeUsuario = Number (prompt("Qual é sua idade?"))
console.log(idadeUsuario)
const idadeAmigo = Number (prompt("Qual a idade do seu melhor amigo?"))
console.log(idadeAmigo)

console.log("Sua idade é maior do que a de seu melhor amigo?", idadeUsuario > idadeAmigo)
console.log("Diferença de idade: ", idadeUsuario - idadeAmigo)

// Exercício 2 - 

const numeroPar = Number (prompt("Insira um número PAR"))
console.log("resto da divisão", numeroPar % 2)

// c. O resultado é sempre 0. 
// d. Se o usuário inserir um número impar o resto será 1

// Exercício 3 -

const listaDeTarefas = []
const tarefasUsuario1 = prompt("Diga 3 tarefas que você precisa realizar hoje: 1- ")
const tarefasUsuario2 = prompt("Diga 3 tarefas que você precisa realizar hoje: 2- ")
const tarefasUsuario3 = prompt("Diga 3 tarefas que você precisa realizar hoje: 3- ")

listaDeTarefas.push(tarefasUsuario1)
listaDeTarefas.push(tarefasUsuario2)
listaDeTarefas.push(tarefasUsuario3)

console.log(listaDeTarefas)

const tarefaConcluida = prompt("Qual tarefa você já concluiu? (0, 1 ou 2?)")
listaDeTarefas.splice(tarefaConcluida, 1)

console.log(listaDeTarefas)

// Exercício 4 - 

const nomeUsuario = prompt("Qual o seu nome?")
const emailUsuario = prompt("Qual o seu email?")
const mensagem = `O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}!`
console.log(mensagem)










