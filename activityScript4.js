// Seleciona todos os blocos .dados
const dados = document.querySelectorAll(".dados");

// Para cada bloco, adicionamos os eventos nos botões
dados.forEach(dado => {

    const botaoMenos = dado.querySelector(".lower");
    const botaoMais  = dado.querySelector(".higher");
    const spanValor  = dado.querySelector("span");

    // Converte o texto atual em número
    let valor = Number(spanValor.textContent);

    botaoMais.addEventListener("click", () => {
        if(valor < 10){
            valor++;
        }
        spanValor.textContent = valor.toString().padStart(2, "0");
    });

    botaoMenos.addEventListener("click", () => {
        if (valor > 0) {
            valor--;
        }
        spanValor.textContent = valor.toString().padStart(2, "0");
    });

});






// aqui é para mudar a cor do robô
var index = 0
const robotronCores = ["robotron-azul.png", "robotron-amarelo.png", "robotron-branco.png", "robotron-preto.png", "robotron-rosa.png", "robotron-vermelho.png"]

function changeToLeft(){
    index--;
    if(index < 0){
        index = robotronCores.length - 1;
    }
    document.getElementById("robotron").src = robotronCores[index]
}

function changeToRight(){
    index++;
    if(index >= robotronCores.length){
        index = 0;
    }
    document.getElementById("robotron").src = robotronCores[index]
}

