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

