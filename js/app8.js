// creatElement - serve para criar elementos
console.log(
    document.createElement("div"), //cria uma div - a vírgula é necessário para inserir outro document em seguida
    document.createElement("p") // cria parágrafo
)
var imagem = document.createElement("img")
imagem.src ="img/js.png"

var paragrafo = document.createElement("p")
paragrafo.innerHTML = "Olá, pessoal"

console.log(
    imagem, paragrafo
)