// EXERCÍCIO 1
// O código foi feito para testar se um número é par ou ímpar. Se for par, imprime "passou no teste". 
// Se for ímpar, imprime "não passou no teste".

// EXERCÍCIO 2
// a) para exibir o preço de frutas para o usuário.
// b) "O preço da fruta Maçã é R$ 2.25"
// c) "O preço da fruta Pêra é R$ 5"

// EXERCÍCIO 3
// a) A primeira linha pede ao usuário para inserir um primeiro número e o transforma em Number 
// ao invés de deixá-lo como string.
// b) Se o usuário digitar "10" a mensagem será "Esse número passou no teste". Se digitar "-10", gerará um erro
// pois o código pra essa alternativa está errado.
// c) sim, o erro está na montagem do código. falta a informação "else" para o código redirecionar caso o argumento 
// contido no "if" não seja cumprido, e o ultio "console.log" deveria estar dentro do colchetes, ficando de 
// forma correta assim:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
//     } else {
//         let mensagem = "Essa mensagem é secreta!!!"
//         console.log(mensagem)
// }

// EXERCÍCIO 5

// const turnoAluno = prompt("Digite o seu turno: M (Matutino) ou V (Vespertino).")

// if(turnoAluno === "M") { 
//     console.log("Bom dia!")
//     } else {
//         let mensagem = ("Boa tarde!")
//         console.log(mensagem)
//     }

// EXERCÍCIO 6

// const turnoAluno = prompt("Digite o seu turno: M (Matutino) ou V (Vespertino).")

// switch(turnoAluno) {
//     case "M":
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     default:
//         console.log("Insira apenas uma das alternativas")        
// }

//EXERCÍCIO 7

const generoFilme = prompt("Qual o gênero do filme que você quer assistir?")
const valorIngresso = Number (prompt("Qual o valor do ingresso?"))

if(generoFilme === "Fantasia" && valorIngresso <= 15) {
     console.log("Bom filme!")
        } else {
            console.log("Escolha outro filme ):")
    }











