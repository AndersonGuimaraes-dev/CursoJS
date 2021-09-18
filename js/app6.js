console.log(
    document.querySelectorAll(".times")// retorna a nodelist com todas as div com class="times"
)
console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")// retonra todos os times dentro da id futebol-europeu
)
console.log(
    document.getElementById("futebol-europeu").querySelectorAll(".times")[2].innerHTML // retorna apenas "Juventus", o conteúdo dentro da div futebol-europeu de índice 2
)