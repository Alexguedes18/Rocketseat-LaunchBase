/* ===================================================
    Cálculo de aposentadoria

    cria um programa para calcular a aposentadoria de uma pessoa.

    Obs: Esse cálculo é fictício, dentro da aposentadoria 
    existem muitos outros fatores para serem levados em
    conta.
=======================================================*/
const nome = 'Silvana'
const sexo = 'F'
const idade = 48
const contribuicao = 23

const calContribuicao = idade + contribuicao

// Variaveis que irão retornar true and false
const manAposentar = sexo == 'M' && contribuicao >= 35 && calContribuicao >= 95
const womanAposentar = sexo == 'F' && contribuicao >= 30 && calContribuicao >= 85

if(manAposentar || womanAposentar) {
    console.log(`${nome}, Você pode aposentar!`)
} else {
    console.log(`${nome}, Você não pode se aposentar!`)
}