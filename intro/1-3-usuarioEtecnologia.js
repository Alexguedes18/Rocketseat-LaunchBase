/*
    Desafio 1-3

    Criar um programa que armazena um array de usuários (objetos), 
    cada usuário tem um nome e sua tecnologia (novo array).
*/

const usuarios = [
    { nome: 'Carlos', tecnologia: ["HTML", "CSS"] },
    { nome: 'Jasmine', tecnologia: ["JavaScript", "CSS"] },
    { nome: 'Tauane', tecnologia: ["HTML", "Node.js"] }
];

    for (let usuario of usuarios) {
        console.log(`${usuario.nome} trabalha com ${usuario.tecnologia.join(', ')}`)
    }

// Buscar por tecnologia
function chegarSeUsuarioUsaCSS(usuario) {
    for(let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }
    return false
}

// Checar quais usuários usam CSS
for (let i = 0; i <usuarios.length; i++) {
    if(chegarSeUsuarioUsaCSS) {
        console.log (`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}