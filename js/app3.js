console.log(
    screen.width // screen é um elemento que está dentro do objeto window (o window não precisa ser colocado antes do método)
)
/*
O BOM está relacionado com os objetos do navegador da web, são eles:
sreen / navigator / location / history / frame[] / etc.
Dentro do window tem um outro elemento que é o document que está relacionado com os elementos do documento (HTML, nesse caso), chamado de DOM:
DOCUMENT OBJECTS MODEL - referente aos objetos da página HTML
*/

/*
basta colocar o elemento. (ex: screen.) que logo aparecerá uma lista de métodos e outros elementos que pertencem ao elemento usado
screen.width - informa a largura do navegador
screen.height - informa a altura do navegador
navigator.language - informa o idioma do navegador
location href= - informa um endereço de redirecionamento
history.back() - volta à pagina anterior
history.forward() - vai para a próxima página

*/
console.log(
navigator.language
)

/*
lista de elementos:
screen - tela
navigator - navegador
location - localização de métodos e objetos, por exemplo. método href em location.href = https://google.com.br (a página será redireionada para o goole, mesmo eu abrir o olaMundo4, a página será redirecionada para o Google)
history - histórico de páginas visitas (pode ser usado para criar botões de voltar e adiantar de acordo com o histórico de páginas visitadas ver o exemplo dos botões)
*/
function voltar(){
    history.back() // volta à página anterior - precisa ter uma página visitada antes
}
function adiantar(){
    history.forward() // vai á próxima página - precisa ter uma próxima página no histórico de navegação
}