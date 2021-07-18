// A) o código aponta erro pois esperava uma string e não um número
const minhaString: string = 33

// B) colocando um pipe e atribuindo também o valor de string
const meuNumero: number | string = "dsfsdf"

// C) e D)

enum CORES_DO_ARCOIRIS {
    AZUL = "AZUL",
    VERDE = "VERDE",
    VERMELHO = "VERMELHO",
    AMARELO = "AMARELO"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: CORES_DO_ARCOIRIS
}

const pessoa1: pessoa = {
    nome: "Laura",
    idade: 28,
    corFavorita: CORES_DO_ARCOIRIS.AZUL
}

const pessoa2: pessoa = {
    nome: "Thalita",
    idade: 21,
    corFavorita: CORES_DO_ARCOIRIS.VERDE
}



const pessoa3: pessoa = {
    nome: "Gal",
    idade: 75,
    corFavorita: CORES_DO_ARCOIRIS.VERMELHO
}