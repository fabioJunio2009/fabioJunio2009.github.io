const tabela = document.getElementById("tabela")
const adicionar = document.getElementById("add")
const calcular = document.getElementById("calc")

function getDataFromFields(){
    const informations = []
    const valorData = document.getElementById("campo-data").value
    const dia = valorData.slice(8)
    const mes = valorData.slice(5, 7)
    const ano = valorData.slice(0, 4)
    const dataFormatada = `${dia}/${mes}/${ano}`
    const valor = Number(document.getElementById("campo-valor").value).toFixed(2)
    const categoria = document.getElementById("campo-categoria").value
    if(dia == '' || mes == '' || ano == ''){
        alert('há algum campo faltando na data')
    }
    else if (valor == '' || categoria == '' ){
        alert("Há algum campo faltando")
    }
    else{
        informations.push(categoria, valor, dataFormatada)
        return informations
    }
    
}

function addTrToTable(){
    const newTr = document.createElement("tr")
    const maxTd = 3
    const informations = getDataFromFields()
    if(!informations) return
    
    for(let i = 0; i < maxTd; i++){
        const td = document.createElement("td")
        if(i === 0){
            td.classList.add('categoria')
        }
        else if(i === 1){
            td.classList.add('gasto')
        }
        else{
            td.classList.add('data')
        }
        
        td.textContent = informations[i]
        newTr.appendChild(td)
    }
    tabela.appendChild(newTr)
}

function getTableDatas(){
    const categoriasArray = Array.from(document.getElementsByClassName('categoria')).map(td => td.textContent);
    const gastosArray = Array.from(document.getElementsByClassName('gasto')).map(td => Number(td.textContent));
    const datas = Array.from(document.getElementsByClassName('data')).map(td => td.textContent);
    return [categoriasArray, gastosArray, datas];
}

function gastoTotal(){
    const gastos = getTableDatas()[1]
    const soma = gastos.reduce((total, atual) => total + atual, 0);
    return soma
}
function mesesGastos(){
   
    const meses = getTableDatas()[2].map(data => data.slice(3, 5))
    const gastos = getTableDatas()[1]
    const totaisPorMes = {};

    for (let i = 0; i < meses.length; i++) {
        const mes = meses[i];
        const valor = gastos[i];

        if (!totaisPorMes[mes]) {
            totaisPorMes[mes] = 0;
        }

        totaisPorMes[mes] += valor;
    }

    return totaisPorMes;
}
function totalGastoMercado(){
    const categorias = getTableDatas()[0]
    const getGastos = getTableDatas()[1]
    let totalMercado = 0
    let categoria = 0
    if(categorias.includes('Mercado')){
        for(let i = 0; i < categorias.length; i++){
            categoria = categorias[i]
            if(categoria == 'Mercado'){
                totalMercado += getGastos[i]
                }  

        }
    }
    return totalMercado
}

function saveLocalStorage(){
    let totalExtrato = gastoTotal()
    let extratoMeses = mesesGastos()
    let extratoMercado = totalGastoMercado()
    localStorage.setItem('gastoTotal',JSON.stringify(totalExtrato))
    localStorage.setItem('mesesGastos',JSON.stringify(extratoMeses))
    localStorage.setItem('gastoMercado',JSON.stringify(extratoMercado))
    window.open('paraleloActivity6.html', '_blank')
}

calcular.addEventListener('click', saveLocalStorage)
adicionar.addEventListener('click', addTrToTable)
