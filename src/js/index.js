// Objetivo 1 - Quando passar o mouse em cima do personagem na listagem, devemos seleciona-lo

// Passo 1 - Pegar os personagens para poder verificar quando o usuário passar o mouse em cima de um deles
const personagens = document.querySelectorAll('.personagem');

// Passo 2 - Adicionar a classe no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

if(window.innerWidth < 450) {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Passo 3 - Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
const personagemSelecionado = document.querySelector('.selecionado');
console.log(personagemSelecionado);
personagemSelecionado.classList.remove('selecionado');

personagem.classList.add('selecionado');

// Objetivo 2 - Quando passas o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

// Passo 1 - Pegar o elemento do personagem grande para adicionar as informações nele
const imagemPersonagemGrande = document.querySelector('.personagem-grande');

// Passo 2 - Alterar a imagem do personagem grande
const idPersonagem = personagem.attributes.id.value;
imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

// Passo 3 - Alterar o nome do personagem grande
const nomePersonagem = document.getElementById('nome-personagem');
nomePersonagem.innerText = personagem.getAttribute('data-name');


// Passo 4 - Alterar a descrição do personagem
const descricaoPersonagem = document.getElementById('descricao-personagem');
descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
});



