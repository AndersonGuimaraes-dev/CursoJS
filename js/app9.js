var p = document.createElement("p")
p.innerHTML = "Olá, pessoal"

//appendChild insere um elemento filho num elemento pai, nesse caso, como inserir um parágrafo numa div
document.getElementById("conteudo").appendChild(p)

// outro eexemplo
var img = document.createElement("img")
img.src = "img/html.jpg"
document.getElementById("conteudo").appendChild(img)//insere o conteúdo da variável imagem

// removeChild - remove o elemento filho
/*
será colocado em comentário para poder ficar a imagem na tela, se remover o comentário, também removerá a imagem*/
document.getElementById("conteudo").removeChild(img)//remove o conteúdo da variável imagem
