// EXERCÍCIO 1
// a) 10 e 50
// b) nada

// EXERCÍCIO 2
// a) Darvas e Caio, pois o código pede a exibição do conteúdo do array que for menor que a posição 2.
// b) Amanda e Caio

// EXERCÍCIO 3
// a função seleciona os números pares de um array e o multiplica por seu próprio valor, gerando
// um novo array com os resultados. Um nome melhor seria dobrarNumerosPares

// EXERCÍCIO 4

// a)
// function imprimeDadosLaura() {
//     console.log("Eu sou Laura, tenho 27 anos, moro em Indaiatuba e sou estudante")
// }

// imprimeDadosLaura()

// b)

function imprimeDadosUsuario(nome, idade, cidade, souOuNao) {
 
    if (souOuNao) {
        souOuNao = "sou" 
    } else {
        souOuNao = "não sou"
    }
        
  console.log(
    `Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e ${souOuNao} estudante`
  );
}

imprimeDadosUsuario("Letícia", "23", "SP", true);

