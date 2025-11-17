var index = 0
const cores = [
    "robotron-vermelho.png",
    "robotron-preto.png",
    "robotron-rosa.png",
    "robotron-azul.png",
    "robotron-vermelho.png"
]

function atualizar() {
    document.getElementById("robotron").src = cores[index];
}

function changeRight() {
    index++;
    if (index >= cores.length) index = 0;
    atualizar();
}

function changeLeft() {
    index--;
    if (index < 0){
        index = cores.length - 1;
    } 
    atualizar();
}