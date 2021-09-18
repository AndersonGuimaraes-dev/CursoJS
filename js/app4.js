console.log(
    document.getElementById("fruta") //mostra a div
)
console.log(
    document.getElementById("fruta").innerHTML // mostra o conteúdo da div
)
console.log(
    document.getElementsByClassName("carro") // mostra as classes "carro", nesse caso as duas div
)
console.log(
    document.getElementsByClassName("carro")[1] // declara o índice do elememento, nesse caso exibe a segunda div com o conteúdo Camaro (lembrado que começa a contar do zero)
)
console.log(
    document.getElementsByClassName("carro")[0].innerHTML // mostra apenas o conteúdo da primeira div de classe com nome "carro" (índice [0]), nesse caso, Gol
)