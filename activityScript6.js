const tabela = document.getElementById("body")
const adicionar = document.getElementById("add")

function getDataFromFields(){
    const informations = []
    const data = document.getElementById("data").value
    const valor = document.getElementById("valor").value
    const categoria = document.getElementById("categoria").value
    informations.push(categoria, valor, data)
    return informations
}

function createTr(){
    const newTr = document.createElement("tr")
    const informations = getDataFromFields()
    for(let i = 0; i < informations.length; i++){
        let newTd = document.createElement("td")
        newTd.textContent = informations[i]
        newTr.appendChild(newTd)
    }
    return newTr    
}

function addTrToTable(){
    const tr = createTr()
    tabela.appendChild(tr)
}

adicionar.addEventListener('click', addTrToTable())