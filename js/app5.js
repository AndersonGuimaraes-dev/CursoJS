console.log(
    document.getElementsByTagName("div") // usa pelo nome da tag, nesse caso, div, vai pegar todas div
)
console.log(
    document.getElementsByTagName("div")[0]// usa apenas a div de índice 0, a primeira div
)
console.log(
    document.getElementsByTagName("div")[1].innerHTML // apenas o conteúdo da div de índice 1
)
console.log(
    document.getElementsByTagName("br") // mesmo tendo apenas 1 br apresentará o collection, porque não foi informado o índice
)
  console.log(
      document.querySelector("div") //pega sempre o primeiro que ele encontrar que pode ser uma div, br, p, class, encontrar
      //nesse caso, apesar de ter duas div, só retorna a primeira div
  )
  console.log(
      document.querySelector(".div2")// sleciona a classe div2 porque ela foi declarada
  )
  console.log(
      document.querySelector("p")//retorna apenas o primeiro parágrafo
  )