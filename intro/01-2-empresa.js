
/*
   Crie um programa que armazena dados da empresa 
   Rocketseat dentro de um objeto chamado empresa
*/

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programacao",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome}, está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)


