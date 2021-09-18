console.log(
    document.getElementById("p1").innerHTML//exibir o conteúdo
)
// o inner serve para criar um novo conteúdo, exemplo:
document.getElementById("p1").innerHTML = "Novo conteúdo"
//aqui será mostrado no console "Olá, mundo!", mas na página será exibido "Novo conteúdo"

//usando uma variável também é possível, exemplo:
var paragrafo = document.getElementById("p1")
paragrafo.innerHTML = "Novo conteúdo2"// como a variável "parágrafo" já é igual a document.getElementById("p1"), basta colocar a variável.innerHTML para exibir o conteúdo
// style
paragrafo.style.color = "red" // muda a cor do texto do p1
paragrafo.style.backgroundColor = "#333" //muda a cor de fundo
paragrafo.style.height = "400px" //altera a altura do p1

//usando img e alterando os atributos
var imagem = document.getElementById("img")
imagem.src = "img/html.jpg" //insere a imagem
imagem.width = "30" // altera a largura para 30px
imagem.height = "30" // altera a altura para 30px
imagem.alt = "Teste de imagem" // insere o texto alternativo