
/*
Crie um programa com um objeto para armazenar dados de um
programador como nome, idade e tecnologias que trabalha.
*/

const programador = {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
        {nome: "C++", especialidade: "Desktop"},
        {nome: "JavaScrip", especialidade: "Web/Mobile"}
    ]
};

console.log(`O usuario ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
